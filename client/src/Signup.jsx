import React from "react";
import { Link } from "react-router-dom";

function Signup() {
    return(
        <div className="d-flex justify-content-center align-items-center bg-secondary vh-100">
        <div className="bg-white p-3 rounded w-25">
            <h2>Register</h2>
        <form>
        <div className="mb-3">
            <label htmlFor="email">
                <strong>Name</strong>
            </label>
                <input
                    type="text"
                    placeholder="Enter Name"
                    autoComplete="off"
                    name="email"
                    className="form-control rounded-0"
                />
        </div>
        <div className="mb-3">
            <label htmlFor="email">
                <strong> Email </strong>
            </label>
            <input 
                type="text"
                placeholder="Enter Email"
                autoComplete="off"
                name="email"
                className="form-control rounded-0"
            />
        </div>
        <div className="mb-3">
            <label htmlFor="password">
                <strong>password</strong>
            </label>
            <input
                type="text"
                placeholder="Enter Password"
                autoComplete="off"
                name="password"
                className="form-control rounded-0"
                />
            </div>
            <button type="submit" className="btn btn-success w-100 rounded-0">
            Register    
            </button> 
            </form>
            <Link to='/login'>already have an account?</Link>
        </div>
    </div>
    );
}
    
export default Signup