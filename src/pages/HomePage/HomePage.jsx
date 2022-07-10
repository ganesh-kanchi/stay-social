import { Typography, Button } from "@mui/material";
import React from "react"
import { useAuth } from "../../contexts/authContext";
import "./HomePage.css";
import { NavBar } from "../../components/NavBar/NavBar";
import {ProfileCard} from "../../components/ProfileCard/ProfileCard"
// import { Loader } from "../../components/Loader/Loader";

export const HomePage = () => {
    const { user } = useAuth()
    const { firstName } = user;
    return (
        <div className="grid-page-container">
            <Typography variant="h4" component="div" className="main-head">Track<span className="accent-text">Them</span>Habits</Typography>
            <NavBar />
            <ProfileCard />
            
            <div className="page-main-section">
                <div className="habits-dashboard-head" >
                    <Typography variant="h5" component="div" className="user-greeting"> 
                        Welcome, {firstName}
                    </Typography> 
                    <select className="select-date" name="day" id="day">
                        <option value="Yesterday">Yesterday</option>
                        <option value="Today">Today</option>
                        <option value="Tommorrow">Tommorrow</option>
                    </select>
                </div>
                <div className="flex-four-column">
                    {["Completed", "In progress", "Overdue", "Total"].map(task => 
                            (<div className="flex-item card-minimal">
                                <Typography variant="h5" component="div">{task}</Typography>
                                <Typography variant="h3" component="div">0</Typography>
                                <Typography variant="h6" component="div">Total Count</Typography>
                            </div>))}
                </div>
                <div className="habits-dashboard-head">
                    <Typography variant="h5" component="div">My Habits</Typography>
                    <Button variant="text">+ New Habit</Button>
                </div>
                <Typography variant="h6" component="div">ACTIVE</Typography>
                <div className="flex-four-column">
                    {["task #1", "task #2", "task #3", "task #4"].map(task => 
                        (<div className="flex-item card-minimal">
                            <Typography variant="h5" component="div">{task}</Typography>
                            <Typography variant="h3" component="div">16</Typography>
                            <Typography variant="h6" component="div">Total Count</Typography>
                        </div>))}
                </div>
                <Typography variant="h6" component="div">COMPLETED</Typography>
                <div className="flex-four-column">
                    {["task #1", "task #2", "task #3", "task #4"].map(task => 
                        (<div className="flex-item card-minimal">
                            <Typography variant="h5" component="div">{task}</Typography>
                            <Typography variant="h3" component="div">16</Typography>
                            <Typography variant="h6" component="div">Total Count</Typography>
                        </div>))}
                </div>
            </div>
        </div>
    )
}