import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { thunkUserReviews } from "../../store/reviews";


const ManageReviews = () => {
    const dispatch = useDispatch()
    const userReviewsObj = useSelector(state => state.reviews.currentUserReviews)
    const userReviews = Object.values(userReviewsObj)

    useEffect(() => {
        dispatch(thunkUserReviews())
    }, [dispatch])

    console.log("this is userReviews===>", userReviewsObj)
    return (
        <>
            <div className="global-center">
                <div className="manage_spot_heading_container">
                    <div className="manage_spot_text" >
                        <h2>Manage Reviews</h2>
                        <div className="user-reviews-container">
                            {userReviews.map(review => (
                                <div>
                                    <span>spotId is {review.spotId}</span>
                                    <span>review is {review.review}</span>
                                    <span>stars is {review.stars}</span>
                                </div>
                            ))

                            }

                            Hello
                        </div>
                    </div>
                </div>
                <div className="all-spots-container">
                </div>
            </div>
        </>
    )
}

export default ManageReviews;
