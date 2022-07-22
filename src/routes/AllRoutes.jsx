import React from "react";
import { Routes, Route, Navigate } from "react-router-dom"
import { LandingPage, HomePage, Login, Signup, ExplorePage, BookmarksPage, ProfilePage } from "pages"
import { PrivateRoute } from "./PrivateRoutes";
import Mockman from "mockman-js";
import { useSelector } from "react-redux";
import { SinglePost } from "features/post";

export const AllRoutes = () => {
    const { token } = useSelector(state => state.auth);
    
    return(
        <div className="flex flex-col min-h-screen">
        <Routes>
            <Route path="/" element={!token ? <LandingPage /> : <Navigate to="/home" replace />} />
            <Route path="login" element={ !token ? <Login /> : <Navigate to="/home" replace /> } />
            
            <Route path="signup" element={ !token ? <Signup /> : <Navigate to="/home" replace /> } />
            <Route path="home" element={<PrivateRoute> <HomePage /> </PrivateRoute>} />
            <Route path="explore" element={<PrivateRoute><ExplorePage /></PrivateRoute>} />
            <Route path="bookmarks" element={<PrivateRoute><BookmarksPage /></PrivateRoute>} />
            <Route path="profile" element={<PrivateRoute><ProfilePage /></PrivateRoute>} />
            <Route path="/post/:postId" element={<PrivateRoute><SinglePost /></PrivateRoute>} />
            <Route path="/profile/:username" element={<PrivateRoute><ProfilePage /></PrivateRoute>} />
            <Route path="mockman" element={<Mockman />} />
        </Routes>
        </div>
    )
}