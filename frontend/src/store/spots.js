 const GET_ALL_SPOTS = 'spots/GET_ALL_SPOTS';


const loadSpots = (spots) => ({
    type: GET_ALL_SPOTS,
    spots
});


export const getAllSpots = () => async (dispatch) => {
    const res = await fetch('/api/spots')

    if (res.ok || res.status === 200) {
        const spots = await res.json()
        console.log("getAllSpots: ", spots)
        dispatch(loadSpots(spots))
        return spots
    }
};


const spotsReducer = (state = {}, action) => {
    switch (action.type) {
        case GET_ALL_SPOTS:
            const spotsState = {};
            console.log("inside spotsReducer: ",action)
            action.spots.Spots.forEach((spot) => {
                spotsState[spot.id] = spot
            });
            return spotsState;
        default:
            return state;
    }
};

export default spotsReducer;
