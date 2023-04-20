const express = require('express');
const { Op } = require('sequelize');
const bcrypt = require('bcryptjs');

const { setTokenCookie, restoreUser } = require('../../utils/auth');
const { User, Spot, SpotImage, Review, ReviewImage, Booking } = require('../../db/models');

const router = express.Router();

const { check } = require('express-validator');
const { handleValidationErrors } = require('../../utils/validation');
const { requireAuth } = require('../../utils/auth');

// Delete a Spot image
router.delete('/:imageId', requireAuth, async (req, res, next) => {
    const { imageId } = req.params;
    const spotImage = await SpotImage.findByPk(imageId);

    // positioning matters
    if (!spotImage) {
        return res.status(404).json({
            "message": "Spot Image couldn't be found"
        })
    };

    const spot = await Spot.findByPk(spotImage.spotId);
    if (spotImage.spotId !== spot.id) {
        return res.status(404).json({
            "message": "Spot Image couldn't be found"
        })
    };

    // console.log(req.user.id, spot.ownerId)
    if (req.user.id !== spot.ownerId) {
        return res.status(403).json({
            "message": "Spot must belong to the current user"
        })
    };

    spotImage.destroy();
    return res.status(200).json({
        "message": "Successfully deleted"
    })
});





module.exports = router;
