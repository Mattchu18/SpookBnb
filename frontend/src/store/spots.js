import { csrfFetch } from "./csrf";

const GET_ALL_SPOTS = 'spots/GET_ALL_SPOTS';
const GET_ONE_SPOT = 'spots/GET_ONE_SPOT';
const UPSERT_SPOT = 'spots/UPSERT_SPOT'
const GET_CURR_SPOTS = 'spots/GET_CURR_SPOTS'

const loadSpots = (spots) => ({
    type: GET_ALL_SPOTS,
    spots
});

const loadOneSpot = (spot) => ({
    type: GET_ONE_SPOT,
    spot
});

const makeSpot = (spot) => ({
    type: UPSERT_SPOT,
    spot
});

const getCurrSpot = (spots) => ({
    type: GET_CURR_SPOTS,
    spots
})

export const getAllSpots = () => async (dispatch) => {
    const res = await csrfFetch('/api/spots')

    if (res.ok || res.status === 200) {
        const data = await res.json() //we get { Spots; [spots: {}]}

        console.log("getAllSpots' data: ", data)

        dispatch(loadSpots(data.Spots))
        return data.Spots
    }
};

export const getOneSpot = (spotId) => async (dispatch) => {
    const res = await (csrfFetch(`/api/spots/${spotId}`))

    console.log("res for getOneSpot: ", res)

    if (res.ok || res.status === 200) {
        const spot = await res.json(); //we actually get one spot back

        console.log("this is getOneSpot: ", spot)

        dispatch(loadOneSpot(spot))
        return spot
    }
}

export const createSpot = (spot) => async (dispatch) => {
    const res = await csrfFetch('/api/spots', {
        "method": "POST",
        "headers": { 'Content-Type': 'application/json' },
        "body": JSON.stringify(spot)
    })
    if (res.status === 400) { //doublecheck the res.status in backend -- might be diff status code
        const data = await res.json()
        console.log("you are in res.status 400: ", data) //change later to set any errors?
        return data
    }
    if (res.status === 201) {
        const data = await res.json()
        console.log("this is res.status 201")
        dispatch(makeSpot(data))
        return data
    }
}

export const getSpotCurrentUser = (spots) => async (dispatch) => {
    const res = await csrfFetch('/api/spots/current')

    if (res.ok) {
        const data = await res.json();
        dispatch(getCurrSpot(data.spots))
        return data
    }

}

export const editSpot = (spot) => async (dispatch) => {
    console.log("inside editSpot thunk: ", spot)
    const res = await csrfFetch(`/api/spots/${spot.id}`, {
        "method": "PUT",
        "headers": { 'Content-Type': 'application/json' },
        "body": JSON.stringify(spot)
    })
    if (res.status === 404) {
        const data = await res.json()
        console.log("you are in res.status 404: ", data)
        return data
    }
    if (res.status === 400) {
        const data = await res.json()
        console.log("you are in res.status 400: ", data)
        return data
    }
    if (res.status === 200) {
        const data = await res.json()
        console.log("this is res.status 200")
        dispatch(makeSpot(data))
        return data
    }
}

const initialState = { allSpots: {}, currentUserSpots: {} };

const spotsReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_ALL_SPOTS:
            // const spotsState = { allSpots: {}, currentUserSpots: {...state.currentUserSpots} };
            // // console.log("inside spotsReducer: ",action)
            // action.spots.forEach((spot) => {
            //     spotsState[spot.id] = spot
            // });
            // return spotsState;
            return {
                ...state,
                allSpots: action.spots.reduce(
                    (acc, spot) => ({ ...acc, [spot.id]: spot }),
                    {}
                )
            };
        case GET_ONE_SPOT:
            // console.log("inside spotsReducer: ", action)
            // return { ...state, [action.spot.id]: action.spot };
            return {
                ...state,
                allSpots: {
                    ...state.allSpots, //we getting all the spots
                    [action.spot.id]: action.spot   //and then pasting over it with the single spot
                }
            };
        case UPSERT_SPOT:
            console.log("inside spotsReducer DO_SPOT: ", action.spot)
            return {
                ...state,
                allSpots: {
                    ...state.allSpots,
                    [action.spot.id]: action.spot
                },
                currentUserSpots: { //since the user is the only one able to upsert
                        //we need to deep copy and overriding the keys of the properties
                    ...state.currentUserSpots,
                    [action.spot.id]: action.spot
                }
            }
        default:
            return state;
    }
};

export default spotsReducer;
