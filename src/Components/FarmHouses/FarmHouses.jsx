import React from 'react'
import "./FarmHouses.css";
import Card from '../Card/Card';
import farmHouse from "../../assets/farmHouse.png";
import farmHouse1 from "../../assets/farmHouse1.png";
import farmHouse2 from "../../assets/farmHouse2.png";
function FarmHouses() {
    return (
        <div id="farmhouse">

            <Card image1={farmHouse} image2={farmHouse1} image3={farmHouse2}
                title="1BHK Farm House in Karachi"
                price="70,000/Month" />
        </div>
    )
}

export default FarmHouses
