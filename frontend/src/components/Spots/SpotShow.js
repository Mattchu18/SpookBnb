import { getOneSpot } from "../../store/spots";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';

const SpotShow = () => {
    const dispatch = useDispatch();
    const { spotId } = useParams();
    console.log("spotId: ", spotId)
    const spot = useSelector((state) => state.spots.allSpots[spotId])

    console.log("inside SpotShow: ", spot)

    useEffect(() => {
        dispatch(getOneSpot(spotId))
    }, [dispatch, spotId])
}

export default SpotShow;
