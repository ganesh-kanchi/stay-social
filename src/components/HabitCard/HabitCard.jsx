import React from "react";
import {Typography, Grid} from "@mui/material"
import "./HabitCard.css";

export const HabitCard = ({habit, isArchive}) => {
    const {name, color} = habit;
    return (
        <Grid item xs={6}>
        <div className={`flex-item card-minimal ${color}-card-bg`}>
                <Typography variant="h5" component="div">{habit.name}</Typography>
                {/* {habits.labels && habits.labels.map((label)=> <div>{label}</div>)} */}
            

        </div>
        </Grid>
    )
}