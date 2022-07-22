import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { loginRequest, signupRequest } from "requests/authRequests";

const initialState = {
    token: localStorage.getItem("token") || null,
    user: JSON.parse(localStorage.getItem("user")) || null,
    loading: false
}

export const loginHandler= createAsyncThunk(
    "auth/loginHandler",

    async (credentials, { rejectWithValue }) => {
        const {login, setLogin} = credentials;

        try {
            const { data, status } = await loginRequest(login.input);

            if (status === 200) {
                localStorage.setItem("token", data.encodedToken);
                localStorage.setItem("user", JSON.stringify(data.foundUser));
                return data;
            }
        } catch (error) {
            setLogin((prevValue) => ({...prevValue, error: error.response.statusText }));
            console.log(error.response)
            return rejectWithValue([], false);
        }
    }

)

export const signupHandler = createAsyncThunk(
    "auth/signupHandler",

    async (credentials, { rejectWithValue }) => {
        const { signup, setSignup } = credentials;

        try {
            const { data, status } = await signupRequest(signup.input);

            if (status === 201) {
                localStorage.setItem("token", data.encodedToken);
                localStorage.setItem("user", JSON.stringify(data.createdUser));

                return data;
            }
        } catch (error) {
            setSignup({ ...signup, error: error.response.data.error[0] });
            return rejectWithValue([], false);
        }
    }

)

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        logoutHandler: (state) => {
            state.token = null;
            localStorage.removeItem("token");
            localStorage.removeItem("user");
        }
    },
    extraReducers: {
        [loginHandler.pending]: ( state ) => {
            state.loading = true;
        },
        [loginHandler.fulfilled]: ( state, { payload } ) => {
            state.loading = false;
            state.token = payload.encodedToken;
            state.user = payload.foundUser;
        },
        [loginHandler.rejected]: ( state ) => {
            state.loading = false;
        },

        [signupHandler.pending]: ( state ) => {
            state.loading = true;
        },
        [signupHandler.fulfilled]: ( state, { payload } ) => {
            state.loading = false;
            state.token = payload.encodedToken;
            state.user = payload.createdUser;
        },
        [signupHandler.rejected]: ( state ) => {
            state.loading = false;
        }
    }
})

export const { logoutHandler } = authSlice.actions;
export default authSlice.reducer;