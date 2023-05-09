import SpotForm from './SpotForm'

const CreateSpotForm = () => {
    //rename previewImage to preview (boolean)
    //rename imageUrl to url (url)
    const spot = {
        address: '',
        city: '',
        state: '',
        country: '',
        name: '',
        description: '',
        price: '',
        preview: '',
        url: ''
    }

    return (
        <SpotForm
            spot={spot}
            formType="Create Spot"
        />
    )
}

export default CreateSpotForm;
