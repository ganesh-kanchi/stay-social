import React, { useState } from 'react';
import { Typography, Button, OutlinedInput,InputAdornment, IconButton, InputLabel, FormControl, TextField  } from "@mui/material";
import { Visibility, VisibilityOff } from '@mui/icons-material';
import { Link } from "react-router-dom"
import "./auth.css";
import { loginHandler } from 'features/auth';
import { useDispatch } from 'react-redux';

 export const Login = () => {
    const dispatch = useDispatch();
    const [ login, setLogin ] = useState({ input: {}, error:"", showPassword: false});
    const guestLogin = {username: "ganesh-kanchi", password: "ganeshk123"};

    const credentialsChangeHandler = (e) => {
        const { name, value } = e.target;
        setLogin({...login, input: { ...login.input, [name]:value}});
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

      const formSubmit = (e) => {
        e.preventDefault()
        dispatch(loginHandler({login, setLogin}))
      }

    return (
        <div className="page-container auth-page">
            {
                <form className="authentication-form" onSubmit={formSubmit} >
                <Typography component="div" variant="h3">Login</Typography>
                <TextField 
                    sx={{ input: { color: 'white' }, label: { color: 'white'}}}
                    required
                    id="outlined-name"
                    className='text-field'
                    label="User Name"
                    value={login.input['username'] || ""}
                    name="username"
                    onChange={credentialsChangeHandler}
                    />
                <FormControl variant="outlined">

                    <InputLabel htmlFor="outlined-adornment-password" sx={{color: "white"}} >Password *</InputLabel>
                    <OutlinedInput
                    sx={{color: "white"}}
                    required
                    id="outlined-adornment-password"
                    name='password'
                    type={login.showPassword ? 'text' : 'password'}
                    value={login.input['password'] || ""}
                    onChange={credentialsChangeHandler}
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
                
                <Button onClick={formSubmit} type="submit" sx={{bgcolor: 'var(--accent-color)'}} size="large" variant="contained">Login</Button>
                <Button onClick={()=>{
                    setLogin({...login, input: guestLogin});
                }} type="submit" name="guest-login" sx={{bgcolor: 'var(--accent-color)'}} size="large" variant="contained">Login with guest account</Button>
                {login.error && <Typography variant="body1" sx={{color:"red"}}> {login.error} </Typography>}
                <Link to="/signup" className="link" >Don't have an account yet?</Link>
                
            </form>
            }
        </div>
    )
}