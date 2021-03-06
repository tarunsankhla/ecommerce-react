import axios from 'axios';
import React, {useState} from 'react';
import {Link, useNavigate} from 'react-router-dom';
import "./LoginPage.css";
import {useAuth} from '../../context/AuthContext';
import loginLogoSrc from "./../../assets/images/SVG/login.svg";
import { VAR_ENCODE_TOKEN, VAR_USER_ID } from '../../utils/Routes';
import { Alert } from '../../components/UI/Alert/Alert';

function LoginPage() {
    const { setlogin, userDispatch} = useAuth();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const onSubmitHandler = async () => {
        try {
            var object = {
                "email": email,
                "password": password
            };
            var res = await axios.post("/api/auth/login", object);
            if (res.status === 200) {
                var token = res.data.encodedToken;
                localStorage.setItem(VAR_ENCODE_TOKEN, token)
                var user = res.data.foundUser;
                var userId = res.data.foundUser._id;
                localStorage.setItem(VAR_USER_ID, userId);
                userDispatch({ email: res.data.foundUser.email, firstName: res.data.foundUser.firstName, lastName: res.data.foundUser.lastName });
                setlogin(true);
                Alert("success", "SuccessFully Logged In!!");
                navigate(-1);
            } else {
                Alert("error", "Something went wrong!! try again.");
            }
        } catch (error) { 
            Alert("error", "Something went wrong!! try again.");
        }
    }

    function guestUserHandler(){ 
        setEmail("adarshbalak@gmail.com");
        setPassword("adarshBalaki123");
    }
    return (
        <>
            <div className="login-body-container">
                <img src={loginLogoSrc}
                    className="login-logo" alt='login-logo'/>
                <div className="login-container">
                    <div className="title-header">
                        <div className="login-credential-container">
                            <input placeholder="Email Address - xyz@gmail.com"
                                value={email}
                                onChange={
                                    (e) => setEmail(e.target.value)
                                }/>
                        </div>
                        <div className="login-credential-container">
                            <input type="password" value={password} onChange={
                                    (e) => setPassword(e.target.value)}
                                name=""  placeholder="Password" id=""/>
                        </div>
                        <div className="login-rem-forgetpass-container">
                            <div>
                                <input type="checkbox" name="" id=""/>
                                Remember me
                            </div>
                            <div className="btn-link">Forgot your password?</div>
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
