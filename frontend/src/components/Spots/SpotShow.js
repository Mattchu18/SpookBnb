import { getOneSpot } from "../../store/spots";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import AllSpotsReviews from "../Reviews/AllSpotsReviews";
import CreateReviewForm from "../Reviews/CreateReviewForm"


const SpotShow = () => {
    const dispatch = useDispatch();
    const { spotId } = useParams();
    console.log("spotId: ", spotId)
    //we dont need Object.values bc we are getting the allSpots key from our state shape, but getting the one with spotId as the key
    const spot = useSelector((state) => state.spots.allSpots[spotId])

    useEffect(() => {
        dispatch(getOneSpot(spotId))
    }, [dispatch, spotId])

    //this console.log for spot.SpotImages returns undefined and crashes
    // console.log("inside SpotShow: ", spot.SpotImages)


    if (!spot) return (null);
    if(!spot.SpotImages) return null;

    return (
        <>
        <h2>{spot.name}</h2>
        <p>{spot.city}, {spot.state}, {spot.country}</p>
        {spot.SpotImages.map(images => (<img src={`${images.url}`}/>))}
        <CreateReviewForm spotId={spotId}/>
        <AllSpotsReviews spotId={spotId}/>
        </>
    )
}

export default SpotShow;
