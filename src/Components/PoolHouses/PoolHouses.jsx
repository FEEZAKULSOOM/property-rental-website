import React from 'react'
import "./PoolHouses.css"
import pool from "../../assets/pool.png";
import pool1 from "../../assets/pool1.png";
import pool2 from "../../assets/pool2.png";
import Card from '../Card/Card';
function PoolHouses() {
    return (
        <div id="pHouses">
            <Card image1={pool} image2={pool1} image3={pool2}
                title="Luxury Pool House in Bahria Town"
                price="78,000/Month" />

        </div>
    )
}

export default PoolHouses
