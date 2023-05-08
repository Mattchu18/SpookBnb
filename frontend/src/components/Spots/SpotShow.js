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

    console.log("inside SpotShow: ", spot)

    useEffect(() => {
        dispatch(getOneSpot(spotId))
    }, [dispatch, spotId])

    if (!spot) return null;

    return (
        <>
        <h2>Spot Name: {spot.name}</h2>
        <h3>Spot Address: {spot.address}</h3>
        <CreateReviewForm spotId={spotId}/>
        <AllSpotsReviews spotId={spotId}/>
        </>
    )
}

export default SpotShow;
