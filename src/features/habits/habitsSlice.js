import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { habitAddRequest, habitsFetchRequest } from "../../requests/habitRequests"

const initialState = {
    habits: [],
    archives: [],
    labels: [],
    error: null
};

export const fetchHabits = createAsyncThunk(
    "habit/fetchHabits",
    async (token) => {
        const {data} = await habitsFetchRequest(token);
        return data;
    }
)

export const addHabit = createAsyncThunk(
    "habit/addHabit",
    async({token, habitInfo}, {rejectWithValue}) => {
        
        try{
            const {data, status} = await habitAddRequest(token, habitInfo);
            if(status===200) {
                return data.habits;
            }
        }catch{
            return rejectWithValue([], "Error occured. Try again later.");
        }
    }
)


export const habitsSlice = createSlice({
    name: 'habit',
    initialState,
    reducers: {
        add: addHabit()
    },

    extraReducers:{
    [fetchHabits.fulfilled]: (state, {payload}) => {
        state = payload;
    },
    [fetchHabits.rejected]: (state,{payload}) => {
        state.error = payload;
    }
    ,
    [addHabit.fulfilled]: (state, { payload }) => {
        state.habits = payload;
        console.log("success")
      },
      [addHabit.rejected]: (state, { payload }) => {
        state.error = payload;
      },
    }
})

export const { fetch, add } = habitsSlice.actions;

export const selectHabits = (state) => state.habit.habits;
export const selectLabels = (state) => state.habit.labels;


export default habitsSlice.reducer;
