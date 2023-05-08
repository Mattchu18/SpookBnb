import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { getSpotCurrentUser } from "../../store/spots";
import SpotIndexItem from "../Spots/SpotIndexItem"

const CurrentSpots = () => {
    const dispatch = useDispatch();
    //get our spots
    const spotsObj = useSelector((state) => state.spots.allSpots)
    const spots = Object.values(spotsObj);
    console.log("inside currentSpots ===>", spots)


    useEffect(() => {
        dispatch(getSpotCurrentUser())
    }, [dispatch])

    return (
        <>
            {spots.map(spot => (
                <div key ={spot.id}>
                    <Link to={`/spots/${spot.id}`}>{spot.name}</Link>
                    <p>{spot.id}</p>
                    <p>{spot.address}</p>
                    <SpotIndexItem
                        spot={spot}

                    />
                </div>
            ))}
        </>
    )

}

export default CurrentSpots;
