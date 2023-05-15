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
            <div className="global-center">
                <div className="manage_spot_heading_container">
                    <div className="manage_spot_text" >
                        <h2>Manage Spots</h2>
                        <Link to={"/spots/new"}>
                            <button className="create-new-spot button ">Create a New Spot</button>
                        </Link>
                    </div>
                </div>
                <div className="all-spots-container">
                    {spots.map((spot) => (
                        <div className="current_spots_card_container">
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
                                        </div>
                                        <p>${spot.price} night</p>
                                    </div>
                                </div>
                            </Link>

                            <div className="update_delete_buttons">
                                <Link to={`/spots/${spot.id}/edit`}>
                                    <button className="button_current">
                                        Update
                                    </button>
                                </Link>
                                <OpenModalButton
                                    buttonText="Delete"
                                    modalComponent={<DeleteSpot spot={spot} />}
                                />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}

export default CurrentSpots;
