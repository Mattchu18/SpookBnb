import { useState } from 'react';


const SpotForm = ({ form, formType }) => {
    const [address, setAddress] = useState("");
    const [city, setCity] = useState("")
    const [state, setState] = useState("")
    const [country, setCountry] = useState("")
    const [name, setName] = useState("")
    const [description, setDescription] = useState("")
    const [price, setPrice] = useState("")
    const [previewImage, setPreviewImage] = useState("") //might need to be boolean?...
    const [imageUrl, setImageURL] = useState("")

    return (
        <form>
            <h2>Spot Form Name</h2>
            <label>
                Country
                <input
                    type="text"
                    value={country}
                    onChange={(e) => setCountry(e.target.value)}
                    placeholder='Country'
                />
            </label>
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
                ,
                <label>
                    State
                    <input
                        type="text"
                        value={state}
                        onChange={(e) => setState(e.target.value)}
                        placeholder='State'
                    />
                </label>
            </div>
            <div>
                <h3>Describe you place to guests</h3>
                <label>
                    Mention the best features of your space, any special amenities like fast wifi or parking, and what you love about the neighborhood.
                    <input
                        type="text"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        placeholder='Pleace write at least 30 characters'
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
                    <input
                        type="text"
                        value={previewImage} //might need refactoring... boolean?
                        onChange={(e) => setPreviewImage(e.target.value)}
                        placeholder='Preview Image URL'
                    />
                    <input
                        type="text"
                        value={imageUrl}
                        onChange={(e) => setImageURL(e.target.value)}
                        placeholder='Image URL'
                    />
                    <input
                        type="text"
                        value={imageUrl}
                        onChange={(e) => setImageURL(e.target.value)}
                        placeholder='Image URL'
                    />
                    <input
                        type="text"
                        value={imageUrl}
                        onChange={(e) => setImageURL(e.target.value)}
                        placeholder='Image URL'
                    />
                    <input
                        type="text"
                        value={imageUrl}
                        onChange={(e) => setImageURL(e.target.value)}
                        placeholder='Image URL'
                    />
                </label>
                <button type="submit">Create Spot</button>
            </div>
        </form>


    )

}

export default SpotForm;
