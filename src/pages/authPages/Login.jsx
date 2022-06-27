import React, { useState } from 'react';
import { TextField, Typography, Button } from "@mui/material";
import {Link} from "react-router-dom"
import "./auth.css";
import { useAuth } from '../../contexts/authContext';
import { loginRequest } from '../../requests/authRequests';
import { Loader } from '../../components/Loader/Loader';

 export const Login = () => {
    const { setIsAuth, setToken, navigation, setUser } = useAuth();
    const [ login, setLogin ] = useState({ input: {}, error:""});
    const [ loading, setLoading ] = useState(false);

    const credentialsChangeHandler = (e) => {
        const { name, value } = e.target;
        setLogin({...login, input: { ...login.input, [name]:value}});
    }

    const handleLogin = async (e) => {
        e.preventDefault()
        try {
            setLoading(true)
            const {data} = await loginRequest(login.input);
            setLoading(false);
            setUser({...data.foundUser})

            localStorage.setItem("isAuth", true);
            localStorage.setItem("token", data.encodedToken);
            setToken(data.encodedToken);
            
            setUser({...data.foundUser})
            localStorage.setItem("user", JSON.stringify({...data.foundUser}));
            setLogin({...login, input: {}});
            setIsAuth(true);
            navigation("home");
        } catch (err) {
            setLoading(false);
            setLogin({ ...login, error: err.response.data.errors[0]})
        }
    }

    return (
        <div className="page-container auth-page">
            {loading ? <Loader /> : 
                <form className="authentication-form" onSubmit={handleLogin}>
                <Typography component="div" variant="h3">Login</Typography>

                <TextField onChange={credentialsChangeHandler} required name='email' className='auth-input-field' id="outlined-basic" type="email" label="E-mail" variant="outlined" />
                <TextField onChange={credentialsChangeHandler} required name='password' className='auth-input-field' id="outlined-password-input" label="Password" type="password" autoComplete="current-password" />
                
                <Button type="submit" sx={{bgcolor: 'var(--accent-color)'}} size="large" loading variant="contained">Login</Button>
                {login.error && <Typography variant="body1" sx={{color:"red"}}> {login.error} </Typography>}
                <Link to="/signup" className="link" >Don't have an account yet?</Link>
                
            </form>}
        </div>
    )
}