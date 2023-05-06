export const GET_ALL_SPOTS = 'spots/GET_ALL_SPOTS';


export const loadSpots = (spots) => ({
    type: GET_ALL_SPOTS,
    spots
});


export const getAllSpots = () => async (dispatch) => {
    const res = await fetch('/api/spots')

    if (res.ok || res.status === 200) {
        const data = await res.json()
        console.log("getAllSpots: ", data)
        dispatch(loadSpots(data))
        return data
    }
}


const spotsReducer = (state = {}, action) => {
    switch (action.type) {
        case GET_ALL_SPOTS:
            const spotsState = {};
            action.reports.forEach((spot) => {
                spotsState[spot.id] = spot
            });
            return spotsState;
        default:
            return state;
    }
}

export default spotsReducer;
