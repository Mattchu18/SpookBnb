import SpotForm from "./SpotForm";
import { getOneSpot } from "../../store/spots";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import "./SpotForm.css"

const EditSpotForm = () => {
    const dispatch = useDispatch();
    const { spotId } = useParams();
    const spot = useSelector((state) => state.spots.singleSpot) //state.spots is because of rootreducer in store/index.js
    console.log("inside editSpot: ", spot)
    // if (!spot) return (null);


    useEffect(() => {
        // we are editing one spot so we need to getOneSpot()
        dispatch(getOneSpot(spotId))
    }, [dispatch, spotId])

    if (!spot) return null

    return (
        <div className='global-center'>
                <SpotForm
                    spot={spot}
                    formType="Edit Spot"
                />
        </div>
    )
}

export default EditSpotForm;
