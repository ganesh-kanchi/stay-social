import React from "react";
import { Routes, Route, Navigate } from "react-router-dom"
import { LandingPage, HomePage, Login, Signup } from "../pages"
import { PrivateRoute } from "./PrivateRoutes";
import Mockman from "mockman-js";
import { LabelsPage } from "../pages/LabelsPage/LabelsPage";
import { ArchivesPage } from "../pages/ArchivesPage/ArchivesPage";
import { TrashPage } from "../pages/TrashPage/TrashPage";
import { ProfilePage } from "../pages/ProfilePage/ProfilePage";
import { useSelector } from "react-redux";


export const AllRoutes = () => {
    const { token } = useSelector(state => state.auth);
    
    return(
        <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="login" element={ !token ? <Login /> : <Navigate to="/home" replace /> } />
            
            <Route path="signup" element={ !token ? <Signup /> : <Navigate to="/home" replace /> } />
            <Route path="home" element={<PrivateRoute> <HomePage /> </PrivateRoute>} />
            <Route path="labels" element={<PrivateRoute> <LabelsPage /> </PrivateRoute>} />
            <Route path="archive" element={<PrivateRoute><ArchivesPage /></PrivateRoute>} />
            <Route path="trash" element={<PrivateRoute><TrashPage /></PrivateRoute>} />
            <Route path="profile" element={<PrivateRoute><ProfilePage /></PrivateRoute>} />
            <Route path="mockman" element={<Mockman />} />
        </Routes>
    )
}