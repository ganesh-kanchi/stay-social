import React from "react";
import { Card, CardHeader, Avatar, IconButton } from "@mui/material";
import { LogoutOutlined } from "@mui/icons-material";
import { useDocumentSize } from "../../contexts/documentSizeContext";
import { useSelector,useDispatch } from "react-redux";
import { logoutHandler } from "../../features/auth";

export const ProfileCard = () => {
    const {user} = useSelector((state)=> state.auth);
    const {innerWidth} = useDocumentSize();
    const {firstName, lastName} = user;
    const dispatch = useDispatch();
    
    return (
        <Card className="profile-card" sx={{  width: innerWidth > 800 ? "20vw" : "100%" , borderTop: 0, boxShadow: 0, position: 'fixed', bottom: '0', padding: '0', zIndex: "5" }}>
                <CardHeader
                    avatar={ 
                    <Avatar aria-label="avatar">
                        {firstName.slice(0,1).toUpperCase()}
                    </Avatar>
                    }
                    action={
                    <IconButton aria-label="settings" onClick={ ()=>dispatch(logoutHandler())}>
                        <LogoutOutlined fontSize='large' />
                    </IconButton>
                    }
                    title={(firstName + " " + lastName)}
                    subheader="View Profile"
                />
            </Card>
    )
}