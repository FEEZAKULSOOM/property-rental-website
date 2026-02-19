import React from 'react';
import "./Card.css";

// Reusable property card component
function Card({ image1, image2, image3, title, price }) {
    return (
        <div className='card'>
            {/* Image gallery section */}
            <div className="images">
                <img src={image1} alt="" />
                <img src={image2} alt="" />
                <img src={image3} alt="" />
            </div>
            {/* Property details */}
            <span className='cardSpan1'>{title}</span>
            <span className='cardSpan2'>{"PKR " + price}</span>
        </div>
    )
}

export default Card