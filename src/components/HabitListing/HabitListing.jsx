import React from "react";
import "./HabitListing.css";
import { HabitCard } from "../HabitCard/HabitCard";

export const HabitsListing = ({ habits, isArchive }) => {

    return (
        <div className="flex-four-row">
            {
                habits.map((habit, i) => (
                    <HabitCard key={i*2} habit={habit} isArchive={isArchive} />
                ))
            }
        </div>

    )
}