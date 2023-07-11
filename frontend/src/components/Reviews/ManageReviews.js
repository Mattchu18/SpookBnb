import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { thunkUserReviews } from "../../store/reviews";
import "./ManageReviews.css"

const ManageReviews = () => {
    const dispatch = useDispatch()
    const userReviewsObj = useSelector(state => state.reviews.currentUserReviews)
    const userReviews = Object.values(userReviewsObj)

    useEffect(() => {
        dispatch(thunkUserReviews())
    }, [dispatch])

    // console.log("this is userReviews===>", userReviews)
    return (
        <>
            <div className="global-center">

                <h2 className="manage_review_heading">Manage Reviews</h2>
                <div className="all_reviews_container" >

                        {userReviews.map(review => (
                            <div className="individual-reviews">
                                <div> <span>spotId is {review.spotId}</span></div>

                                <div>

                                    <span>review is {review.review}</span>
                                </div>

                                <div>

                                    <span>stars is {review.stars}</span>
                                </div>
                            </div>
                        ))

                        }

                </div>


            </div>
        </>
    )
}

export default ManageReviews;
