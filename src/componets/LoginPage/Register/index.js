import {Link, useNavigate} from "react-router-dom";
import React, {useState, useRef} from "react";
import {useProfile} from "../../../user-tools/context/user-context";

const Register = () => {
    const nameRef = useRef()
    const usernameRef = useRef()
    const emailRef = useRef()
    const passwordRef = useRef()

    const {register} = useProfile()

    const navigate = useNavigate()
    const userReg = async () => {
        try {
            await register(
                nameRef.current.value,
                usernameRef.current.value,
                emailRef.current.value,
                passwordRef.current.value
            )
            navigate("/profile")
        } catch (e) {
            alert("Username or Email already exists")
        }
    }
    return (
        <div className="form-group">
            <h1>Register</h1>
            <div className="form-group">
                <label htmlFor="name">First Name</label>
                <input id="name" ref={nameRef} placeholder="Name" className="form-control" type="text"/>
            </div>
            <div className="form-group">
                <label htmlFor="uname">Username</label>
                <input id="uname" ref={usernameRef} placeholder="Username" className="form-control" type="text"/>
            </div>
            <div className="form-group">
                <label htmlFor="email">Email</label>
                <input id="email" ref={emailRef} placeholder="email" className="form-control" type="email"/>
            </div>
            <div className="form-group">
                <label htmlFor="pass">Password</label>
                <input id="pass" ref={passwordRef} placeholder="password" className="form-control" type="password"/>
            </div>
            <button onClick={userReg} className="btn btn-primary mt-2">
                Create Account
            </button>
            <p>Have an account? <Link to="/login">login</Link></p>
        </div>
    )
}

export default Register