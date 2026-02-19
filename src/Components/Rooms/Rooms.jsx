import React from 'react'
import "./Rooms.css";
import Card from '../Card/Card';

import room from "../../assets/room.png";
import room1 from "../../assets/room1.png";
import room2 from "../../assets/room2.png";
function Rooms() {
    return (
        <div id="rooms">
            <Card image1={room} image2={room1} image3={room2}
                title="Studio Room in Faisalabad"
                price="18,000/Month" />
        </div>
    )
}

export default Rooms
