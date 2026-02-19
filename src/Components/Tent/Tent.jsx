import React from 'react'
import "./Tent.css";
import Card from '../Card/Card';

import tent from "../../assets/tent.png";
import tent1 from "../../assets/tent1.png";
import tent2 from "../../assets/tent2.png";

function Tent() {
    return (
        <div id="tent">
            <Card image1={tent} image2={tent1} image3={tent2}
                title="Tent House  in Chakwal"
                price="28,000/Month" />
        </div>
    )
}

export default Tent





