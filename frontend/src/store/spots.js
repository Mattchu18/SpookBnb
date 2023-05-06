const GET_ALL_SPOTS = 'spots/GET_ALL_SPOTS';
const GET_ONE_SPOT = 'spots/GET_ONE_SPOT';

const loadSpots = (spots) => ({
    type: GET_ALL_SPOTS,
    spots
});

const loadOneSpot = (spot) => ({
    type: GET_ONE_SPOT,
    spot
})


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
