import { getOneSpot } from "../../store/spots";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';

const SpotShow = () => {
    const dispatch = useDispatch();
    const { spotId } = useParams();
    console.log("spotId: ", spotId)
    //we dont need Object.values bc we are getting allSpots, but getting the one with spotId as the key
    const spot = useSelector((state) => state.spots.allSpots[spotId])

    console.log("inside SpotShow: ", spot)

    useEffect(() => {
        dispatch(getOneSpot(spotId))
    }, [dispatch, spotId])

    if (!spot) return null;

    return (
        <>
        <h2>{spot.name}</h2>
        <p>{spot.address}</p>
        </>
    )
}

export default SpotShow;
