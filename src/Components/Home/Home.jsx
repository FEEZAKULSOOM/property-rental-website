import React from 'react'
import "./Home.css";
import house from "../../assets/house.png";
import house1 from "../../assets/house1.png";
import house2 from "../../assets/house2.png";
import tent from "../../assets/tent.png";
import tent1 from "../../assets/tent1.png";
import tent2 from "../../assets/tent2.png";
import farmHouse from "../../assets/farmHouse.png";
import farmHouse1 from "../../assets/farmHouse1.png";
import farmHouse2 from "../../assets/farmHouse2.png";
import cabin from "../../assets/cabin.png";
import cabin1 from "../../assets/cabin1.png";
import cabin2 from "../../assets/cabin2.png";
import flat from "../../assets/flat.png";
import flat1 from "../../assets/flat1.png";
import flat2 from "../../assets/flat2.png";
import villa from "../../assets/villa.png";
import villa1 from "../../assets/villa1.png";
import villa2 from "../../assets/villa2.png";
import mountain from "../../assets/mountain.png";
import mountain1 from "../../assets/mountain1.png";
import mountain2 from "../../assets/mountain2.png";
import hutHouse from "../../assets/hutHouse.png";
import hutHouse1 from "../../assets/hutHouse1.png";
import hutHouse2 from "../../assets/hutHouse2.png";
import hut from "../../assets/hut.png";
import hut1 from "../../assets/hut1.png";
import hut2 from "../../assets/hut2.png";
import ski from "../../assets/ski.png";
import ski1 from "../../assets/ski1.png";
import ski2 from "../../assets/ski2.png";
import village from "../../assets/village.png";
import village1 from "../../assets/village1.png";
import village2 from "../../assets/village2.png";
import room from "../../assets/room.png";
import room1 from "../../assets/room1.png";
import room2 from "../../assets/room2.png";
import old from "../../assets/old.png";
import old1 from "../../assets/old1.png";
import old2 from "../../assets/old2.png";
import pool from "../../assets/pool.png";
import pool1 from "../../assets/pool1.png";
import pool2 from "../../assets/pool2.png";
import roomNew from "../../assets/roomNew.png";
import roomNew1 from "../../assets/roomNew1.png";
import roomNew2 from "../../assets/roomNew2.png";
import { dataContext } from '../UserContext/UserContext';
import { useContext } from 'react';
import Card from "../Card/Card";

// Main home page with all property listings
function Home() {
    let { listing, addImage1, addImage2, addImage3,
        setListing, price, setPrice, setImage1, setImage2
        , setImage3, title, setTitle, description, setDescription, location, setLocation } = useContext(dataContext);

    return (
        <div id="home">
            {/* Static property cards */}
            <Card image1={house} image2={house1} image3={house2}
                title="3BHK Villa in Lahore"
                price="30,000/Month" />
            <Card image1={hutHouse} image2={hutHouse1} image3={hutHouse2}
                title="Wooden Hut House in Swat"
                price="35,000/Month" />
            <Card image1={flat} image2={flat1} image3={flat2}
                title="2BHK Flat in Islamabad"
                price="45,000/Month" />
            <Card image1={villa} image2={villa1} image3={villa2}
                title="5BHK Luxury Villa in DHA Lahore"
                price="150,000/Month" />
            <Card image1={mountain} image2={mountain1} image3={mountain2}
                title="Mountain View House in Murree"
                price="55,000/Month" />
            <Card image1={old} image2={old1} image3={old2}
                title="Classic Old House in Peshawar"
                price="28,000/Month" />
            <Card image1={hut} image2={hut1} image3={hut2}
                title="2BHK Cottage in Hunza"
                price="40,000/Month" />
            <Card image1={farmHouse} image2={farmHouse1} image3={farmHouse2}
                title="1BHK Farm House in Karachi"
                price="70,000/Month" />
            <Card image1={village} image2={village1} image3={village2}
                title="Village Style Home in Multan"
                price="25,000/Month" />
            <Card image1={room} image2={room1} image3={room2}
                title="Studio Room in Faisalabad"
                price="18,000/Month" />
            <Card image1={cabin} image2={cabin1} image3={cabin2}
                title="2BHK Cabin in Faizabad"
                price="50,000/Month" />
            <Card image1={pool} image2={pool1} image3={pool2}
                title="Luxury Pool House in Bahria Town"
                price="78,000/Month" />
            <Card image1={ski} image2={ski1} image3={ski2}
                title="Ski Resort Apartment in Naran"
                price="65,000/Month" />
            <Card image1={roomNew} image2={roomNew1} image3={roomNew2}
                title="Modern 1BHK Room in Rawalpindi"
                price="32,000/Month" />
            <Card image1={tent} image2={tent1} image3={tent2}
                title="Tent House in Chakwal"
                price="28,000/Month" />

            {/* Newly added property card */}
            {listing ? (
                <Card
                    image1={addImage1 ? URL.createObjectURL(addImage1) : "https://via.placeholder.com/300x200?text=No+Image"}
                    image2={addImage2 ? URL.createObjectURL(addImage2) : "https://via.placeholder.com/300x200?text=No+Image"}
                    image3={addImage3 ? URL.createObjectURL(addImage3) : "https://via.placeholder.com/300x200?text=No+Image"}
                    title={title || "New Listing"}
                    price={price ? price + "/Month" : "Price not specified"}
                />
            ) : null}
        </div>
    )
}

export default Home;