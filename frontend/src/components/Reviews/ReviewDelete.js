import { useDispatch } from "react-redux";
import { deleteReview } from "../../store/reviews";

const ReviewDelete = ({review}) => {
    const dispatch = useDispatch();
    const handleDelete = (e) => {
        e.preventDefault()

        dispatch(deleteReview(review))
    }

    return(
        <>
            <button onClick={handleDelete}>Delete Review</button>
        </>
    )

}

export default ReviewDelete;
