import { useEffect } from "react";
import { getAllSpots } from "../../store/spots";
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

const SpotsIndex = () => {
    const dispatch = useDispatch();
    //we use Object.values bc we need to have our spots iterable
    const spotsObj = useSelector((state) => state.spots.allSpots)
    const spots = Object.values(spotsObj) // need to seperate bc if we dont its diff ref in memory
    console.log("spotsIndex: ", spots)

    useEffect(() => {
        dispatch(getAllSpots())
    }, [dispatch])

    if(!spots) return null;
    // if(!spots.forEach(spot => ((spot.previewImage))))

    return (
        <>
            <ul>
                {spots.map((spot) => (
                    <div key={spot.id}>
                        <img src={spot.previewImage} />
                        <Link to={`/spots/${spot.id}`}>{spot.name}</Link>
                        {spot.city}, {spot.state}
                    </div>
                ))}
            </ul>


        </>
    )

}

export default SpotsIndex
