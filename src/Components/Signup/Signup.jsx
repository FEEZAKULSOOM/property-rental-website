import React from 'react';
import "./Signup.css";
import { FaUserPlus } from "react-icons/fa";

// Signup page component
function Signup() {
    // Handle form submission
    const handleSubmit = (e) => {
        e.preventDefault(); // THIS IS CRITICAL - stops page reload
        alert("Signup Successfully...👍");
    };

    return (
        <div id="signup">

            <form onSubmit={handleSubmit}> {/* Removed action attribute */}
                <h1 id="signupTitle">Sign Up</h1>

                {/* Full name field */}
                <div className="list">
                    <label htmlFor="fullName">Full Name</label>
                    <input
                        type="text"
                        id="fullName"
                        name="fullName"
                        required
                    />
                </div>

                {/* Email field */}
                <div className="list">
                    <label htmlFor="email">Email</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        required
                    />
                </div>

                {/* Password field */}
                <div className="list">
                    <label htmlFor="password">Password</label>
                    <input
                        type="password"
                        id="password"
                        name="password"
                        required
                    />
                </div>

                {/* Confirm password field */}
                <div className="list">
                    <label htmlFor="confirmPassword">Confirm Password</label>
                    <input
                        type="password"
                        id="confirmPassword"
                        name="confirmPassword"
                        required
                    />
                </div>

                {/* Submit button */}
                <button type="submit" id="signupBtn">
                    Sign Up <FaUserPlus />
                </button>
            </form>
        </div>
    );
}

export default Signup;