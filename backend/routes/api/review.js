const express = require('express');
const { Op } = require('sequelize');
const bcrypt = require('bcryptjs');

const { setTokenCookie, restoreUser } = require('../../utils/auth');
const { User, Spot, Review, ReviewImage } = require('../../db/models');

const router = express.Router();

const { check } = require('express-validator');
const { handleValidationErrors } = require('../../utils/validation');
const { requireAuth } = require('../../utils/auth');

// Get all Reviews of the Current User
router.get('/current', requireAuth, async (req, res, next) => {
    const id = req.user.id;
    const reviews = await Review.findAll({
        where: {
            userId: id
        },
        include: [
            { model: User },
            {
                model: Spot,
                attributes: [
                    'id',
                    'ownerId',
                    'address',
                    'city',
                    'state',
                    'country',
                    'lat',
                    'lng',
                    'name',
                    'price',
                    //'previewImage'
                ]
            },
            {
                model: ReviewImage,
                attributes: [
                    'id',
                    'url'
                ]
            }
        ]
    })
    res.json({
        "Reviews": reviews
    })
})


module.exports = router;
