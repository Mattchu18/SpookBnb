import { useDispatch } from 'react-redux';
import { deleteSpot } from '../../store/spots';

const DeleteSpot = ({spot}) => {
    const dispatch = useDispatch();
    const handleDelete = (e) => {
        e.preventDefault();

        dispatch(deleteSpot(spot))
    }

    return (
        <>
        <button onClick={handleDelete}>Delete Spot</button>
        </>

    )

}

export default DeleteSpot;
