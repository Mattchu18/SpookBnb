import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getSpotCurrentUser } from "../../store/spots";

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
                    <h2>{spot.name}</h2>
                    <p>{spot.id}</p>
                    <p>{spot.address}</p>
                </>
            ))}
        </>
    )

}

export default CurrentSpots;
