import { getAllReviews } from "../../store/reviews";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { clearReviews } from "../../store/reviews";
import ReviewDelete from "../Reviews/ReviewDelete";
import OpenModalButton from "../OpenModalButton";
import CreateReviewForm from "../Reviews/CreateReviewForm"

const AllSpotsReviews = ({ spot, spotId }) => {
    const dispatch = useDispatch();
    const reviewsObj = useSelector((state) => state.reviews.allReviews)
    // const reviewsObj2 = useSelector((state) => state.reviews)
    const reviews = Object.values(reviewsObj)
    const sessionUser = useSelector((state) => state.session.user)
    console.log("sessionUser====>", sessionUser)
    console.log("AllSpotsReviews===>", reviews)

    const sortedReviews = reviews.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))

    const monthYearConvert = (dateString) => {
        const date = new Date(dateString);
        const year = date.getFullYear();
        const month = date.getMonth();
        const listOfMonths = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
        const monthName = listOfMonths[month];
        return `${monthName} ${year}`
    }

    useEffect(() => {
        dispatch(getAllReviews(spotId))

        //this is cleanup function that will dispatch and clearReviews
        return () => {
            dispatch(clearReviews())
        }
    }, [dispatch, spotId])

    if (!reviews) return null
    console.log("AllSpotsReviews2===>", reviews)

    // const [userReview] = reviews.filter(review => review.userId === sessionUser.id)
    // console.log("userReview===>", userReview)
    // if( reviews.forEach( review =>
    //     review?.User ?? null
    // ))



    console.log("AllSpotsReviews3===>", reviews)

    //ternary

    const match = (reviews.find((review) =>
        review.userId === sessionUser?.id))

    // const ownerOfSpot = (spot.ownerId === sessionUser?.id )
    const ownerOfSpot = (sessionUser && spot.ownerId === sessionUser.id)


    console.log("ownerOfSpot??====>", ownerOfSpot)
    console.log("this is match!! =>>", match)
    // console.log("AllSpotsReviews===>", reviews)
    console.log("AllSpotsReviews4===>", reviews)

    return (
        <>
            {console.log("sortedReviews====>", sortedReviews)}
            <>
                {/* !!sessionUser or Boolean(sessionUser) */}
                {!(match || ownerOfSpot) && Boolean(sessionUser) && (
                    <>
                        <CreateReviewForm spotId={spotId} />
                        {!sortedReviews.length && (<p>Be the first to post a review!</p>)}
                    </>
                )}
                <div>

                </div>
                {sortedReviews.map(review => (
                    <div className="review" key={review.id}>
                        {/* <li>{review.User.firstName}</li> */}
                        <p>{review.User?.firstName}</p>
                        {<p>{monthYearConvert(review.createdAt)}</p>}
                        {/* below will break my page when I delete p review and try to create p new review */}
                        {/* <p>reviewer: {review.User.firstName}</p> */}

                        <p>{review.review} </p>

                        {sessionUser?.id === review.userId && (
                            <OpenModalButton
                                className="delete_review_button"
                                buttonText="Delete"
                                modalComponent={<ReviewDelete
                                    review={review.id}
                                    spotId={spotId}
                                />}
                            />

                        )}

                        {/* <li>UserId: {review.userId} , User: {review.User.firstName}  </li> */}
                    </div>
                ))}
            </>

        </>

    )
}

export default AllSpotsReviews;
