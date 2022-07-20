import React from "react";
import {Box, Typography} from "@mui/material"
import "./HabitCard.css";

export const HabitCard = ({habit, isArchive}) => {
    return (
        <div className="flex-item card-minimal">
                <Typography variant="h5" component="div">{habit.name}</Typography>
                {/* {habits.labels && habits.labels.map((label)=> <div>{label}</div>)} */}
            

        </div>
    )
}