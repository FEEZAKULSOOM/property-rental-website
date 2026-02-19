import React from 'react'
import "./Houses.css"
import house from "../../assets/house.png";
import house1 from "../../assets/house1.png";
import house2 from "../../assets/house2.png";
import flat from "../../assets/flat.png";
import flat1 from "../../assets/flat1.png";
import flat2 from "../../assets/flat2.png";
import villa from "../../assets/villa.png";
import villa1 from "../../assets/villa1.png";
import villa2 from "../../assets/villa2.png";
import village from "../../assets/village.png";
import village1 from "../../assets/village1.png";
import village2 from "../../assets/village2.png";
import roomNew from "../../assets/roomNew.png";
import roomNew1 from "../../assets/roomNew1.png";
import roomNew2 from "../../assets/roomNew2.png";
import Card from '../Card/Card';

// Houses category page
function Houses() {
    return (
        <div id="houses">
            <Card image1={flat} image2={flat1} image3={flat2}
                title="2BHK Flat in Islamabad"
                price="45,000/Month" />
            <Card image1={house} image2={house1} image3={house2}
                title="3BHK Villa in Lahore"
                price="30,000/Month" />
            <Card image1={village} image2={village1} image3={village2}
                title="Village Style Home in Multan"
                price="25,000/Month" />
            <Card image1={roomNew} image2={roomNew1} image3={roomNew2}
                title="Modern 1BHK Room in Rawalpindi"
                price="32,000/Month" />
            <Card image1={villa} image2={villa1} image3={villa2}
                title="5BHK Luxury Villa in DHA Lahore"
                price="150,000/Month" />
        </div>
    )
}

export default Houses;