import { createContext, useContext, useState } from "react";

const AuthContext = createContext();



const AuthProvider = ( {children})=>{
    const [login,setlogin ] = useState(false);
    return (
        <AuthContext.Provider value={{ login, setlogin}}>
            {children}
        </AuthContext.Provider>
    )
}
export const useAuth = ()=> useContext(AuthContext);
export { AuthProvider };
