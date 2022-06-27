import { Typography } from "@mui/material";
import React from "react"
import { useAuth } from "../../contexts/authContext";
import "./HomePage.css";
import { NavBar } from "../../components/NavBar/NavBar";
// import { Loader } from "../../components/Loader/Loader";

export const HomePage = () => {
    const {user} = useAuth()
    const {firstName } = user;
    return (
        <div className="page-container">
            <NavBar />
            <div className="page-main-section">
                <header>
                {user && <Typography variant="h5" component="div" className="user-greeting"> Welcome, {firstName}</Typography>}
                </header>
            </div>
        </div>
    )
}