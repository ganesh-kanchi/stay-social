import React from "react";
import { Card, CardHeader, Avatar, IconButton } from "@mui/material";
import { LogoutOutlined } from "@mui/icons-material";
import { useAuth } from "../../contexts/authContext";

export const ProfileCard = () => {
    const {user} = useAuth();
    const {firstName, lastName} = user;
    return (
        <Card className="profile-card" sx={{ width: "20vw", borderTop: 0, boxShadow: 0, position: 'fixed', bottom: '0', padding: '0' }}>
                <CardHeader
                    avatar={ 
                    <Avatar aria-label="avatar">
                        {firstName.slice(0,1).toUpperCase()}
                    </Avatar>
                    }
                    action={
                    <IconButton aria-label="settings">
                        <LogoutOutlined fontSize='large' />
                    </IconButton>
                    }
                    title={(firstName + " " + lastName)}
                    subheader="View Profile"
                />
            </Card>
    )
}