import axios from 'axios';
import React, {useState} from 'react';
import {Link, useNavigate} from 'react-router-dom';
import "./LoginPage.css";
import {useAuth} from '../../context/AuthContext';
import loginLogoSrc from "./../../assets/images/SVG/login.svg";
import { VAR_ENCODE_TOKEN, VAR_USER_ID } from '../../utils/Routes';

function LoginPage() {
    const { setlogin, userDispatch} = useAuth();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const onSubmitHandler = async () => {
        var object = {
            "email": email,
            "password": password
        };
        console.log(object)
        var res = await axios.post("/api/auth/login", object);
        console.log(res);
        if (res.status === 200) {
            var token = res.data.encodedToken;
            localStorage.setItem(VAR_ENCODE_TOKEN, token)
            var user = res.data.foundUser;
            var userId = res.data.foundUser._id;
            localStorage.setItem(VAR_USER_ID, userId);
            userDispatch({email : res.data.foundUser.email, firstName :res.data.foundUser.firstName , lastName :res.data.foundUser.lastName})
            console.log(user, userId, token);
            setlogin(true);
            // navigate("/");
            // History.push("/products");
        }
    }

    function guestUserHandler(){ 
        setEmail("adarshbalak@gmail.com");
        setPassword("adarshBalaki123");
    }
    return (
        <>
            <div className="login-body-container">
                {/* <button onClick={()=>{navigate("/")}}>clickc it</button>  */}
                <img src={loginLogoSrc}
                    className="login-logo" alt='login-logo'/> {/* <iframe src="https://embed.lottiefiles.com/animation/83168" loading='lazy' className='animation-login-1' ></iframe> */}
                {/* </div> */}
                <div className="login-container">
                    <div className="title-header">

                        <div className="login-credential-container">
                            {/* <label>Email Address</label> */}
                            <input placeholder="Email Address - xyz@gmail.com"
                                value={email}
                                onChange={
                                    (e) => setEmail(e.target.value)
                                }/>
                        </div>
                        <div className="login-credential-container">
                            {/* <label>Password</label> */}
                            <input type="password"
                                value={password}
                                onChange={
                                    (e) => setPassword(e.target.value)
                                }
                                name=""
                                placeholder="Password"
                                id=""/>
                        </div>
                        <div className="login-rem-forgetpass-container">
                            <div>
                                <input type="checkbox" name="" id=""/>
                                Remember me
                            </div>
                            <a className="btn-link">Forgot your password?</a>
                        </div>
                        <div className="login-btn-container">
                            <div className="btn login-action-btn"
                                onClick={onSubmitHandler}>Login</div>
                        </div>
                        <div className="login-btn-container">
                            <div className="btn login-action-btn"
                                onClick={() =>{guestUserHandler()}}>Guest User</div>
                        </div>
                        <Link className="login-footer" to="/signup">
                            Create New Account
                            <span className="material-icons-round">
                                navigate_next
                            </span>
                        </Link>
                    </div>
                </div>
            </div>
        </>
    )
}

export default LoginPage
