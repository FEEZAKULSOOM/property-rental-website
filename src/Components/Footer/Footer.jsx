import React from 'react';
import "./Footer.css";
import { MdPhone, MdEmail, MdLocationOn, MdHome, MdAdd, MdAttachMoney, MdCopyright } from "react-icons/md";
import { FaHeart } from "react-icons/fa";
import { Link } from 'react-router';

// Footer component for all pages
function Footer() {
    return (
        <div id="footer">
            {/* Main footer content */}
            <div className="footerContent">
                {/* Contact information section */}
                <div className="footerSection">
                    <h3>Private Property Rental</h3>
                    <h4>Contact Us</h4>
                    <p><MdPhone /> +920000000000</p>
                    <p><MdEmail /> abc12345@gmail.com</p>
                    <p><MdLocationOn /> Address, Muzaffarabad/Pakistan</p>
                </div>

                {/* Services section */}
                <div className="footerSection">
                    <h4>Our Services</h4>
                    <p><MdHome /> Home</p>
                    <p><MdAdd /> Add Listing</p>
                    <p><MdAttachMoney /> Rent</p>
                </div>

                {/* Quick links section */}
                <div className="footerSection">
                    <h4>Quick Link</h4>
                    <ul>
                        <li>Knowledge Base</li>
                        <li>FAQ</li>
                        <Link to={"/Contact"} > <li>Contact</li></Link>
                    </ul>
                </div>
            </div>

            {/* Bottom bar with copyright */}
            <div className="footerBottom">
                <div className="bottomContent">
                    <p className="privacy">Privacy Policy | Use of terms</p>
                    <p className="copyright">
                        <MdCopyright /> {new Date().getFullYear()} Private Property Rental. All rights reserved.
                    </p>
                    <p className="designedBy">
                        Designed with <FaHeart className="goldenHeart" /> in Pakistan
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Footer;