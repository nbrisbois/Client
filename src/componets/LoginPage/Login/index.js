import {Link, useNavigate} from "react-router-dom";
import React, {useState, useRef} from "react";
import {useProfile} from "../../../user-tools/context/user-context";

const Login = () => {
    const navigate = useNavigate()
    const {login}  = useProfile()

    const usernameRef = useRef()
    const passwordRef = useRef()

    const userLog = async () => {
        try {
            await login(
                usernameRef.current.value,
                passwordRef.current.value
            )
            navigate("/profile")
        } catch (e) {
            alert("User does not exists")
        }
    }
    return (
        <div>
            <div className="form-group">
                <h1>Login</h1>
                <div className="form-group">
                    <label htmlFor="uname">Username</label>
                    <input id="uname" ref={usernameRef} placeholder="Username" className="form-control" type="text"/>
                </div>
                <div className="form-group">
                    <label htmlFor="pass">Password</label>
                    <input id="pass" ref={passwordRef} placeholder="Password" className="form-control" type="password"/>
                </div>
                <button onClick={userLog} className="btn btn-primary  mt-2">
                    Login
                </button>
            </div>
            <p>Don't have an account? <Link to="register">Register</Link></p>
        </div>
    )
}

export default Login