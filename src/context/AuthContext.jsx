import { createContext, useContext, useState } from "react";

const AuthContext = createContext();



const AuthProvider = ( {children})=>{
    const [login,setlogin ] = useState(!!localStorage.getItem("feetz") && !!localStorage.getItem("feetzId"));
    return (
        <AuthContext.Provider value={{ login, setlogin}}>
            {children}
        </AuthContext.Provider>
    )
}
export const useAuth = ()=> useContext(AuthContext);
export { AuthProvider };
