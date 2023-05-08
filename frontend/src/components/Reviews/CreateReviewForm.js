import ReviewForm from "./ReviewForm";

const CreateReviewForm = ({spotId}) => {
    const reviews = {
        review: '',
        stars: ''
    }
    console.log("CreateReviewForm ==>> ", spotId)
    return (
        <ReviewForm
            reviews={reviews}
            spotId={spotId}
            formType={"Create Review"}
        />
    )
}

export default CreateReviewForm;
