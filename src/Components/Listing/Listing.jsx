import React from "react";
import "./Listing.css";
import { MdLibraryAdd } from "react-icons/md";
import { useContext } from "react";
import { dataContext } from "../UserContext/UserContext";
import { useNavigate } from "react-router";

// Property listing form component
function Listing() {
    const navigate = useNavigate();
    let {
        setListing, price, setPrice, setImage1, setImage2,
        setImage3, title, setTitle, description, setDescription,
        location, setLocation
    } = useContext(dataContext);

    // Handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();

        // Validate required fields
        if (!title || !price || !description || !location) {
            alert("Please fill all required fields");
            return;
        }

        alert("👍 Property Added Successfully!\n\nThank you from Fiza Farid, for choosing Private Property Rental. \nYour listing is now live for potential tenants.\n\nRedirecting to Home.....");
        setListing(true);
        navigate('/');
    };

    return (
        <div id="listing">
            <form onSubmit={handleSubmit}>
                <h1 id="listingTitle">List Your Home</h1>

                {/* Title input */}
                <div className="list">
                    <label htmlFor="title">Title *</label>
                    <input
                        type="text"
                        id="title"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        required
                        placeholder="e.g., 3BHK Luxury Villa"
                    />
                </div>

                {/* Description input */}
                <div className="list">
                    <label htmlFor="description">Description *</label>
                    <textarea
                        id="description"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        required
                        placeholder="Describe your property..."
                        rows="4"
                    ></textarea>
                </div>

                {/* Image uploads */}
                <div className="list">
                    <label>Image 1 *</label>
                    <input
                        type="file"
                        required
                        accept="image/*"
                        onChange={(e) => setImage1(e.target.files[0])}
                    />
                </div>

                <div className="list">
                    <label>Image 2 *</label>
                    <input
                        type="file"
                        required
                        accept="image/*"
                        onChange={(e) => setImage2(e.target.files[0])}
                    />
                </div>

                <div className="list">
                    <label>Image 3 *</label>
                    <input
                        type="file"
                        accept="image/*"
                        required
                        onChange={(e) => setImage3(e.target.files[0])}
                    />
                </div>

                {/* Price input */}
                <div className="list">
                    <label htmlFor="price">Price (PKR) *</label>
                    <input
                        type="number"
                        id="price"
                        required
                        value={price}
                        onChange={(e) => setPrice(e.target.value)}
                        placeholder="e.g., 30000"
                        min="0"
                    />
                </div>

                {/* Location input */}
                <div className="list">
                    <label htmlFor="location">Location *</label>
                    <input
                        type="text"
                        id="location"
                        value={location}
                        onChange={(e) => setLocation(e.target.value)}
                        required
                        placeholder="e.g., Lahore, Pakistan"
                    />
                </div>

                {/* Submit button */}
                <button type="submit" id="listingBtn">
                    Add Property <MdLibraryAdd />
                </button>
            </form>
        </div>
    );
}

export default Listing;