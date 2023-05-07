import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { getSpotCurrentUser } from "../../store/spots";
import SpotIndexItem from "../Spots/SpotIndexItem"

const CurrentSpots = () => {
    const dispatch = useDispatch();
    //get our spots
    const spots = useSelector((state) => Object.values(state.spots.allSpots));



    console.log("inside currentSpots ===>", spots)


    useEffect(() => {
        dispatch(getSpotCurrentUser())
    }, [dispatch])

    return (
        <>
            {spots.map(spot => (
                <>
                    <Link to={`/spots/${spot.id}`}>{spot.name}</Link>
                    <p>{spot.id}</p>
                    <p>{spot.address}</p>
                    <SpotIndexItem
                        spot={spot}
                        key={spot.id}
                    />
                </>
            ))}
        </>
    )

}

export default CurrentSpots;
