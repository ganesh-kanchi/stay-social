import React, { useState } from 'react';
import { TextField, Button, Typography } from '@mui/material';
import "./auth.css";
import {Link} from "react-router-dom";
import { signupRequest } from '../../requests/authRequests';
import { useAuth } from '../../contexts/authContext';
import { Loader } from '../../components/Loader/Loader';

export const Signup = () => {
    const { setIsAuth, setToken, navigation } = useAuth()
    const [loading, setLoading] = useState(false)
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

    const handleSignup = async (e) => {
        e.preventDefault()

        try {
            setLoading(true);
            const {data} = await signupRequest(signupInfo.input);
            setLoading(false);

            localStorage.setItem("isAuth", true);
            localStorage.setItem("token", data.encodedToken);
            setToken(data.encodedToken);

            setSignupInfo({...signupInfo, input: {}});
            setIsAuth(true);
            navigation("home");
        } catch(err) {
            setLoading(false);
            setSignupInfo({...signupInfo, error: err.response.data.errors[0]});
        }
    }

    return (
        <div className="page-container auth-page">
            { loading ? <Loader /> :
            <form className="authentication-form" onSubmit={handleSignup}>
                <Typography component="div" variant="h3">Signup</Typography>
                <TextField onChange={credentialsChangeHandler} required name='first-name' className='auth-input-field' id="outlined-basic" type="text" label="First-name" variant="outlined" />
                <TextField onChange={credentialsChangeHandler} required name='last-name' className='auth-input-field' id="outlined-basic" label="Last-name" type="text" variant="outlined" />
                <TextField onChange={credentialsChangeHandler} required name='email' className='auth-input-field' id="outlined-basic" type="email" label="E-mail" variant="outlined" />
                <TextField onChange={credentialsChangeHandler} required name='password' className='auth-input-field' id="outlined-password-input" label="Password" variant="outlined" type="password" autoComplete="current-password" />
                <TextField onChange={credentialsChangeHandler} required name='password-verification' className='auth-input-field' id="outlined-password-input" label="Confirm Password" variant="outlined" type="password" autoComplete="current-password" />
                
                <Button type="submit" sx={{bgcolor: 'var(--accent-color)'}} size="large" variant="contained" disabled={!signupInfo.isPasswordVerified}>Signup</Button>
                {signupInfo.error && <Typography variant="body1" sx={{color:"red"}}>{signupInfo.error}</Typography> }
                <Link to="/login" className="link" >Have an account already?</Link>
                
                    
            </form>}
        </div>
    )
}