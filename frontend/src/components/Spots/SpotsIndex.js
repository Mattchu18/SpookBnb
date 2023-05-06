import { useEffect } from "react";
import { getAllSpots } from "../../store/spots";
import { useDispatch, useSelector } from 'react-redux'

const SpotsIndex = () => {
    const dispatch = useDispatch();
    const spots = useSelector((state) => Object.values(state.spots))

    console.log("spotsIndex: ", spots)

    useEffect(() => {
        dispatch(getAllSpots())
    }, [dispatch])

    return (
        <>
            <ul>
                {spots.map((spot) => (

                    <div>
                        <img src={spot.previewImage} />
                        {spot.city}, {spot.state}
                    </div>
                ))}
            </ul>


        </>
    )

}

export default SpotsIndex
