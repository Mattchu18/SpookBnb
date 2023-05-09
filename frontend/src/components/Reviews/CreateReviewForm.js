import ReviewForm from "./ReviewForm";
import OpenModalButton from "../OpenModalButton"

const CreateReviewForm = ({ spotId }) => {
    const reviews = {
        review: '',
        stars: ''
    }
    console.log("CreateReviewForm ==>> ", spotId)
    return (
        <>
            <OpenModalButton
                buttonText="Create a review"
                modalComponent={<ReviewForm
                    reviews={reviews}
                    spotId={spotId}
                    formType={"Create Review"}
                />}
            />
        </>
    )
}

export default CreateReviewForm;
