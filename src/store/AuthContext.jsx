import { useState } from "react";
import { AuthContext } from "./auth-context";


const AuthContextProvider = ({children}) =>{
    const [token, setToken] = useState(null);
    const userIsLoggedIn = !!token;

    // console.log(userIsLoggedIn);
    const loginHandler = (token) =>{
        setToken(token);
    }

    const logoutHandler = () =>{
        setToken(null);
    }

   
    const contextValue = {
        token: token,
        isLoggedIn: userIsLoggedIn,
        login: loginHandler,
        logout: logoutHandler,
    }

    return <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>
}

export default AuthContextProvider;