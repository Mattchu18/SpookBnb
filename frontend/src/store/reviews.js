import { csrfFetch } from "./csrf";

const GET_ALL_REVIEWS = 'reviews/GET_ALL_REVIEWS';
const UPSERT_REVIEW = 'reviews/UPSERT_REVIEW'
const DEL_REVIEW = 'reviews/DEL_REVIEW'
const CLEAR_REVIEWS = 'review/CLEAR_REVIEWS'

const loadReviews = (reviews) => ({
    type: GET_ALL_REVIEWS,
    reviews
})

const makeReview = (review) => ({
    type: UPSERT_REVIEW,
    review
})

const delReview = (reviewId) => ({
    type: DEL_REVIEW,
    reviewId
})

export const clearReviews = () => ({
    type: CLEAR_REVIEWS
})

export const getAllReviews = (spotId) => async (dispatch) => {
    console.log("spotId ====> ", spotId)
    const res = await csrfFetch(`/api/spots/${spotId}/reviews`)

    if (res.ok) {
        const data = await res.json()

        console.log("getAllReviews====>", data)

        dispatch(loadReviews(data.Reviews))
        return data.Reviews
    }

}

export const createReview = (spotId, reviews) => async (dispatch) => {
    const res = await csrfFetch(`/api/spots/${spotId}/reviews`, { //string interpolate
        "method": "POST",
        "headers": { 'Content-Type': 'application/json' },
        "body": JSON.stringify(reviews)
    })

    if (res.ok) {
        const data = await res.json()
        dispatch(makeReview(data))
        return data
    }
}

export const deleteReview = (reviewId) => async (dispatch) => {
    console.log("inside deleteReview===>", reviewId)
    const res = await csrfFetch(`/api/reviews/${reviewId}`,
        {
            "method": "DELETE"
        })
    if (res.ok) {
        dispatch(delReview(reviewId))
    }

}


const initialState = { allReviews: {}, currentUserReviews: {} };

const reviewsReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_ALL_REVIEWS: {
            console.log("GET_ALL_REVIEWS action ===> ", action.reviews)

            const reviewsState = {
                ...state,
                allReviews: {} //empty bc we stack reviews from one spot to another
            }                 // thus it will keep adding reviews to state
            // thisll clear the old reviews and replace it
            action.reviews.forEach(review => {
                reviewsState.allReviews[review.id] = review
            })
            return reviewsState;
        }

        // }
        // {
        //     ...state,
        //     allReviews: action.reviews.reduce(
        //         (acc, review) => ({ ...acc, [review.id]: review }),
        //         {}
        //     ),
        //     currentUserReviews: action.reviews.reduce(
        //         (acc, review) => ({ ...acc, [review.id]: review }),
        //         {}
        //     )
        // };
        case UPSERT_REVIEW: {
            return {
                ...state,
                allReviews: {
                    ...state.allReviews,
                    [action.review.id]: action.review
                },
                currentUserReviews: { //since the user is the only one able to upsert
                    //we need to deep copy and overriding the keys of the properties
                    ...state.currentUserReviews,
                    [action.review.id]: action.review
                }
            }
        }
        case DEL_REVIEW: {
            // const newState = { ...state, ...state.allReviews[action.reviewId], ...state.currentUserReviews[action.reviewId] }
            const newState = {
                ...state,
                allReviews: { ...state.allReviews },
                currentUserReviews: { ...state.currentUserReviews }
            }

            delete newState.currentUserReviews[action.reviewId]
            delete newState.allReviews[action.reviewId]
            return newState
        }
        case CLEAR_REVIEWS: {
            const newState = {
                ...state,
                allReviews: {},
                currentUserReviews: {} //not sure. test pls
            }
            return newState
        }
        default:
            return state;

    }

}

export default reviewsReducer;
