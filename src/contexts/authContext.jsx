import React, { useContext, createContext, useState } from 'react';
import { useLocation, useNavigate } from "react-router-dom";


const AuthContext = createContext();

const AuthProvider = ({ children }) => {

    const location = useLocation();
    const navigation = useNavigate();
    const [ token, setToken ] = useState(localStorage.getItem("token") || "");

    const [ isAuth, setIsAuth ] = useState(JSON.parse(localStorage.getItem("isAuth")) || false);
    const [user, setUser] = useState( JSON.parse(localStorage.getItem("user")) || {firstName: "user", lastName: "name"})


    const logoutHandler = () => {
        setIsAuth(false)
        setToken("")
        localStorage.delete("user")
        localStorage.delete("token")
    }

    return (
        <AuthContext.Provider value={{ isAuth, setIsAuth, token, setToken, navigation, location, user, setUser, logoutHandler }} >
            {children}
        </AuthContext.Provider>
    )
}

const useAuth = () => useContext(AuthContext);

export { AuthProvider, useAuth };