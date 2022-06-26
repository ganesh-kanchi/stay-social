import React from "react"
import { Button, Typography } from "@mui/material";
import { Link, useNavigate } from "react-router-dom"
import "./LandingPage.css";

export const LandingPage = () => {
    const navigation = useNavigate()

    return (
        <div className="page-container">
            <div className="landing-page-container">
                <div className="landing-page-text-container flex-child">
                    <Typography className="landing-page-headline" variant="h2" component="div">
                        Track <span className="accent-text" >Them</span> Habits
                    </Typography>

                    <div className="landing-page-text-body" >
                        <Typography className="landing-page-headline" variant="h4" component="div">
                            Track your Habits with this 
                            <br />
                            <span className="accent-text">modern Habit Tracker app</span>
                        </Typography>

                        <Typography variant="body1">
                            manage your daily tasks and workflow in a modern way and boost your efficiency with without any efforts
                        </Typography>
                    </div>

                    <Button onClick={()=> navigation("signup")} variant="contained" className="mui-button"> Get Started </Button>
                    <Link to="login" className="link" >
                        Have an account already?
                    </Link>

                </div>
                <div className="landing-page-img-container flex-child">
                    <img src="assets/undraw_progress.svg" className="responsive-image" alt="progress" />
                </div>
            </div>
        </div>
    )
}