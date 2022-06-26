import { Typography } from "@mui/material";
import React from "react"
import ClippedDrawer from "../../components/ResponsiveDrawer/ResponsiveDrawer";
import "./HomePage.css";
// import { Loader } from "../../components/Loader/Loader";

export const HomePage = () => {
    return (
        <div className="page-container">
            <ClippedDrawer>
                <div className="collective-habits-dashboard">
                    <header>

                    <Typography variant="h5" component="div" className="user-greeting"> Welcome, User</Typography>
                    </header>
                </div>
            </ClippedDrawer>
        </div>
    )
}