import React from 'react';
import {v4 as uuid} from 'uuid'
import {List,ListItem, ListItemButton,ListItemIcon,ListItemText, Card, CardHeader, Avatar, IconButton, } from '@mui/material';
import { HomeOutlined, LabelOutlined, ArchiveOutlined, DeleteOutlined, LogoutOutlined } from '@mui/icons-material';
import { NavLink } from 'react-router-dom';
import "./NavBar.css";
import { useAuth } from '../../contexts/authContext';

export const NavBar = () => {
    const {user} = useAuth();
    const {firstName, lastName} = user;

    return (
        <nav className='sidebar-menu'>
            <List className='sidebar-menu-main'>
                {['Home', 'Labels', 'Archive', 'Trash'].map((text, index) => (
                <NavLink key={uuid()} className={({ isActive }) => isActive ? "active-nav-link nav-link" : "nav-link"} to={index === 0 ? "/home" : index === 1 ? "/labels" : index === 2 ? "/archive" : "/trash"}>
                    { ({isActive}) =>
                    (<ListItem key={text} disablePadding>
                    <ListItemButton className='menu-link-list'>
                        <ListItemIcon sx={isActive ? {color: 'var(--accent-color)'} : {color: 'black'}}>{
                        index === 0 ? <HomeOutlined /> : index === 1 ? <LabelOutlined /> : index === 2 ? <ArchiveOutlined /> : <DeleteOutlined />
                        }
                        </ListItemIcon>
                        <ListItemText primary={text} />
                    </ListItemButton>
                    </ListItem>)}
                </NavLink>
                ))}
            </List>

            <Card sx={{ minWidth: '100%', borderTop: 0, boxShadow: 0, position: 'absolute', bottom: '0', padding: '0' }}>
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
        </nav>
    )
}