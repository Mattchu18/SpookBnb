import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { thunkUserReviews } from "../../store/reviews";
import { getAllSpots } from "../../store/spots";
import "./ManageReviews.css"

const ManageReviews = () => {
    const dispatch = useDispatch()
    const userReviewsObj = useSelector(state => state.reviews.currentUserReviews)
    const userReviews = Object.values(userReviewsObj)

    const allSpotsObj = useSelector(state => state.spots.allSpots)
    const allSpots = Object.values(allSpotsObj)


    useEffect(() => {
        dispatch(thunkUserReviews())
        dispatch(getAllSpots())
    }, [dispatch])

    console.log("this is allSpots===>", allSpots)
    return (
        <>
            <div className="global-center">

                <h2 className="manage_review_heading">Manage Reviews</h2>
                <div className="all_reviews_container" >

                    {userReviews.map(review => {
                        const reviewedSpot = allSpots.find(spot => spot.id === review.spotId)
                        console.log("this is reviewed spot===>", reviewedSpot)
                        return (
                            <div className="individual-reviews">

                                <div> <h3>{reviewedSpot.name}</h3> </div>

                                <div>
                                    <img className="review-spot-image" src={reviewedSpot.previewImage} />
                                </div>
                                <div>

                                    <span>review is {review.review}</span>
                                </div>

                                <div>

                                    <span>stars is {review.stars}</span>
                                </div>
                            </div>
                        )
                    })}

                </div>


            </div>
        </>
    )
}

export default ManageReviews;
