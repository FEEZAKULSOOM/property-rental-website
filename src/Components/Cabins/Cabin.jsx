import React from 'react'
import "./Cabin.css";

import Card from '../Card/Card';
import cabin from "../../assets/cabin.png";
import cabin1 from "../../assets/cabin1.png";
import cabin2 from "../../assets/cabin2.png";
function Cabin() {
    return (
        <div id="cabin">
            <Card image1={cabin} image2={cabin1} image3={cabin2}
                title="2BHK Cabin in Faizabad"
                price="50,000/Month" />

        </div >
    )
}


export default Cabin
