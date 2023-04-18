const express = require('express');
const { Op } = require('sequelize');
const bcrypt = require('bcryptjs');

const { setTokenCookie, restoreUser } = require('../../utils/auth');
const { User, Spot, SpotImage } = require('../../db/models');

const router = express.Router();

const { check } = require('express-validator');
const { handleValidationErrors } = require('../../utils/validation');

const authenticate = [

]

// Get all Spots
// unfinished: need numReviews, avgStarRating
router.get('/', async (req, res, next) => {
    const spots = await Spot.findAll();

    res.status(200).json(spots)
})


// Get all spots owned by Current User
// Unfinished: need to authorize/authenticate
router.get('/current', async (req, res, next) => {
    //const current =
    const spots = await Spot.findAll({
        where: {
            userId: current //define current
        }
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
    if(!spots){
        res.status(404).json({
                "message": "Spot couldn't be found"
              })
    }
    res.status(200).json(spots)
})

// Create a Spot
// unfinished
const newPostChecker = [
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
router.post('/', newPostChecker, async (req, res, next) => {
    const { address, city, state, country, lat, lng, name, description, price } = req.body;
    const newSpot = await Spot.create({
        //ownerId: //current authentication
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
router.post('/:spotId/images', async (req, res, next) => {
    const { url, preview } = req.body;
    const { spotId } = req.params;
    const spotImage = await SpotImage.findByPk(spotId)

    if(!spotImage){
        return res.status(404).json({
            "message": "Spot couldn't be found"
        })
    }

    const newImage = await SpotImage.create({
        spotId: spotImage.id,
        url,
        preview
    })

    res.status(200).json({
        spotId: spotImage.id,
        url: newImage.url,
        preview: newImage.preview
    })

});


router.delete('/', async (req, res, next) => {


})



module.exports = router;
