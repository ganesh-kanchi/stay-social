import React, { useState } from 'react';
import { TextField, Button, Typography } from '@mui/material';
import "./auth.css";
import { Link } from "react-router-dom";
import { signupHandler } from 'features/auth';

export const Signup = () => {
    const [ signupInfo, setSignupInfo ] = useState({input:{},error:"", isPasswordVerified: true});

    const credentialsChangeHandler = (e) => {
        const { name, value } = e.target;

        if(name === "password-verification") {
        setSignupInfo({
            ...signupInfo, input: {...signupInfo.input, [name]: value},
            isPasswordVerified: value === signupInfo.input.password ? true :false,
        }) }else{
            setSignupInfo({...setSignupInfo, input: { ...setSignupInfo.input, [name]:value}});
        }
    }

    return (
        <div className="page-container auth-page">
            {
            <form className="authentication-form" onSubmit={signupHandler}>
                <Typography component="div" variant="h3">Signup</Typography>
                <TextField sx={{ input: { color: 'white' }, label: { color: 'white'}}} onChange={credentialsChangeHandler} required name='first-name' className='auth-input-field' id="outlined-basic" type="text" label="First-name" variant="outlined" />
                <TextField sx={{ input: { color: 'white' }, label: { color: 'white'}}} onChange={credentialsChangeHandler} required name='last-name' className='auth-input-field' id="outlined-basic" label="Last-name" type="text" variant="outlined" />
                <TextField sx={{ input: { color: 'white' }, label: { color: 'white'}}} onChange={credentialsChangeHandler} required name='email' className='auth-input-field' id="outlined-basic" type="email" label="E-mail" variant="outlined" />
                <TextField sx={{ input: { color: 'white' }, label: { color: 'white'}}} onChange={credentialsChangeHandler} required name='password' className='auth-input-field' id="outlined-password-input" label="Password" variant="outlined" type="password" autoComplete="current-password" />
                <TextField sx={{ input: { color: 'white' }, label: { color: 'white'}}} onChange={credentialsChangeHandler} required name='password-verification' className='auth-input-field' id="outlined-password-input" label="Confirm Password" variant="outlined" type="password" autoComplete="current-password" />
                
                <Button type="submit" sx={{bgcolor: 'var(--accent-color)'}} size="large" variant="contained" disabled={!signupInfo.isPasswordVerified}>Signup</Button>
                {signupInfo.error && <Typography variant="body1" sx={{color:"red"}}>{signupInfo.error}</Typography> }
                <Link to="/login" className="link" >Have an account already?</Link>
                
                    
            </form>}
        </div>
    )
}