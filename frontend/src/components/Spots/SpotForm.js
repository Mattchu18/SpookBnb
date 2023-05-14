import { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { createSpot, editSpot, createImage } from '../../store/spots';
import { getOneSpot } from "../../store/spots"

const endsWith = (url) => !url.endsWith(".jpg") && !url.endsWith(".png") && !url.endsWith(".jpeg")


const SpotForm = ({ spot, formType }) => {
    const dispatch = useDispatch();
    const history = useHistory();
    const user = useSelector(state => state.session.user)
    const [address, setAddress] = useState(spot?.address);
    const [city, setCity] = useState(spot?.city)
    const [state, setState] = useState(spot?.state)
    const [lat, setLat] = useState(spot?.lat ?? 1)
    const [lng, setLng] = useState(spot?.lng ?? 1)
    const [country, setCountry] = useState(spot?.country)
    const [name, setName] = useState(spot?.name)
    const [description, setDescription] = useState(spot?.description ?? "")
    const [price, setPrice] = useState(spot?.price)
    // rename previewImage to preview (boolean)

    console.log("Inside SpotForm ====> ", spot)
    const [url1, setUrl1] = useState(spot?.SpotImages?.[0]?.url ?? '');
    const [url2, setUrl2] = useState(spot?.SpotImages?.[1]?.url ?? '');
    const [url3, setUrl3] = useState(spot?.SpotImages?.[2]?.url ?? '');
    const [url4, setUrl4] = useState(spot?.SpotImages?.[3]?.url ?? '');
    const [url5, setUrl5] = useState(spot?.SpotImages?.[4]?.url ?? '');
    // const [preview, setPreview] = useState(spot?.SpotImages.findIndex(({ preview }) => preview) ?? 0);
    const [validationErrors, setValidationErrors] = useState("")
    // const [preview, setPreview] = useState(true)

    // useEffect((e) => {

    // }, [country, address, city, state, description, name, price, url1, url2, url3, url4, url5])



    const handleSubmit = async (e) => {
        e.preventDefault();
        //add preview
        //add url
        //make 1st image input placeholder for preview image
        //make new state for [preview, setPreview] = useState(true)
        let errors = {};
        if (!country) errors.country = "Country is required"
        if (!address) errors.address = "Address is required"
        if (!city) errors.city = "City is required"
        if (!state) errors.state = "State is required"
        if (description.length < 30) errors.description = "Description needs a minimum of 30 characters"
        if (!name) errors.name = "Name is required"
        if (!price || price <= 0) errors.price = "Price is required"


        if (url1.length === 0) errors.url1 = "Preview image is required"
        if (endsWith(url1)) errors.url2 = "Image URL must end in .png, .jpg, or .jpeg"


        if (url2.length &&
            endsWith(url2)
        ) errors.url2 = "Image URL must end in .png, .jpg, or .jpeg"
        if (url3.length &&
            endsWith(url3)
        ) errors.url2 = "Image URL must end in .png, .jpg, or .jpeg"
        if (url4.length &&
            endsWith(url4)
        ) errors.url2 = "Image URL must end in .png, .jpg, or .jpeg"
        if (url5.length &&
            endsWith(url5)
        ) errors.url2 = "Image URL must end in .png, .jpg, or .jpeg"




        setValidationErrors(errors)


        console.log("user====>", user)
        //make new inputs for url
        const newSpot = {
            ...spot,
            address,
            city,
            state,
            lat,
            lng,
            country,
            name,
            description,
            price,
            SpotImages: [
                { preview: true, url: url1 },
                { preview: false, url: url2 },
                { preview: false, url: url3 },
                { preview: false, url: url4 },
                { preview: false, url: url5 }
            ]
        }



        if (formType === "Create Spot") {
            const data = await dispatch(createSpot(newSpot, user))
            // dispatch(createSpot(spot))
            // if(data.validationErrors) {
            //     return setValidationErrors()
            // }

            console.log("after dispatch create a spot====>", data)

            history.push(`/spots/${data.id}`)


            //need push to createimage
        }
        if (formType === "Edit Spot") {
            const data = await dispatch(editSpot(newSpot))

            history.push(`/spots/${data.id}`)
            return
        }
    }

    // const setPreviewImageAndUrl = (e) => {
    //     setUrl1(e.target.value)
    //     setPreview(true)
    // }


    return (


        <div className="form_container">
            <form onSubmit={handleSubmit}>
                {formType === "Create Spot" ? <h2>Create a New Spot</h2> : <h2>Update your Spot</h2>}

                <div className='h3_form_heading'>
                    <h3>Where's your place located?</h3>
                    Guests will only get your exact address once they booked a reservation.
                </div>
                <div className='form-input'>
                    <div className='form-name-errors'>
                        Country
                        {validationErrors.country ? <p className="errors">{validationErrors.country}</p> : null}
                    </div>
                    <input
                        type="text"
                        value={country}
                        onChange={(e) => setCountry(e.target.value)}
                        placeholder='Country'
                    />

                </div>
                <div className='form-input'>
                    <div className='form-name-errors'>
                        Street Address {validationErrors.address ? <p className="errors">{validationErrors.address}</p> : null}
                    </div>
                    <input
                        type="text"
                        value={address}
                        onChange={(e) => setAddress(e.target.value)}
                        placeholder='Street Address'
                    />
                </div>
                <div className='outer-form-input '>
                    <div className='form-input city'>
                        <div className='form-name-errors'>
                            City {validationErrors.city ? <p className="errors">{validationErrors.city}</p> : null}
                        </div>

                        <input
                            type="text"
                            value={city}
                            onChange={(e) => setCity(e.target.value)}
                            placeholder='City'
                        />

                    </div>
                    <span className='comma'>,</span>
                    <div className='form-input state'>
                        <div className='form-name-errors'>
                            State {validationErrors.state ? <p className="errors">{validationErrors.state}</p> : null}
                        </div>

                        <input
                            type="text"
                            value={state}
                            onChange={(e) => setState(e.target.value)}
                            placeholder='State'
                        />
                    </div>
                </div>
                <hr />
                <div className='form-input padding'>
                    <div className='h3_form_heading'>
                        <h3>Describe your place to guests</h3>
                        Mention the best features of your space, any special amenities like fast wifi or parking, and what you love about the neighborhood.
                    </div>
                    <textarea
                        type="text"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        placeholder='Please write at least 30 characters'
                    />
                    {validationErrors.description ? <p className="errors">{validationErrors.description}</p> : null}
                </div>
                <hr />
                <div className='form-input padding'>
                    <div className='h3_form_heading'>
                        <h3>Create a title for your spot</h3>
                        Catch guests' attention with a spot title that highlights what makes your place special.
                    </div>
                    <div className='form-input'>                        <input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder='Name of your spot'
                    />
                        {validationErrors.name ? <p className="errors">{validationErrors.name}</p> : null}
                    </div>
                    <hr />
                </div>
                <div className='form-input padding'>

                    <div className='h3_form_heading'>
                        <h3>Set a base price for your spot</h3>
                        Competitive pricing can help your listing stand out and rank higher in search results.
                    </div>
                    <input
                        type="number"
                        value={price}
                        onChange={(e) => setPrice(e.target.value)}
                        placeholder='Price per night (USD)'
                    />
                    {validationErrors.price ? <p className="errors">{validationErrors.price}</p> : null}

                </div>
                <hr />
                <div className='form-input padding url'>
                    <div className='h3_form_heading'>

                        <h3>Liven up your spot with photos</h3>
                        Submit a link to at least one photo to publish your spot.
                    </div>
                    {/* this first onChange will always setPreview(true) AND url */}
                    <input
                        type="text"
                        value={url1} //might need refactoring... boolean?
                        onChange={(e) => setUrl1(e.target.value)}
                        placeholder='Preview Image URL'

                    />
                    {validationErrors.url1 ? <p className="errors">{validationErrors.url1}</p> : null}

                    <input
                        type="text"
                        value={url2}
                        onChange={(e) => setUrl2(e.target.value)}
                        placeholder='Image URL'
                    />
                    {validationErrors.url2 ? <p className="errors">{validationErrors.url2}</p> : null}

                    <input
                        type="text"
                        value={url3}
                        onChange={(e) => setUrl3(e.target.value)}
                        placeholder='Image URL'
                    />
                    <input
                        type="text"
                        value={url4}
                        onChange={(e) => setUrl4(e.target.value)}
                        placeholder='Image URL'
                    />
                    <input
                        type="text"
                        value={url5}
                        onChange={(e) => setUrl5(e.target.value)}
                        placeholder='Image URL'
                    />
                </div>
                <hr />
                <div className='spot-button'>

                {formType === "Create Spot" ? <button disabled={!(address || city || state || country || name || description || price || url1)} type="submit">Create Spot</button> : <button type="submit">Update your Spot</button>}
                </div>
            </form>
        </div>

    )

}

export default SpotForm;
