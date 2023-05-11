import { useDispatch } from 'react-redux';
import { deleteSpot, getSpotCurrentUser } from '../../store/spots';
import { Link } from "react-router-dom";
import { useModal } from "../../context/Modal"

const DeleteSpot = ({ spot }) => {
    const dispatch = useDispatch();
    const { closeModal } = useModal();

    const handleDelete = async (e) => {
        e.preventDefault();

        await dispatch(deleteSpot(spot))
        dispatch(getSpotCurrentUser())
        .then(closeModal)
    }

    return (
        <>
            <h2>Confirm Delete</h2>
            <p>Are you sure you want to remove this spot from the listings?</p>
            <button onClick={handleDelete}>Yes (Delete Spot)</button>
            <button onClick={closeModal}>No (Keep Spot)</button>
            {/* <Link to={`/spots/${spot.id}/edit`}>
            <button>
                Update
            </button>
        </Link> */}
        </>

    )

}

export default DeleteSpot;
