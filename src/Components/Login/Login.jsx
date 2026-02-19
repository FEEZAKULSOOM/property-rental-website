import React from 'react';
import "./Login.css";
import { MdLogin } from "react-icons/md";

// Login page component
function Login() {
    return (
        <div id="login" onSubmit={(e) => alert("Login Successfully...👍")}>
            <form action="">
                <span id="loginTitle">Login Page</span>

                {/* Email field */}
                <div className="list">
                    <label htmlFor="email">Email</label>
                    <input type="text" id="email" required />
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