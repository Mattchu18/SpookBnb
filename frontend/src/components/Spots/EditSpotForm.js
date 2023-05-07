import SpotForm from "./SpotForm";
import { getOneSpot } from "../../store/spots";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { useParams } from "react-router-dom";

const EditSpotForm = () => {
    const dispatch = useDispatch();
    const { spotId } = useParams();
    const spot = useSelector((state) => state.spots.allSpots[spotId]) //state.spots is because of rootreducer in store/index.js
    console.log("this is editspotform spotid: ")
    console.log("inside editSpot: ", spot)
    // if (!spot) return (null);


    useEffect(()=> {
        // we are editing one spot so we need to getOneSpot()
        dispatch(getOneSpot(spotId))
    },[dispatch,spotId])

    if(!spot) return null

    return (
        <>
        <h1>HELLOO</h1>
        <SpotForm
        spot={spot}
        formType="Edit Spot"
        />
        </>
    )
}

export default EditSpotForm;
