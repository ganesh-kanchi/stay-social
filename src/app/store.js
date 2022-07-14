import { configureStore } from "@reduxjs/toolkit";
import habitReducer from "../features/habits/habitsSlice"
import authReducer from "../features/auth/authSlice"

export const store = configureStore({
    reducer: {
        habit: habitReducer,
        auth: authReducer,
    },
})