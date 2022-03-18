import React from 'react';
import { Link } from 'react-router-dom';
import "./SignUp.css";

function SignUpPage() {
  return (
    <>
    <div className="signup-body-container">
        <div className="signup-container">
            <div className="title-header">Signup</div>
            <div className="signup-credential-container">
                <label>Email Address</label>
                <input placeholder="xyz@gmail.com" />
            </div>
            <div className="signup-credential-container">
                <label>Password</label>
                <input type="password" placeholder="*************" name="" id="" />
            </div>
            <div className="signup-remember-container">
                <div>
                    <input type="checkbox" name="" id="" />
                    I accept all Terms & Conditions
                </div>
            </div>
            <div className="signup-btn-container"><a className="btn signup-action-btn">Signup</a></div>
            <Link className="signup-footer" to="/login">Already have an Account <span className="material-icons-round">
                navigate_next
                </span>
            </Link>
        </div>
    </div>
    </>
  )
}

export default SignUpPage