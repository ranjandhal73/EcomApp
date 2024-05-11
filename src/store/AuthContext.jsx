import { useState } from "react";
import { AuthContext } from "./auth-context";


const AuthContextProvider = ({children}) =>{
    const [token, setToken] = useState(null);
    const [userEmail, setUserEmail] = useState('');
    const userIsLoggedIn = !!token;

    // console.log(userIsLoggedIn);
    const loginHandler = (token, userEmail) =>{
        setToken(token);
        setUserEmail(userEmail)
    }

    const logoutHandler = () =>{
        setToken(null);
    }

    
   
    const contextValue = {
        token: token,
        userEmail: userEmail,
        isLoggedIn: userIsLoggedIn,
        login: loginHandler,
        logout: logoutHandler,
    }

    return <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>
}

export default AuthContextProvider;