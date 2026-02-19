import React, { useState, createContext } from 'react'
export let dataContext = createContext();

// Global state management for property listings
function UserContext({ children }) {
    // Listing form states
    let [title, setTitle] = useState("");
    let [listing, setListing] = useState(false);
    let [addImage1, setImage1] = useState(null);
    let [addImage2, setImage2] = useState(null);
    let [addImage3, setImage3] = useState(null);
    let [location, setLocation] = useState("");
    let [description, setDescription] = useState("");
    let [price, setPrice] = useState("");
    // Search functionality
    let [searchTerm, setSearchTerm] = useState("");

    // Context value object
    let value = {
        listing, addImage1, addImage2, addImage3,
        setListing, price, setPrice, setImage1, setImage2
        , setImage3, title, setTitle, description, setDescription, location, setLocation,
        searchTerm, setSearchTerm
    }

    return (
        <div>
            <dataContext.Provider value={value}>
                {children}
            </dataContext.Provider>
        </div>
    )
}

export default UserContext