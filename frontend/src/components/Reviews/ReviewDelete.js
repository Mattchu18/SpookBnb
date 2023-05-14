import { useDispatch } from "react-redux";
import { deleteReview } from "../../store/reviews";
import { useModal } from '../../context/Modal'
import { getOneSpot } from "../../store/spots";

const ReviewDelete = ({ review, spotId }) => {
    const dispatch = useDispatch();
    const { closeModal } = useModal();
    console.log("ReviewDelete ===> ", review)

    const handleDelete = async (e) => {
        e.preventDefault()

        await dispatch(deleteReview(review))
            .then(closeModal)
        dispatch(getOneSpot(spotId))
    }

    return (
        <div className="review_delete_container">
            <div className="review_delete_text">
                <h2>Confirm Delete</h2>
                <p>Are you sure you want to delete this review?</p>
            </div>
            <div className="review_delete_buttons">

                <button className="yes_button"onClick={handleDelete}>Yes (Delete Review)</button>
                <button className="no_button" onClick={closeModal}>No (Keep Review)</button>
            </div>
        </div>
    )

}

export default ReviewDelete;
