import React from "react";
import { Card, CardHeader, Avatar, IconButton } from "@mui/material";
import { LogoutOutlined } from "@mui/icons-material";
import { useAuth } from "../../contexts/authContext";
import { useDocumentSize } from "../../contexts/documentSizeContext";

export const ProfileCard = () => {
    const {user, logoutHandler} = useAuth();
    const {innerWidth} = useDocumentSize();
    const {firstName, lastName} = user;
    
    return (
        <Card className="profile-card" sx={{  width: innerWidth > 800 ? "20vw" : "100%" , borderTop: 0, boxShadow: 0, position: 'fixed', bottom: '0', padding: '0', zIndex: "5" }}>
                <CardHeader
                    avatar={ 
                    <Avatar aria-label="avatar">
                        {firstName.slice(0,1).toUpperCase()}
                    </Avatar>
                    }
                    action={
                    <IconButton aria-label="settings" onClick={logoutHandler}>
                        <LogoutOutlined fontSize='large' />
                    </IconButton>
                    }
                    title={(firstName + " " + lastName)}
                    subheader="View Profile"
                />
            </Card>
    )
}