import React, { useReducer, useState } from 'react';
import { Link } from 'react-router-dom';
import "./SignUp.css";
import signUpAnimation from "./../../../src/assets/images/SVG/signup.svg"
import axios from 'axios';
import { useNavigate as navigate } from 'react-router';
import { useAuth } from '../../context/AuthContext';
import { VAR_ENCODE_TOKEN, VAR_USER_ID } from '../../utils/Routes';
import { Alert } from '../../components/UI/Alert/Alert';

const SignUpDetails = (state,action) =>{
    console.log(state,action);
    console.log(action.email,action.firstName,action.lastName)
    if(action.email){
        return {...state,email : action.email}
    }
    if(action.firstName){
        return {...state,firstName : action.firstName}
    }
    if(action.lastName){
        return {...state,lastName : action.lastName}
    }
    return {...state}
}


function SignUpPage() {
    const [passwordCheckError,setPasswordCheckError] = useState(false);
    const [confirmPassword,setConfirmPassword] = useState("");
    const [state,dispatch]= useReducer(SignUpDetails,{
        email : "",
        password : "",
        firstName :"",
        lastName:"",
    });
  const { login, setlogin, userDispatch } = useAuth();
  const [passwordType, setPasswordType] = useState("password");


    function HasAlphabets(letter) {
        for (let i = 0; i < letter.length; i++) {
          let char = letter[i];
          if ((char >= "A" && char <= "Z") || (char >= "a" && char <= "z")) {
            return true;
          }
        }
      }
      function HasNumber(letter) {
        for (let i = 0; i < letter.length; i++) {
          let char = letter[i];
          if (!isNaN(char)) {
            return true;
          }
        }
      }
      function HasSpecialCharacter(letter) {
        var format = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/;
    
        if (letter.match(format)) {
          console.log("spe");
          return true;
        } else {
          console.log("sd");
          return false;
        }
      }
      function PasswordCheck(value) {
        console.log(value);
        setConfirmPassword(value);
    
        setPasswordCheckError(HasAlphabets(value) & HasNumber(value) & HasSpecialCharacter(value));
      }

    const onSubmittFunc = async () =>{
        try{
            var object = {
                "email":state.email,
                "password":confirmPassword,
                "firstName":state.firstName,
                "lastName":state.lastName
            };
            var res = await axios.post("/api/auth/signup",object);
            if(res.status === 201)
            {
                var token = res?.data?.encodedToken;
                localStorage.setItem(VAR_ENCODE_TOKEN,token)
                var user = res?.data?.createdUser;
                var userId =res?.data?.createdUser._id;
                localStorage.setItem(VAR_USER_ID, userId);
                userDispatch({ email: res.data.createdUser.email, firstName: res.data.createdUser.firstName, lastName: res.data.createdUser.lastName })
                setlogin(true);
                Alert("success", "SuccessFully Logged In!!");
                navigate("/");  
            }
            
        }
        catch(error)
        {
          console.log(error.message);
          if(error.message.slice(error.message.length-3,error.message.length) === "422")
            {
                Alert("error", "Something suspicious!! The User Already Exist, try logging in");
            }
        }
  }
  
  
  const PasswordVisibilityHandler = () => { console.log(passwordType);
    setPasswordType((prev) => prev === "password" ? "text" : "password")
    
}
  return (
    <>
    <div className="signup-body-container">
        <img src={signUpAnimation} className="signupImage" alt='signupImg'/>
        <div className="signup-container">
            <div className="title-header">
            <p>Create your profile and get first <br/>access to the very best of products, inspiration and community.
            </p>
            </div>
            <div className="signup-credential-container">
                <input type="email" placeholder="Email Address - xyz@gmail.com" onChange={(e)=>dispatch({email : e.target.value})} />
            </div>
            <div className="signup-credential-container">
              <div className='password-holder'>
                  <input  type={passwordType} placeholder="Password" name="" 
                        id=""  style={{ borderColor: passwordCheckError, outlineColor: passwordCheckError }}
                        onChange={(e) => {
                            PasswordCheck(e.target.value);
                      }} />
                  {passwordType === "password" ?
                                        <span className="material-icons-round" onClick={()=>PasswordVisibilityHandler() }>
                                            visibility
                                        </span>
                                        : <span className="material-icons-round" onClick={() => PasswordVisibilityHandler()}>
                                            visibility_off
                                        </span>}
                       </div>                  
                  <p className='error'>
                      {confirmPassword.length > 0 && confirmPassword.length < 7
                      ? "password should be minimum 7 letter"
                      : ""}
                  </p>
                  <p className='error'>
                      {confirmPassword.length > 0 &&
                      !passwordCheckError &&
                      "Password should contain a number, alphabet & special character"}
                </p>
             
            </div>
            <div className="signup-credential-container">
                <input type="password" placeholder="Confirm Password" name="" 
                id="" style={{ borderColor: passwordCheckError, outlineColor: passwordCheckError }}
                onChange={(e) => {
                    setPasswordCheckError(e.target.value !== confirmPassword ? "red" : "black");
                  }}
                  disabled={passwordCheckError && confirmPassword.length >= 7 ? false : true}/>
                  <p className='error'>{passwordCheckError === "red" && "Confirm Password Should match Password"}</p>
     
            </div>
            <div className="signup-credential-container">
                <input type="email" placeholder="First Name" onChange={(e)=>dispatch({firstName : e.target.value})}/>
            </div>
            <div className="signup-credential-container">
                <input type="email" placeholder="Last Name" onChange={(e)=>dispatch({lastName : e.target.value})} />
            </div>
            <div className="signup-remember-container">
                <div>
                    <input type="checkbox" name="" id="" />
                    I accept all Terms & Conditions
                </div>
            </div>
            <div className="signup-btn-container">
                <button className="btn signup-action-btn" onClick={onSubmittFunc} >Signup</button>
                </div>
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