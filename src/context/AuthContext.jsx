import {createContext, useContext, useReducer, useState} from "react";

const AuthContext = createContext();

function userCredentialHandler(state, action) {
    console.log(state, action);
    if (action.email || action.firstName || action.lastName) {
        localStorage.setItem("FeetzUserDetails", JSON.stringify({
            ...state,
            email: action.email,
            firstName: action.firstName,
            lastName: action.lastName
        }))
        return {
            ...state,
            email: action.email,
            firstName: action.firstName,
            lastName: action.lastName
        }
    }
    return {
        ...state
    }
}

const AuthProvider = ({children}) => {
    const [login, setlogin] = useState(!!localStorage.getItem("feetz") && !!localStorage.getItem("feetzId"));
    const [userState, userDispatch] = useReducer(userCredentialHandler, localStorage.getItem("FeetzUserDetails") ? JSON.parse(localStorage.getItem("FeetzUserDetails")) : {
        firstName: "",
        lastName: "",
        email: ""
    })
    return (
        <AuthContext.Provider value={
            {login, setlogin, userState, userDispatch}
        }>
            {children} </AuthContext.Provider>
    )
}
export const useAuth = () => useContext(AuthContext);
export {
    AuthProvider
};
