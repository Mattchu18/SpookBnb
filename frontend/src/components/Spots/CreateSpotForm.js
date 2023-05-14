import SpotForm from './SpotForm'
import "./SpotForm.css"


const CreateSpotForm = () => {
    //rename previewImage to preview (boolean)
    //rename imageUrl to url (url)
    // const spot = {
    //     address: '',
    //     city: '',
    //     state: '',
    //     country: '',
    //     name: '',
    //     description: '',
    //     price: '',
    //     preview: '',
    //     url: ''
    // }

    return (
        <div className='global-center'>
            <SpotForm
                // spot={spot}
                formType="Create Spot"
            />

        </div>
    )
}

export default CreateSpotForm;
