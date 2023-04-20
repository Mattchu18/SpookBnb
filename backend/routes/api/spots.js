const express = require('express');
const { Op } = require('sequelize');
const bcrypt = require('bcryptjs');

const { setTokenCookie, restoreUser } = require('../../utils/auth');
const { User, Spot, SpotImage, Review, ReviewImage, Booking } = require('../../db/models');

const router = express.Router();

const { check } = require('express-validator');
const { handleValidationErrors } = require('../../utils/validation');
const { requireAuth } = require('../../utils/auth');

const queryValidator = [
    check('page')
        .optional()
        .notEmpty()
        .isInt({
            min: 1
        }).withMessage("Page must be greater than or equal to 1"),
    check('size')
        .optional()
        .notEmpty()
        .isInt({
            min: 1
        })
        .withMessage("Size must be greater than or equal to 1"),
    check('maxLat')
        .optional()
        .isDecimal()
        .withMessage("Maximum latitude is invalid"),
    check('minLat')
        .optional()
        .isDecimal()
        .withMessage("Minimum latitude is invalid"),
    check('maxLng')
        .optional()
        .isDecimal()
        .withMessage("Maximum longitude is invalid"),
    check('minLng')
        .optional()
        .isDecimal()
        .withMessage("Minimum longitude is invalid"),
    check('minPrice')
        .optional()
        .isFloat({ min: 0 })
        .withMessage("Minimum price must be greater than or equal to 0"),
    check('maxPrice')
        .optional()
        .isFloat({ min: 0 })
        .withMessage("Maximum price must be greater than or equal to 0")
    , handleValidationErrors
];
// Get all Spots
// unfinished: need avgRating, previewImage
router.get('/', queryValidator, async (req, res, next) => {
    let { page, size, minLat, maxLat, minLng, maxLng, minPrice, maxPrice } = req.query;

    page = parseInt(page);
    size = parseInt(size);

    if (!page || page > 10) page = 1;
    if (!size || size > 20) size = 20;

    const pagination = {};
    if (page >= 1 && page <= 10 && size >= 1 && size <= 20) {
        pagination.limit = size;
        pagination.offset = size * (page - 1);
    }

    const where = {};

    if (minLat) {
        where.lat = { [Op.gte]: minLat };
    };
    if (maxLat) {
        where.lat = { [Op.lte]: maxLat }
    };
    if (minLat && maxLat) {
        where.lat = { [Op.between]: [minLat, maxLat] }
    };
    if (minLng) {
        where.lng = { [Op.gte]: minLng }
    };
    if (maxLng) {
        where.lng = { [Op.lte]: maxLng }
    };
    if (minLng && maxLng) {
        where.lng = { [Op.between]: [minLng, maxLng] }
    };
    if (minPrice) {
        where.price = { [Op.gte]: minPrice }
    };
    if (maxPrice) {
        where.price = { [Op.lte]: maxPrice }
    };
    if (minPrice && maxPrice) {
        where.price = { [Op.between]: [minPrice, maxPrice] }
    };


    const spots = await Spot.findAll({
        include: [
            {model: SpotImage},
            {model: Review}
        ],
        ...pagination,
        where
    });



    let arr = [];
    spots.forEach(spot => {
        arr.push(spot.toJSON())
    })

    arr.forEach(spot => {
        let stars = 0;
        let count = 0;
        spot.Reviews.forEach(review => {
            stars += review.stars
            count++
        })
        spot.avgRating = stars/count

        spot.SpotImages.forEach(image => {
            if (image.preview === true) {
                spot.previewImage = image.url;
            }
        })
    })

    arr.forEach(spot => delete spot.SpotImages)
    arr.forEach(spot => delete spot.Reviews)

    return res.status(200).json({ "Spots": arr, page, size })
})


// Get all spots owned by Current User
router.get('/current', requireAuth, async (req, res, next) => {
    const id = req.user.id;
    const spots = await Spot.findAll({
        where: {
            ownerId: id
        }
    })
    return res.json({
        "Spots": spots
    })
});

// Get details of a Spot from an id
// unfinished: need numReviews, avgStarRating
router.get('/:spotId', async (req, res, next) => {
    const { spotId } = req.params;
    const spots = await Spot.findByPk(spotId, {
        include: [
            { model: SpotImage },
            {
                model: User,
                as: 'Owner'
            }
        ]
    })
    if (!spots) {
        return res.status(404).json({
            "message": "Spot couldn't be found"
        })
    }
    return res.status(200).json(spots)
})


const spotChecker = [
    check('address')
        .exists({ checkFalsy: true })
        .notEmpty()
        .withMessage("Street address is required"),
    check('city')
        .exists({ checkFalsy: true })
        .notEmpty()
        .withMessage("City is required"),
    check('state')
        .exists({ checkFalsy: true })
        .notEmpty()
        .withMessage("State is required"),
    check('country')
        .exists({ checkFalsy: true })
        .notEmpty()
        .withMessage("Country is required"),
    check('lat')
        .exists({ checkFalsy: true })
        .notEmpty()
        .withMessage("Latitude is not valid"),
    check('lng')
        .exists({ checkFalsy: true })
        .notEmpty()
        .withMessage("Longitude is not valid"),
    check('name')
        .exists({ checkFalsy: true })
        .notEmpty()
        .withMessage("Name must be less than 50 characters"),
    check('description')
        .exists({ checkFalsy: true })
        .notEmpty()
        .withMessage("Description is required"),
    check('price')
        .exists({ checkFalsy: true })
        .notEmpty()
        .withMessage("Price per day is required"),
    handleValidationErrors
];

// Create a Spot
router.post('/', requireAuth, spotChecker, async (req, res, next) => {
    const user = req.user.id;
    const { address, city, state, country, lat, lng, name, description, price } = req.body;
    const newSpot = await Spot.create({
        ownerId: user, //current authentication
        address,
        city,
        state,
        country,
        lat,
        lng,
        name,
        description,
        price
    })

    return res.status(201).json(newSpot)
})

// Add an image to a Spot based on the Spot's id
router.post('/:spotId/images', requireAuth, async (req, res, next) => {
    const user = req.user.id;
    const { spotId } = req.params;
    const { url, preview } = req.body;
    const spot = await Spot.findByPk(spotId)

    if (!spot) {
        return res.status(404).json({
            "message": "Spot couldn't be found"
        })
    }

    if (user !== spot.ownerId) {
        return res.status(403).json({
            "message": "Forbidden"
        })
    }

    const newImage = await SpotImage.create({
        spotId: spot.id,
        url,
        preview
    })

    return res.status(200).json({
        id: newImage.id,
        url: newImage.url,
        preview: newImage.preview
    })

});

// Edit a Spot
router.put('/:spotId', requireAuth, spotChecker, async (req, res, next) => {
    const { spotId } = req.params;
    const updatedSpot = await Spot.findByPk(spotId);

    if (!updatedSpot) {
        return res.status(404).json({
            "message": "Spot couldn't be found"
        })
    }
    if (req.user.id !== updatedSpot.ownerId) {
        return res.status(403).json({
            "message": "Forbidden"
        })
    }

    const { address, city, state, country, lat, lng, name, description, price } = req.body;
    updatedSpot.address = address;
    updatedSpot.city = city;
    updatedSpot.state = state;
    updatedSpot.country = country;
    updatedSpot.lat = lat;
    updatedSpot.lng = lng;
    updatedSpot.name = name;
    updatedSpot.description = description;
    updatedSpot.price = price;

    await updatedSpot.save();
    return res.status(200).json(updatedSpot)
})

// Delete a Spot
router.delete('/:spotId', requireAuth, async (req, res, next) => {
    const { spotId } = req.params;
    const spotToDelete = await Spot.findByPk(spotId)

    if (!spotToDelete) {
        return res.status(404).json({
            "message": "Spot couldn't be found"
        })
    }
    if (req.user.id !== spotToDelete.ownerId) {
        return res.status(403).json({
            "message": "Forbidden"
        })
    }

    await spotToDelete.destroy();
    return res.status(200).json({
        "message": "Successfully deleted"
    })
})


// Get all Reviews by a Spots's id
router.get('/:spotId/reviews', async (req, res, next) => {
    const { spotId } = req.params;
    const spot = await Spot.findByPk(spotId)
    const review = await Review.findAll({
        where: {
            spotId: spotId
        },
        include: [{
            model: User
        },
        {
            model: ReviewImage,
            attributes: ['id', 'url']
        }]
    })

    if (!spot) {
        // console.log(parseInt(spotId), review[0].spotId)
        return res.status(404).json({
            "message": "Spot couldn't be found"
        })
    }
    return res.status(200).json({
        "Reviews":
            review
    })
})

const reviewChecker = [
    check('review')
        .exists({ checkFalsy: true })
        .notEmpty()
        .withMessage("Review text is required"),
    check('stars')
        .exists({ checkFalsy: true })
        .notEmpty()
        .withMessage("Stars must be an integer from 1 to 5"),
    handleValidationErrors
];
// Create a Review for a Spot based on the Spot's id
router.post('/:spotId/reviews', requireAuth, reviewChecker, async (req, res, next) => {
    const id = req.params.spotId;
    const userId = req.user.id
    const spot = await Spot.findByPk(id)
    const { review, stars } = req.body;

    if (!spot) {
        return res.status(404).json({
            "message": "Spot couldn't be found"
        })
    }

    const reviewed = await Review.findOne({
        where: {
            spotId: id,
            userId
        }
    })

    // console.log(reviewed, userId)
    if (reviewed) {
        return res.status(500).json({
            "message": "User already has a review for this spot"
        })
    }

    const newReview = await Review.create({
        spotId: spot.id,
        userId,
        review,
        stars
    })

    return res.status(201).json(newReview)
})

// Get all Bookings for a Spot based on the Spot's id
router.get('/:spotId/bookings', requireAuth, async (req, res, next) => {
    const { spotId } = req.params;
    const userId = req.user.id;
    const spot = await Spot.findByPk(spotId);
    const ownerBookings = await Booking.findAll({
        where: {
            // userId,
            spotId
        },
        include: {
            model: User
        },
    })
    const notOwnerBookings = await Booking.findAll({
        where: {
            spotId
        },
        attributes: ['spotId', 'startDate', 'endDate']
    });

    if (!spot) {
        return res.status(404).json({
            "message": "Spot couldn't be found"
        })
    };

    // console.log(userId, spot.ownerId)
    if (userId !== spot.ownerId) {
        return res.status(200).json({
            "Bookings": notOwnerBookings
        })
    };

    if (userId === spot.ownerId) {
        return res.status(200).json({
            "Bookings": ownerBookings
        })
    };

})

// const bookingChecker = [
//     check('endDate')
//         .exists({ checkFalsy: true })
//         .notEmpty()
//         .withMessage("endDate cannot be on or before startDate"),
//     handleValidationErrors
// ];

// Create a Booking from a Spot based on the Spot's id
// took out bookingChecker
router.post('/:spotId/bookings', requireAuth, async (req, res, next) => {
    const { spotId } = req.params;
    const userId = req.user.id;
    const { startDate, endDate } = req.body;
    const spot = await Spot.findByPk(spotId);
    const bookings = await Booking.findAll({
        where: {
            spotId
        }
    });

    if (!spot) {
        return res.status(404).json({
            "message": "Spot couldn't be found"
        })
    }
    if (userId === spot.ownerId) {
        return res.status(403).json({
            "message": "Forbidden"
        })
    }
    // console.log(new Date(startDate).getTime())
    // console.log(new Date(endDate).getTime())

    const reqStart = new Date(startDate).getTime();
    const reqEnd = new Date(endDate).getTime()

    // console.log(bookings);
    // console.log(bookings[0].toJSON());
    let arr = [];
    bookings.forEach(booking => {
        arr.push(booking.toJSON());
    })

    // console.log(arr);
    arr.forEach(booking => {
        const start = new Date(booking.startDate).getTime();
        const end = new Date(booking.endDate).getTime();

        if (reqStart >= reqEnd) {
            return res.status(400).json({
                "message": "Bad Request",
                "errors": {
                    "endDate": "endDate cannot be on or before startDate"
                }
            })
        }
        if ((reqStart >= start && reqStart < end) || (reqEnd > start && reqEnd <= end) || (reqStart <= start && reqEnd >= end)) {
            return res.status(403).json({
                "message": "Sorry, this spot is already booked for the specified dates",
                "errors": {
                    "startDate": "Start date conflicts with an existing booking",
                    "endDate": "End date conflicts with an existing booking"
                }
            })
        }

    })
    // console.log(arr);

    const booking = await Booking.create({
        spotId: spot.id,
        userId,
        startDate,
        endDate
    })

    return res.status(200).json(booking)
})

module.exports = router;
