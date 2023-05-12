import { getOneSpot } from "../../store/spots";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import AllSpotsReviews from "../Reviews/AllSpotsReviews";
import CreateReviewForm from "../Reviews/CreateReviewForm"


const SpotShow = () => {
    const dispatch = useDispatch();
    const { spotId } = useParams();
    console.log("spotId: ", spotId)
    //we dont need Object.values bc we are getting the allSpots key from our state shape, but getting the one with spotId as the key
    const spot = useSelector((state) => state.spots.allSpots[spotId])
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
                    {` ${spot.avgStarRating} - ${spot.numReviews} Reviews`}
                </i>
            )
        }
        if (spot.numReviews === 1) {
            return (
                <i
                    class="fa fa-star"
                    aria-hidden="true">
                    {` ${spot.avgStarRating} - ${spot.numReviews} Review`}
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




    return (
        <>
            <h2>{spot.name}</h2>
            <p>{spot.city}, {spot.state}, {spot.country}</p>
            {spot.SpotImages.map(images => (<img src={`${images.url}`} />))}
            <div>
                <h2>{`Hosted by spot ${spot.Owner.firstName} ${spot.Owner.lastName}`}</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                <div>
                    <h2>{`$${spot.price} night`}</h2>
                    {numOfReviews()}
                </div>
                <hr />
            </div>
            {/* <CreateReviewForm spotId={spotId} /> */}
            <AllSpotsReviews spot={spot} spotId={spotId} />
        </>
    )
}

export default SpotShow;
