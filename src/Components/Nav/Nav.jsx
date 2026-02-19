import React, { useState, useContext } from 'react'
import "./Nav.css";
import logo1 from "../../assets/logo1.png";
import { ImSearch } from "react-icons/im";
import { GiHamburgerMenu } from "react-icons/gi";
import { FaUserAlt } from "react-icons/fa";
import { FaShop } from "react-icons/fa6";
import { BsHouseCheckFill } from "react-icons/bs";
import { GiVikingLonghouse } from "react-icons/gi";
import { PiSwimmingPoolBold } from "react-icons/pi";
import { FaTreeCity } from "react-icons/fa6";
import { PiFarmFill } from "react-icons/pi";
import { MdOutlineCabin } from "react-icons/md";
import { GiCampingTent } from "react-icons/gi";
import { FaFire } from "react-icons/fa";
import { Link, NavLink } from 'react-router';
import { dataContext } from '../UserContext/UserContext';

// Main navigation component
function Nav() {
    let [visible, setVisible] = useState(false);
    let { setSearchTerm } = useContext(dataContext);
    let [localSearch, setLocalSearch] = useState("");

    // Search handler with title highlighting
    const handleSearch = () => {
        if (localSearch.trim() === '') {
            alert('Please enter a search term');
            return;
        }

        const cards = document.querySelectorAll('.card');
        let found = false;

        // Remove existing highlights
        cards.forEach(card => {
            const titleSpan = card.querySelector('.cardSpan1');
            if (titleSpan) {
                titleSpan.style.color = '';
                titleSpan.style.fontWeight = '';
            }
        });

        // Search and highlight matching cards
        cards.forEach(card => {
            const titleSpan = card.querySelector('.cardSpan1');
            if (titleSpan) {
                const title = titleSpan.innerText;
                if (title.toLowerCase().includes(localSearch.toLowerCase())) {
                    found = true;
                    titleSpan.style.color = '#C89B3C';
                    titleSpan.style.fontWeight = 'bold';
                    card.scrollIntoView({ behavior: 'smooth', block: 'center' });

                    // Remove highlight after 3 seconds
                    setTimeout(() => {
                        titleSpan.style.color = '';
                        titleSpan.style.fontWeight = '';
                    }, 3000);
                }
            }
        });

        if (!found) {
            alert(`🔵 Oops! No results found for "${localSearch}"\n\n🟡 Try: Villa, House, Flat, Farm, Cabin, or Pool`);
        }

        setLocalSearch('');
        setSearchTerm('');
    };

    return (
        <div id="nav">
            {/* Hamburger menu */}
            {visible ? <div className="hamburger">
                <Link to={"/Login"}> <div className="ham1">Login</div></Link>
                <Link to={"/Signup"}><div className="ham1">sign up</div></Link>
                <Link to={'Listing'} ><div className="ham1">list your home</div></Link>
                <Link to={"Contact"}> <div className="ham1">help center</div></Link>
            </div> : null}

            {/* Top navigation bar */}
            <div className="nav1">
                <Link to={""}>
                    <div className="logo">
                        <img src={logo1} alt="" width='40px' />
                        <h1>Private Property Rental</h1>
                    </div>
                </Link>

                {/* Search bar */}
                <div className="search">
                    <input
                        type="text"
                        placeholder='Search Destination'
                        value={localSearch}
                        onChange={(e) => setLocalSearch(e.target.value)}
                        onKeyPress={(e) => {
                            if (e.key === 'Enter') {
                                handleSearch();
                            }
                        }}
                    />
                    <button onClick={handleSearch}>
                        <span>Search</span><ImSearch />
                    </button>
                </div>

                {/* User actions */}
                <div className="ham">
                    <Link to={'Listing'} ><button id="btn1">List Your Home</button> </Link>
                    <button id="btn2" onClick={() => setVisible(!visible)}>
                        <GiHamburgerMenu id="svg1" />
                        <FaUserAlt id="svg2" />
                    </button>
                </div>
            </div>

            {/* Category navigation */}
            <div className="nav2">
                <NavLink to={""}><div className="svg11"><FaFire /><h3>Trending</h3></div></NavLink>
                <NavLink to={"/houses"}><div className="svg11"><BsHouseCheckFill /><h3>Houses</h3></div></NavLink>
                <NavLink to={"/rooms"}><div className="svg11"><GiVikingLonghouse /><h3>Rooms</h3></div></NavLink>
                <NavLink to={"/farmhouses"}><div className="svg11"><PiFarmFill /><h3>Farm Houses</h3></div></NavLink>
                <NavLink to={"/poolhouses"}><div className="svg11"><PiSwimmingPoolBold /><h3>Pool Houses</h3></div></NavLink>
                <NavLink to={"/tenthouses"}><div className="svg11"><GiCampingTent /><h3>Tent Houses</h3></div></NavLink>
                <NavLink to={"/cabins"}><div className="svg11"><MdOutlineCabin /><h3>Cabins</h3></div></NavLink>
            </div>
        </div>
    )
}

export default Nav;