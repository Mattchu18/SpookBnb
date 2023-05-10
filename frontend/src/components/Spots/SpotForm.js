import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { createSpot, editSpot, createImage } from '../../store/spots';

const SpotForm = ({ spot, formType }) => {
    const dispatch = useDispatch();
    const history = useHistory();
    const [address, setAddress] = useState(spot?.address);
    const [city, setCity] = useState(spot?.city)
    const [state, setState] = useState(spot?.state)
    const [lat, setLat] = useState(spot?.lat ?? 1)
    const [lng, setLng] = useState(spot?.lng ?? 1)
    const [country, setCountry] = useState(spot?.country)
    const [name, setName] = useState(spot?.name)
    const [description, setDescription] = useState(spot?.description)
    const [price, setPrice] = useState(spot?.price)
    // rename previewImage to preview (boolean)

    const [url1, setUrl1] = useState(spot?.SpotImages[0]?.url1);
    const [url2, setUrl2] = useState(spot?.SpotImages[1]?.url2);
    const [url3, setUrl3] = useState(spot?.SpotImages[2]?.url3);
    const [url4, setUrl4] = useState(spot?.SpotImages[3]?.url4);
    const [url5, setUrl5] = useState(spot?.SpotImages[4]?.url5);
    const [preview, setPreview] = useState(spot?.SpotImages.findIndex(({ preview }) => preview) ?? 0);
    const [vaidationErrors, setValidationErrors] = useState("")
    // const [preview, setPreview] = useState(true)


    const handleSubmit = async (e) => {
        e.preventDefault();
        //add preview
        //add url
        //make 1st image input placeholder for preview image
        //make new state for [preview, setPreview] = useState(true)

        //make new inputs for url
        spot = {
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
            const data = await dispatch(createSpot(spot))
            // dispatch(createSpot(spot))
            // if(data.validationErrors) {
            //     return setValidationErrors()
            // }

            // console.log("after dispatch create a spot====>", data)

            await history.push(`/spots/${data.id}`) //need push to createimage
        }
        if (formType === "Edit Spot") {
            dispatch(editSpot(spot))
            history.push("/")
        }
    }

    // const setPreviewImageAndUrl = (e) => {
    //     setUrl1(e.target.value)
    //     setPreview(true)
    // }

    return (
        <form onSubmit={handleSubmit}>
            <h2>Spot Form Name</h2>
            <div>
                <h3>Where's your place located?</h3>
                Guests will only get your exact address once they booked a reservation.
            </div>
            <div>
                <label>
                    Country
                    <input
                        type="text"
                        value={country}
                        onChange={(e) => setCountry(e.target.value)}
                        placeholder='Country'
                    />
                </label>

            </div>
            <label>
                Street Address
                <input
                    type="text"
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                    placeholder='Address'
                />
            </label>
            <div>
                <label>
                    City
                    <input
                        type="text"
                        value={city}
                        onChange={(e) => setCity(e.target.value)}
                        placeholder='City'
                    />
                </label>
                <span>, </span>
                <label>
                    State
                    <input
                        type="text"
                        value={state}
                        onChange={(e) => setState(e.target.value)}
                        placeholder='State'
                    />
                </label>
                {/* <div>
                    <label>
                        Latitude
                        <input
                        type="text"
                        value={lat}
                        onChange={(e) => setLat(e.target.value)}
                        placeholder='Latitude'
                        />
                    </label>
                    <label>
                        Longitude
                        <input
                        type="text"
                        value={lng}
                        onChange={(e) => setLng(e.target.value)}
                        placeholder='Longitude'
                        />
                    </label>
                </div> */}
            </div>
            <div>
                <h3>Describe you place to guests</h3>
                <label>
                    Mention the best features of your space, any special amenities like fast wifi or parking, and what you love about the neighborhood.
                    <input
                        type="text"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        placeholder='Please write at least 30 characters'
                    />
                </label>
            </div>
            <div>
                <h3>Create a title for your spot</h3>
                <label>
                    Catch guests' attention with a spot title that highlights what makes your place special.
                    <input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder='Name of your spot'
                    />
                </label>
            </div>
            <div>
                <h3>Set a base price for your spot</h3>
                <label>
                    Competitive pricing can help your listing stnad out and rank higher in search results.
                    <input
                        type="text"
                        value={price}
                        onChange={(e) => setPrice(e.target.value)}
                        placeholder='Price per night (USD)'
                    />
                </label>
            </div>
            <div>
                <h3>Liven up your spot with photos</h3>
                <label>
                    Submit a link to at least one photo to publish your spot.
                    {/* this first onChange will always setPreview(true) AND url */}
                    <input
                        type="text"
                        value={url1} //might need refactoring... boolean?
                        onChange={(e) => setUrl1(e.target.value)}
                        placeholder='Preview Image URL'
                    />
                    <input
                        type="text"
                        value={url2}
                        onChange={(e) => setUrl2(e.target.value)}
                        placeholder='Image URL'
                    />
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
                </label>
                <button type="submit">Create Spot</button>
            </div>
        </form>


    )

}

export default SpotForm;
