import "./LabelsPage.css";
import React from "react";
import {Typography} from "@mui/material";
import { NavBar } from "../../components/NavBar/NavBar";
import { ProfileCard } from "../../components/ProfileCard/ProfileCard";

export const LabelsPage = () => {
    return (
        <div className="grid-page-container">
            <Typography variant="h4" component="div" className="main-head">Track<span className="accent-text">Them</span>Habits</Typography>
            <NavBar />
            <ProfileCard />

            <div className="page-main-section">
                
            </div>
        </div>
    )
}