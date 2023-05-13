import { useEffect } from "react";
import { getAllSpots } from "../../store/spots";
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import './SpotsIndex.css'

const SpotsIndex = () => {
    const dispatch = useDispatch();
    //we use Object.values bc we need to have our spots iterable
    const spotsObj = useSelector((state) => state.spots.allSpots)
    const spots = Object.values(spotsObj)
    const sortedSpots = spots.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt)) // need to seperate bc if we dont its diff ref in memory
    console.log("spotsIndex: ", sortedSpots)

    useEffect(() => {
        dispatch(getAllSpots())
    }, [dispatch])

    if (!spots) return null;
    // if(!spots.forEach(spot => ((spot.previewImage))))

    return (
        <>
            <div className="global-center">

                <div className="all-spots-container">
                    {sortedSpots.map((spot) => (
                        <Link className="reset-text" to={`/spots/${spot.id}`} >
                            <div key={spot.id} className="spots-card-container">


                                {/* <img className="spots-image" src={spot.previewImage} /> */}
                                {/* <div className="spots-card-pic-container"> */}
                                <div className="spots-image-container">

                                    <img src={spot.previewImage} />
                                    {/* </div> */}
                                </div>

                                <div className="spots-card-text-container">
                                    {/* <Link to={`/spots/${spot.id}`}>{spot.name}</Link> */}

                                    {/* <p>{spot.name}</p> */}
                                    <div className="location-rating">
                                        <p>{spot.city}, {spot.state}</p>

                                        {spot.avgRating === null ? (
                                            <i
                                                class="fa fa-star"
                                                aria-hidden="true">
                                                {`New`}
                                            </i>
                                        ) :
                                        <i
                                                class="fa fa-star"
                                                aria-hidden="true">
                                                {spot.avgRating.toFixed(2)}
                                            </i>
                                        }


                                            {/* <i
                                                class="fa fa-star"
                                                aria-hidden="true">

                                                {`${spot.avgRating}`}
                                            </i> */}
                                        {/* <i
                                        class="fa fa-star"
                                        aria-hidden="true">

                                        {`${spot.avgRating}`}
                                    </i> */}

                                    </div>
                                    <p>${spot.price} night</p>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>

            </div>

        </>
    )

}

export default SpotsIndex
