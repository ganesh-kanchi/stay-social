import React from "react";
import { Routes, Route } from "react-router-dom"
import { LandingPage, HomePage, Login, Signup } from "../pages"
import { PrivateRoute } from "./PrivateRoutes";
import Mockman from "mockman-js";


export const AllRoutes = () => {
    return(
        <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="login" element={<Login />} />
            <Route path="signup" element={<Signup />} />
            <Route path="home" element={<PrivateRoute><HomePage /></PrivateRoute>} />
            <Route path="mockman" element={<Mockman />} />
        </Routes>
    )
}