const express = require('express');
const { Op } = require('sequelize');
const bcrypt = require('bcryptjs');

const { setTokenCookie, restoreUser } = require('../../utils/auth');
const { User, Spot, SpotImage, Review, ReviewImage, Booking } = require('../../db/models');

const router = express.Router();

const { check } = require('express-validator');
const { handleValidationErrors } = require('../../utils/validation');
const { requireAuth } = require('../../utils/auth');

// Get all of the Current User's Bookings
router.get('/current', requireAuth, async (req, res, next) => {
    const userId = req.user.id;
    const bookings = await Booking.findAll({
        where: {
            userId
        },
        include: [
            {
                model: Spot,
                attributes: { exclude: ['createdAt', 'updatedAt', 'description'] },
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
            if (url.preview === true) {
                spot.Spot.previewImage = url.url
            }
        })
    })

    arr.forEach(bookings => {
        delete bookings.Spot.SpotImages
    })

    return res.json({ "Bookings": arr })
})

// Edit a booking
router.put('/:bookingId', requireAuth, async (req, res, next) => {
    const { bookingId } = req.params;
    const userId = req.user.id;
    const bookings = await Booking.findAll();
    const booking = await Booking.findByPk(bookingId);
    const { startDate, endDate } = req.body;
    let conflict = false;

    // console.log(new Date(booking.startDate).getTime())
    if (!booking) {
        return res.status(404).json({
            "message": "Booking couldn't be found"
        })
    };

    // console.log(booking.userId)
    if (userId !== booking.userId) {
        return res.status(403).json({
            "message": "Forbidden"
        })
    };

    // console.log(new Date().getTime())


    const reqStart = new Date(startDate).getTime();
    const reqEnd = new Date(endDate).getTime()



    if (reqStart >= reqEnd || reqEnd <= reqStart) {
        if (conflict) return;
        conflict = true;
        // console.log( 'DONE2', conflict)

        return res.status(400).json({
            "message": "Bad Request",
            "errors": {
                "endDate": "endDate cannot be on or before startDate"
            }
        })
    }

    // console.log(new Date().getTime())

    let arr = [];
    bookings.forEach(booking => {
        arr.push(booking.toJSON());
    });

    // console.log(arr);
    // res.json(arr)
    if (new Date(booking.startDate).getTime() < new Date().getTime()) {
        if (conflict) return;
        conflict = true;
        // console.log( 'DONE1', conflict)

        return res.status(403).json({
            "message": "Past bookings can't be modified"
        })
    };

    arr.forEach(booking => {
        const start = new Date(booking.startDate).getTime();
        const end = new Date(booking.endDate).getTime();
        // console.log(reqStart, start)
        // console.log(reqEnd, end)
        // console.log(new Date().getTime())

        if ((reqStart >= start && reqStart < end) || (reqEnd > start && reqEnd <= end) || (reqStart <= start && reqEnd >= end)) {
            if (conflict) return;
            conflict = true;
            // console.log( 'DONE3', conflict)
            return res.status(403).json({
                "message": "Sorry, this spot is already booked for the specified dates",
                "errors": {
                    "startDate": "Start date conflicts with an existing booking",
                    "endDate": "End date conflicts with an existing booking"
                }
            })
        }
    });


    if (conflict) return;

    // update values
    booking.startDate = startDate;
    booking.endDate = endDate;
    await booking.save();

    return res.status(200).json({
        booking
    })

});

// Delete a Booking
router.all('/:bookingId', requireAuth, async (req, res, next) => {
    const { bookingId } = req.params;
    const booking = await Booking.findByPk(bookingId, {
        include: {
            model: Spot
        }
    });
    const userId = req.user.id;
    // const spot = await Spot.findOne({
    //     where: {
    //         ownerId: userId
    //     }
    // })

    if (!booking) {
        return res.status(404).json({
            "message": "Booking couldn't be found"
        })
    };

    // if( userId !== booking.userId && !spot)&& userId !== spot.userId

    // console.log(userId, booking.userId, spot)
    // if (userId !== booking.userId && userId !== spot.ownerId) {
        // if (userId !== booking.userId && userId !== spot && userId !== spot.ownerId) {

        //the spot owner cant delete bookings for his spot
        // console.log(booking)
    if (!(userId === booking.userId || userId === booking.Spot.ownerId)) {
        return res.status(403).json({
            "message": "Forbidden"
        })
    };

    const current = new Date().getTime();
    const start = new Date(booking.startDate).getTime();

    // console.log(diff, current)
    if (start <= current) {
        return res.status(403).json({
            "message": "Bookings that have been started can't be deleted"
        })
    };

    await booking.destroy();
    return res.status(200).json({
        "message": "Successfully deleted"
    });
});

module.exports = router;
