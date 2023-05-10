import { getAllReviews } from "../../store/reviews";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";

const AllSpotsReviews = ({ spotId }) => {
    const dispatch = useDispatch();
    const reviewsObj = useSelector((state) => state.reviews.allReviews)
    const reviews = Object.values(reviewsObj)

    console.log("AllSpotsReviews===>", reviews)

    useEffect(() => {
        dispatch(getAllReviews(spotId))

    }, [dispatch, spotId])

    if (!reviews) return null

    return (
        <>
            <div>
                {reviews.map(review => (<ul key={review.id}>

                    <li>spotId: {review.spotId} </li>
                    <li>stars: {review.stars} </li>
                    <li>review: {review.review} </li>
                    {/* <li>UserId: {review.userId} , User: {review.User.firstName}  </li> */}
                </ul>
                ))}
            </div>

        </>

    )
}

export default AllSpotsReviews;