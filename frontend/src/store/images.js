import { csrfFetch } from "./csrf";

const UPSERT_IMAGES = 'images/UPSERT_IMAGES'

const makeImage = (image) => ({ //will take in 'url'(url) and 'preview'(boolean)
    type: UPSERT_IMAGES,
    image
})

export const createImage = (image) => async (dispatch) => {
    // const res = await csrfFetch('api/spots')


}


//might not need this store...
