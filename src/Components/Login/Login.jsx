import React from 'react';
import "./Login.css";
import { MdLogin } from "react-icons/md";

// Login page component
function Login() {
    // Handle form submission
    const handleSubmit = (e) => {
        e.preventDefault(); // Stop page reload
        alert("Login Successfully...👍");
    };

    return (
        <div id="login">
            <form onSubmit={handleSubmit}> {/* onSubmit on form, not div */}
                <span id="loginTitle">Login Page</span>

                {/* Email field */}
                <div className="list">
                    <label htmlFor="email">Email</label>
                    <input type="email" id="email" required />
                </div>

                {/* Password field */}
                <div className="list">
                    <label htmlFor="password">Password</label>
                    <input type="password" id="password" required />
                </div>

                {/* Submit button */}
                <button type="submit" id="loginBtn">
                    Login <MdLogin />
                </button>
            </form>
        </div>
    )
}

export default Login;