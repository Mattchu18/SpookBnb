import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { getSpotCurrentUser } from "../../store/spots";
import DeleteSpot from "./DeleteSpot";
import SpotForm from "./SpotForm";
import OpenModalButton from "../OpenModalButton";
import EditSpotForm from "./EditSpotForm";
import "./SpotsIndex.css"

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
            <div>
                <h2>Manage Spots</h2>

                <Link to={"/spots/new"}>
                    <button>Create a New Spot</button>
                </Link>

            </div>
            {/* <div>
                {spots.map(spot => (
                    <div key={spot.id}>
                        <Link to={`/spots/${spot.id}`}>{spot.name}</Link>
                        <img src={spot.previewImage} />
                        <p>spot id: {spot.id}</p>
                        <div>
                            <p>{spot.city}, {spot.state}</p>
                            <i
                                class="fa fa-star"
                                aria-hidden="true">
                                {` ${spot.avgRating}`}
                            </i>
                        </div>

                        <Link to={`/spots/${spot.id}/edit`}>
                            <button>
                                Update
                            </button>
                        </Link>
                        <OpenModalButton
                            buttonText="Delete"
                            modalComponent={
                                <DeleteSpot
                                    spot={spot}
                                />
                            }
                        />

                    </div>
                ))}
            </div> */}

<div className="global-center">

<div className="all-spots-container">
    {spots.map((spot) => (
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
                    <Link to={`/spots/${spot.id}/edit`}>
                            <button>
                                Update
                            </button>
                        </Link>
                        <OpenModalButton
                            buttonText="Delete"
                            modalComponent={
                                <DeleteSpot
                                    spot={spot}
                                />
                            }
                        />
                </div>
            </div>
        </Link>
    ))}
</div>

</div>


        </>
    )

}

export default CurrentSpots;
