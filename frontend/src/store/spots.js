import { csrfFetch } from "./csrf";

const GET_ALL_SPOTS = 'spots/GET_ALL_SPOTS';
const GET_ONE_SPOT = 'spots/GET_ONE_SPOT';
const UPSERT_SPOT = 'spots/UPSERT_SPOT';
const GET_CURR_SPOTS = 'spots/GET_CURR_SPOTS';
const DEL_SPOT = 'spots/DEL_SPOT';
const UPSERT_IMAGE = 'spots/UPSERT_IMAGE'

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

const delSpot = (spotId) => ({
    type: DEL_SPOT,
    spotId
})

const makeImage = (spot) => ({
    type: UPSERT_IMAGE,
    spot
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

export const createSpot = (spot, user) => async (dispatch) => {
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
        // need to mimic structure in API docs
        data.Owner = user;
        data.SpotImages = []; // we keep this empty in case we dont update any images
        data.avgStarRating = 0;
        data.numReviews = 0;
        dispatch(createImage(data, data.SpotImages)) // we pass in an array of SpotImages
        // for(const image of spot.SpotImages){
        //     dispatch(createImage(data.id, image))
        // }
        //put the for loop inside the createImage instead

        console.log("this is res.status 201's data===>", data)
        return data
    }
}

//spotId , image
export const createImage = (spot, imageArr) => async (dispatch) => {
    console.log("createimage spot.id====>: ", spot.id)
    console.log("createimage imageArr====>: ", imageArr)

    for (let images of imageArr) {
        const res = await csrfFetch(`/api/spots/${spot.id}/images`, {
            "method": "POST",
            "headers": { 'Content-Type': 'application/json' },
            "body": JSON.stringify({
                url: images.url,
                preview: images.preview
            })
            //pass in spot.url and spot.preview ??
        })

        if (res.ok) {
            const data = await res.json()
            console.log("data inside createImage ===> ", data) //populate the array of SpotImages w/ our new images
            spot.SpotImages.push(data)
            // dispatch(makeSpot(data)) //replace this with new action creator
            // return data
            dispatch(loadOneSpot(spot))
        }
    }


}


export const getSpotCurrentUser = () => async (dispatch) => {
    const res = await csrfFetch('/api/spots/current')

    if (res.ok) {
        const data = await res.json();
        // console.log("getSpotCurrentUser ==>", data)
        dispatch(getCurrSpot(data.Spots))
        return data.Spots
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

export const deleteSpot = (spot) => async (dispatch) => {
    const res = await csrfFetch(`/api/spots/${spot.id}`,
        {
            "method": "DELETE"
        });

    if (res.ok) {
        console.log("RES OKAY")
        dispatch(delSpot(spot.id))
    }

}

const initialState = { allSpots: {},singleSpot:{}, currentUserSpots: {} };

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
                },
                singleSpot: action.spot
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
            };
        case UPSERT_IMAGE:
            console.log("UPSERT_IMAGE action=====>", action)
            return {
                ...state,
                allSpots: {
                    ...state.allSpots,
                    [action.spotId]: {
                        ...state.allSpots[action.spotId],
                        SpotImages: [
                            ...state.allSpots[action.spotId].SpotImages,
                            action.spotImage,
                        ],
                    },
                },
            };
        case GET_CURR_SPOTS:
            return {
                ...state,
                allSpots: action.spots.reduce(
                    (acc, spot) => ({ ...acc, [spot.id]: spot }),
                    {}
                ),
                currentUserSpots: action.spots.reduce(
                    (acc, spot) => ({ ...acc, [spot.id]: spot }),
                    {}
                )
            }
        case DEL_SPOT:
            const newState = {
                ...state,
                ...state.allSpots[action.spotId],
                ...state.currentUserSpots[action.spotId]
            };

            delete newState.currentUserSpots[action.spotId]
            delete newState.allSpots[action.spotId]
            return newState;
        default:
            return state;
    }
};

export default spotsReducer;
