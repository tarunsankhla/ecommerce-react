import axios from 'axios';
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import "./LoginPage.css";
import { useAuth } from '../../context/AuthContext';

function LoginPage() {
    const {login ,setlogin } = useAuth();
    const [email,setEmail] = useState();
    const [password,setPassword] = useState();
    const navigate = useNavigate();

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
            setlogin(true);
            // navigate("/");
            // History.push("/products");   
        }
    }
    return (
        <>
        <div className="login-body-container">
            <button onClick={()=>{navigate("/")}}>clickc it</button>
            <div className="login-container">   
                <div className="title-header">
                    <iframe src="https://embed.lottiefiles.com/animation/83168" loading='lazy' className='animation-login-1' ></iframe></div>
                <div className="login-credential-container">
                    {/* <label>Email Address</label> */}
                    <input placeholder="Email Address - xyz@gmail.com" onChange={(e)=>setEmail(e.target.value)} />
                </div>
                <div className="login-credential-container">
                    {/* <label>Password</label> */}
                    <input type="password" onChange={(e)=>setPassword(e.target.value)} name="" placeholder="Password" id="" />
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