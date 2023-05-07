import { csrfFetch } from "./csrf";

const GET_ALL_SPOTS = 'spots/GET_ALL_SPOTS';
const GET_ONE_SPOT = 'spots/GET_ONE_SPOT';
const CREATE_SPOT =  'spots/MAKE_SPOT'


const loadSpots = (spots) => ({
    type: GET_ALL_SPOTS,
    spots
});

const loadOneSpot = (spot) => ({
    type: GET_ONE_SPOT,
    spot
});

const makeSpot = (spot) => ({
    type: CREATE_SPOT,
    spot
});

export const getAllSpots = () => async (dispatch) => {
    const res = await fetch('/api/spots')

    if (res.ok || res.status === 200) {
        const data = await res.json() //we get { Spots; [spots: {}]}

        console.log("getAllSpots' data: ", data)

        dispatch(loadSpots(data.Spots))
        return data.Spots
    }
};

export const getOneSpot = (spotId) => async (dispatch) => {
    const res = await (fetch(`/api/spots/${spotId}`))

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
    if (res.status === 400) {
        const data = await res.json()
        console.log(data) //change later to set any errors?
    }
    if (res.status === 201) {
        const data = await res.json()
        dispatch(makeSpot(data))
    }
}


const spotsReducer = (state = {}, action) => {
    switch (action.type) {
        case GET_ALL_SPOTS:
            const spotsState = {};
            // console.log("inside spotsReducer: ",action)
            action.spots.forEach((spot) => {
                spotsState[spot.id] = spot
            });
            return spotsState;
        case GET_ONE_SPOT:
            console.log("inside spotsReducer: ", action)

            return { ...state, [action.spot.id]: action.spot }
        default:
            return state;
    }
};

export default spotsReducer;
