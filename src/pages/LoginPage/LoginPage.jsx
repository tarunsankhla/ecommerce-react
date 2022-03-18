import axios from 'axios';
import React, { useState } from 'react';
import { Link, useNavigate as navigate } from 'react-router-dom';
import "./LoginPage.css"

function LoginPage() {
    const [email,setEmail] = useState();
    const [password,setPassword] = useState();
    const onSubmittFunc = async () =>{
        var object = {"email":email,"password":password};
        console.log(object)
        var res = await axios.post("/api/auth/login",object);
        console.log(res);
        if(res.status === 200)
        {
            var token = res.data.encodedToken;
            localStorage.setItem("feetz",token)
            var user = res.data.foundUser;
            var userId =res.data.foundUser._id;
            localStorage.setItem("feetzId",userId);
            console.log(user,userId,token);
            navigate("/");
            // History.push("/products");   
        }
    }
    return (
        <>
        <div className="login-body-container">
            <div className="login-container">
                <div className="title-header">Login</div>
                <div className="login-credential-container">
                    <label>Email Address</label>
                    <input placeholder="xyz@gmail.com" onChange={(e)=>setEmail(e.target.value)} />
                </div>
                <div className="login-credential-container">
                    <label>Password</label>
                    <input type="password" onChange={(e)=>setPassword(e.target.value)} name="" placeholder="***********" id="" />
                </div>
                <div className="login-rem-forgetpass-container">
                    <div>
                        <input type="checkbox" name="" id="" />
                        Remember me
                    </div>
                    <a className="btn-link">Forgot your password?</a>
                </div>
                <div className="login-btn-container">
                    <a className="btn login-action-btn" onClick={onSubmittFunc}>Login</a>
                    </div>
                <Link className="login-footer" to="/signup">
                    Create New Account <span className="material-icons-round">
                    navigate_next
                    </span>
                </Link>
            </div>
        </div>
    </>
  )
}

export default LoginPage