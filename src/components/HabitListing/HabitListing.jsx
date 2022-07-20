import React from "react";
import "./HabitListing.css";
import { HabitCard } from "../HabitCard/HabitCard";
import {Grid} from "@mui/material"

export const HabitsListing = ({ habits, isArchive }) => {

    return (
        
        <Grid container rowSpacing={2} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
            {
                habits.map((habit, i) => (
                    <HabitCard key={i*2} habit={habit} isArchive={isArchive} />
                ))
            }
        </Grid>

    )
}