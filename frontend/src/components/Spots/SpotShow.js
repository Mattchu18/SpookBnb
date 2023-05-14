import { getOneSpot } from "../../store/spots";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import AllSpotsReviews from "../Reviews/AllSpotsReviews";
import CreateReviewForm from "../Reviews/CreateReviewForm"
import "./SpotShow.css"

const SpotShow = () => {
    const dispatch = useDispatch();
    const { spotId } = useParams();
    console.log("spotId: ", spotId)
    //we dont need Object.values bc we are getting the allSpots key from our state shape, but getting the one with spotId as the key
    const spot = useSelector((state) => state.spots.singleSpot)
    //check useselector for single spot instead

    useEffect(() => {
        dispatch(getOneSpot(spotId))

    }, [dispatch, spotId])




    if (!spot) return (null);

    if (!spot.SpotImages) return (<div>Hello world</div>)

    console.log('after null', spot)

    const numOfReviews = () => {
        if (spot.numReviews > 1) {
            return (
                <i
                    class="fa fa-star"
                    aria-hidden="true">
                    {` ${spot.avgStarRating.toFixed(2)} · ${spot.numReviews} Reviews`}
                </i>
            )
        }
        if (spot.numReviews === 1) {
            return (
                <i
                    class="fa fa-star"
                    aria-hidden="true">
                    {` ${spot.avgStarRating} · ${spot.numReviews} Review`}
                </i>
            )
        }
        if (spot.numReviews === 0) {
            return (
                <i
                    class="fa fa-star"
                    aria-hidden="true">
                    {`New`}
                </i>
            )
        }

    }

    // if (!spot.Owner)  return null
    //this console.log for spot.SpotImages returns undefined and crashes
    console.log("inside SpotShow spot: ", spot.Owner.firstName)

    const alertButton = () => {
        alert("Feature coming soon!!")
    }


    return (
        <>

            <div className="global-center">
                <div className="spot_title_text">
                    <h2>{spot.name}</h2>
                    <p>{spot.city}, {spot.state}, {spot.country}</p>
                </div>

                <div className="parent_image_container">
                    {spot.SpotImages[0].url && (
                        <div className="big_image_container">
                            <img src={spot.SpotImages[0].url} />
                        </div>
                    )}

                    <div className="small_images_container">
                        {spot.SpotImages.map(images => (
                            (images.preview !== true) ? (
                                <div className="small_images">
                                    <img src={`${images.url}`} />
                                </div>
                            ) : null
                        ))}
                    </div>
                </div>

                <div className="spot_details_container">
                    <div className="spot_details_text">
                        <h2>{`Hosted by spot ${spot.Owner.firstName} ${spot.Owner.lastName}`}</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                    </div>
                    <div className="callout_container">
                        <div className="callout_text">
                            <h2>{`$${spot.price} night`}</h2>
                            {numOfReviews()}
                        </div>
                        <div className="callout_button">
                            <button onClick={() => alert("Feature coming soon!!!")}>
                                Reserve
                            </button>
                        </div>
                    </div>


                </div>

                <div className="reviews_container">
                    {numOfReviews()}
                </div>
                {/* <CreateReviewForm spotId={spotId} /> */}
                <AllSpotsReviews spot={spot} spotId={spotId} />
            </div>

        </>
    )
}

export default SpotShow;
