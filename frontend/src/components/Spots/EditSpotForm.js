import { useParams } from "react-router-dom";
import SpotForm from "./SpotForm";
import { useEffect } from "react";
import { editSpot } from "../../store/spots";
import { useDispatch, useSelector } from "react-redux";

const EditSpotForm = () => {
    const dispatch = useDispatch();
    const { spotId } = useParams();
    const spot = useSelector((state) => state.spots[spotId])

    console.log("inside editSpot: ", spot)
    // if (!spot) return (null);


    useEffect(()=> {

        dispatch(editSpot(spot))

    },[dispatch, spot])
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
