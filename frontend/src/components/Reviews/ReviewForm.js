import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { createReview } from '../../store/reviews';
import StarsRatingInput from './StarsRatingInput';

const ReviewForm = ({ spotId, reviews, formType }) => {
    const dispatch = useDispatch();
    const history = useHistory();
    const [review, setReview] = useState("");
    const [stars, setStars] = useState(1);
    const [validationErrors, setValidationErrors] = useState("");

    reviews = {
        ...reviews,
        review,
        stars
    }



    const handleSubmit = (e) => {
        e.preventDefault()

        if (formType === "Create Review") {
            dispatch(createReview(spotId, reviews))
            // history.push("/") //closeModal
        }

    }

    const onChange = (number) => {
        setStars(parseInt(number))
    }


    return (
        <form onSubmit={handleSubmit}>
            <h2>How was your stay?</h2>
            <textarea
                type="text"
                value={review}
                onChange={(e) => setReview(e.target.value)}
                placeholder='Leave your review here' />
            <StarsRatingInput
                disabled={false}
                onChange={onChange}
                stars={stars}
            />
            <input type='submit'/>

        </form>

    )


}

export default ReviewForm;
