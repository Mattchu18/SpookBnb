import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { createReview } from '../../store/reviews';
import StarsRatingInput from './StarsRatingInput';
import { useModal } from '../../context/Modal'
import { getOneSpot } from '../../store/spots';


const ReviewForm = ({ spotId, reviews, formType }) => {
    const dispatch = useDispatch();
    const [review, setReview] = useState("");
    const [stars, setStars] = useState(1);
    const [validationErrors, setValidationErrors] = useState("");
    const { closeModal } = useModal(); // we are pulling our closeModal function from our custom context

    reviews = {
        ...reviews,
        review,
        stars
    }

    // useEffect(() => {
    //     console.log("useEffect in ReviewForm!!!")

    // },[reviews])

    const handleSubmit = async (e) => {
        e.preventDefault()

        if (formType === "Create Review") {

            await dispatch(createReview(spotId, reviews))
                .then(closeModal)
                dispatch(getOneSpot(spotId))
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
