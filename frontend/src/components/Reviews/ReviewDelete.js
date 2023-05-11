import { useDispatch } from "react-redux";
import { deleteReview } from "../../store/reviews";
import { useModal } from '../../context/Modal'
import { getOneSpot } from "../../store/spots";

const ReviewDelete = ({review, spotId}) => {
    const dispatch = useDispatch();
    const {closeModal} = useModal();
console.log("ReviewDelete ===> ", review)

    const handleDelete = async (e) => {
        e.preventDefault()

        await dispatch(deleteReview(review))
        .then(closeModal)
        dispatch(getOneSpot(spotId))
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
