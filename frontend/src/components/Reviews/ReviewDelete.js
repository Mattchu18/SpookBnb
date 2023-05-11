import { useDispatch } from "react-redux";
import { deleteReview } from "../../store/reviews";
import { useModal } from '../../context/Modal'
import { getOneSpot } from "../../store/spots";

const ReviewDelete = ({review}) => {
    const dispatch = useDispatch();
    const {closeModal} = useModal();
console.log("ReviewDelete ===> ", review)

    const handleDelete = async (e) => {
        e.preventDefault()

        await dispatch(deleteReview(review))
        dispatch(getOneSpot(review.spotId)) //not redirecting
        .then(closeModal)
    }

    return(
        <>
        <h1>Confirm Delete</h1>
        <p>Are you sure you want to delete this review?</p>
            <button onClick={handleDelete}>Yes (Delete Review)</button>
            <button onClick={closeModal}>No (Keep Review)</button>
        </>
    )

}

export default ReviewDelete;
