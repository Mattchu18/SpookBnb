const express = require('express');
const { Op } = require('sequelize');
const bcrypt = require('bcryptjs');

const { setTokenCookie, restoreUser } = require('../../utils/auth');
const { User, Spot, Review, ReviewImage, SpotImage } = require('../../db/models');

const router = express.Router();

const { check } = require('express-validator');
const { handleValidationErrors } = require('../../utils/validation');
const { requireAuth } = require('../../utils/auth');

// Delete a Review Image
router.delete('/:imageId', requireAuth, async (req, res, next) => {
    const { imageId } = req.params;
    const reviewImage = await ReviewImage.findByPk(imageId);

    //positioning matters
    if (!reviewImage) {
        return res.status(404).json({
            "message": "Review Image couldn't be found"
        })
    };

    const review = await Review.findByPk(reviewImage.reviewId)
    if (req.user.id !== review.userId) {
        return res.status(403).json({
            "message": "Review must belong to the current user"
        })
    };

    await reviewImage.destroy();
    return res.status(200).json({
        "message": "Successfully deleted"
    })
})



module.exports = router;
