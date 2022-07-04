import React, { useContext } from 'react'
import { createContext, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";


const AuthContext = createContext();

const AuthProvider = ({ children }) => {

    const location = useLocation();
    const navigation = useNavigate();
    const [ token, setToken ] = useState(localStorage.getItem("token") || "");

    const [ isAuth, setIsAuth ] = useState(JSON.parse(localStorage.getItem("isAuth")) || false);
    const [user, setUser] = useState( JSON.parse(localStorage.getItem("user")) || {firstName: "user", lastName: "name"})

    return (
        <AuthContext.Provider value={{ isAuth, setIsAuth, token, setToken, navigation, location, user, setUser }} >
            {children}
        </AuthContext.Provider>
    )
}

const useAuth = () => useContext(AuthContext);

export { AuthProvider, useAuth };