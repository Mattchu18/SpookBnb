const express = require('express');
const { Op } = require('sequelize');
const bcrypt = require('bcryptjs');

const { setTokenCookie, restoreUser } = require('../../utils/auth');
const { User, Spot } = require('../../db/models');

const router = express.Router();

const { check } = require('express-validator');
const { handleValidationErrors } = require('../../utils/validation');

const authenticate = [

]

// Get all Spots
// Finished??
router.get('/', async(req, res, next) => {
    const spots = await Spot.findAll();

    res.status(200).json(spots)
})


// Get all spots owned by Current User
// Unfinished
router.get('/current', async(req, res, next) => {
    //const current =
    const spots = await Spot.findAll({
        where: {
            userId: current //define current
        }
    })

});

// Get details of a Spot from an id

router.get('/:spotid')







module.exports = router;
