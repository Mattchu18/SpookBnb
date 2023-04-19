const express = require('express');
const { Op } = require('sequelize');
const bcrypt = require('bcryptjs');

const { setTokenCookie, restoreUser } = require('../../utils/auth');
const { User, Spot, SpotImage, Review } = require('../../db/models');

const router = express.Router();

const { check } = require('express-validator');
const { handleValidationErrors } = require('../../utils/validation');
const { requireAuth } = require('../../utils/auth');

const authenticate = [

]

// Get all Spots
// unfinished: need avgRating, previewImage
router.get('/', async (req, res, next) => {
    const reviewCount = await Review.findAll()
    // console.log(reviewCount)
    // res.json(reviewCount)

    const spots = await Spot.findAll({
        include: [
            {
                model: SpotImage,
            },
        ]
    });

    res.status(200).json(spots)
})


// Get all spots owned by Current User
// need "Spots" at beginning of response
router.get('/current', requireAuth, async (req, res, next) => {
    const id = req.user.id;
    const spots = await Spot.findAll({
        where: {
            ownerId: id
        }
    })
    res.json(spots)
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
        res.status(404).json({
            "message": "Spot couldn't be found"
        })
    }
    res.status(200).json(spots)
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

    res.status(201).json(newSpot)
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
        res.json({
            "message": "Spot must belong to the current user"
        })
    }

    const newImage = await SpotImage.create({
        spotId: spot.id,
        url,
        preview
    })

    res.status(200).json({
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
        res.status(403).json({
            "message": "Spot must belong to the current user"
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
    res.status(200).json(updatedSpot)
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
            "message": "Spot must belong to the current user"
        })
    }

    await spotToDelete.destroy();
    res.status(200).json({
        "message": "Successfully deleted"
    })
})



module.exports = router;