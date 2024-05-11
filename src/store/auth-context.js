import { createContext } from "react";


export const AuthContext = createContext({
    token: '',
    userEmail: [],
    isLoggedIn: false,
    login: (token,email) => {},
    logout: () =>{},
})