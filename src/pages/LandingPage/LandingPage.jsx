import React from "react"
import { Button, Typography } from "@mui/material";
import { Link, useNavigate } from "react-router-dom"
import { useSelector } from "react-redux";
import "./LandingPage.css";

export const LandingPage = () => {
    const navigation = useNavigate()
    const {token} = useSelector((state)=> state.auth)

    return (
        <div className="page-container">
            <div className="landing-page-container">
                <div className="landing-page-text-container flex-child">
                    <Typography className="landing-page-headline" variant="h2" component="div">
                        <span className="accent-text" >Stay</span> Social
                    </Typography>

                    <div className="landing-page-text-body" >
                        <Typography className="landing-page-headline" variant="h4" component="div">
                            Follow People around the Globe
                            <br />
                            <span className="accent-text">Connect with your Friends</span>
                            <br />
                            Share what you are Thinking
                        </Typography>

                    </div>

                    <Button onClick={()=> token ? navigation("home") : navigation("signup")} variant="contained" className="mui-button"> Get Started </Button>
                    <Link to="login" className="link" >
                        Have an account already?
                    </Link>

                </div>
                {/* <div className="landing-page-img-container flex-child">
                    <img src="assets/undraw_progress" className="responsive-image" alt="progress" />
                </div> */}
            </div>
        </div>
    )
}