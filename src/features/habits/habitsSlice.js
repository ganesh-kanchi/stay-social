import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { habitsFetchRequest } from "../../requests/habitRequests"

const initialState = {
    habits: [],
};

export const fetchHabits = createAsyncThunk(
    "habit/habitsFetchRequest",
    async (token) => {
        const {data} = await habitsFetchRequest(token);
        return data;
    }
)


export const habitsSlice = createSlice({
    name: 'habit',
    initialState,
    reducers: {
        fetch: (state) => {
            return fetchHabits();
        }
    }
})

export const { fetch } = habitsSlice.actions;

export const selectHabits = (state) => state.habit.habits;

export default habitsSlice.reducer;
