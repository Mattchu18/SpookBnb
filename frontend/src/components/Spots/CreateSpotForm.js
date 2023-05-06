import SpotForm from './SpotForm'

const CreateSpotForm = () => {
    const spot = {
        address: '',
        city: '',
        state: '',
        country: '',
        name: '',
        description: '',
        price: '',
        previewImage: '',
        imageUrl: ''
    }

    return (
        <SpotForm
            spot={spot}
            formType="Create Spot"
        />
    )
}

export default CreateSpotForm;
