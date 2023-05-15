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
        <div className='modal-content'>
            <div className="modal_delete_container">
                <div className="delete_text">
                    <h2>Confirm Delete</h2>
                    <p>Are you sure you want to remove this spot from the listings?</p>
                </div>
                <div className="delete_buttons">

                    <button className="yes_button" onClick={handleDelete}>Yes (Delete Spot)</button>
                    <button className="no_button" onClick={closeModal}>No (Keep Spot)</button>
                </div>

                {/* <Link to={`/spots/${spot.id}/edit`}>
            <button>
                Update
            </button>
        </Link> */}
            </div>
        </div>

    )

}

export default DeleteSpot;
