import { useDispatch } from "react-redux";
import { deleteReview } from "../../store/reviews";
import { useModal } from '../../context/Modal'

const ReviewDelete = ({review}) => {
    const dispatch = useDispatch();
    const {closeModal} = useModal();
    const handleDelete = (e) => {
        e.preventDefault()

        dispatch(deleteReview(review))
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
