import React, { useState } from 'react';
import { Typography, Button, OutlinedInput,InputAdornment, IconButton, InputLabel, FormControl  } from "@mui/material";
import { Visibility, VisibilityOff } from '@mui/icons-material';
import {Link} from "react-router-dom"
import "./auth.css";
import { useAuth } from '../../contexts/authContext';
import { loginRequest } from '../../requests/authRequests';
import { Loader } from '../../components/Loader/Loader';

 export const Login = () => {
    const { setIsAuth, setToken, navigation, setUser } = useAuth();
    const [ login, setLogin ] = useState({ input: {email: " ", password: ""}, error:"", showPassword: false});
    const [ loading, setLoading ] = useState(false);
    const guestLogin = {email: "adarshbalika@gmail.com", password: "adarshBalika123"}

    const credentialsChangeHandler = (prop) => (e) => {
        const { value } = e.target;
        setLogin({...login, input: { ...login.input, [prop]:value}});
    }

    const handleLogin = async (e) => {
        
        try {
            setLoading(true)
             
            const {data} = e.target.name==="guest-login" ? await loginRequest(guestLogin) : await loginRequest(login.input);
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

    const handleClickShowPassword = () => {
        setLogin({
          ...login,
          showPassword: !login.showPassword,
        });
      };
    
      const handleMouseDownPassword = (event) => {
        event.preventDefault();
      };

    return (
        <div className="page-container auth-page">
            {loading ? <Loader /> : 
                <div className="authentication-form" >
                <Typography component="div" variant="h3">Login</Typography>



                <FormControl variant='outlined'>
                    <InputLabel htmlFor="outlined-email">Email</InputLabel>
                    <OutlinedInput
                        id="outlined-email"
                        type='email'
                        value={login.input.email}
                        onChange={credentialsChangeHandler('email')}
                        label="Email"
                        />
                </FormControl>
                
                <FormControl variant="outlined">

                    <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
                    <OutlinedInput
                    id="outlined-adornment-password"
                    type={login.showPassword ? 'text' : 'password'}
                    value={login.input.password}
                    onChange={credentialsChangeHandler('password')}
                    endAdornment={
                    <InputAdornment position="end">
                        <IconButton
                        aria-label="toggle password visibility"
                        onClick={handleClickShowPassword}
                        onMouseDown={handleMouseDownPassword}
                        edge="end"
                        >
                        {login.showPassword ? <VisibilityOff /> : <Visibility />}
                        </IconButton>
                    </InputAdornment>
                    }
                    label="Password"
                />
                </FormControl>
                
                <Button onClick={handleLogin} type="submit" sx={{bgcolor: 'var(--accent-color)'}} size="large" variant="contained">Login</Button>
                <Button onClick={handleLogin} name="guest-login" type="submit" sx={{bgcolor: 'var(--accent-color)'}} size="large" variant="contained">Login with guest account</Button>
                {login.error && <Typography variant="body1" sx={{color:"red"}}> {login.error} </Typography>}
                <Link to="/signup" className="link" >Don't have an account yet?</Link>
                
            </div>}
        </div>
    )
}