const express = require('express');
const { Op } = require('sequelize');
const bcrypt = require('bcryptjs');

const { setTokenCookie, restoreUser } = require('../../utils/auth');
const { User, Spot, SpotImage, Review, ReviewImage, Booking } = require('../../db/models');

const router = express.Router();

const { check } = require('express-validator');
const { handleValidationErrors } = require('../../utils/validation');
const { requireAuth } = require('../../utils/auth');

// Get all Bookings for a Spot based on the Spot's id
router.get('/current', requireAuth, async(req, res, next) => {
    const userId = req.user.id;
    const bookings = await Booking.findAll({
        where: {
            userId
        },
        include: [
            {
            model: Spot,
            attributes: { exclude: ['createdAt', 'updatedAt', 'description']},
            include: {
                model: SpotImage
            }
        },
    ]
    });

    let arr = [];
    bookings.forEach(booking => {
        arr.push(booking.toJSON())
    });

    // console.log(arr)
    arr.forEach(spot => {
        spot.Spot.SpotImages.forEach(url => {
            if(url.preview === true) {
                spot.Spot.previewImage = url.url
            }
        })
    })

    arr.forEach(bookings => {
        delete bookings.Spot.SpotImages
    })

    // console.log(bookings[0].toJSON().Spot.preview)

    // if(bookings[0].toJSON().Spot.preview === true){
    //     bookings[0].toJSON().Spot.previewImage = bookings[0].toJSON().Spot.url
    // }

    res.json({"Bookings": arr})
})



module.exports = router;
