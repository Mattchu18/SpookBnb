import { csrfFetch } from "./csrf";

const GET_ALL_REVIEWS = 'reviews/GET_ALL_REVIEWS';
const UPSERT_REVIEW = 'reviews/UPSERT_REVIEW'

const loadReviews = (reviews) => ({
    type: GET_ALL_REVIEWS,
    reviews
})

const makeReview = (review) => ({
    type: UPSERT_REVIEW,
    review
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


const initialState = { allReviews: {}, currentUserReviews: {} };

const reviewsReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_ALL_REVIEWS:
            return {
                ...state,
                allReviews: action.reviews.reduce(
                    (acc, review) => ({ ...acc, [review.id]: review }),
                    {}
                )
            };
        case UPSERT_REVIEW:
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
            return
        default:
            return state;

    }

}

export default reviewsReducer;