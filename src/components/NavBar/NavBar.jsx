import React from 'react';
import {v4 as uuid} from 'uuid'
import {List,ListItem, ListItemButton,ListItemIcon,ListItemText } from '@mui/material';
import { HomeOutlined, LabelOutlined, ArchiveOutlined, DeleteOutlined } from '@mui/icons-material';
import { NavLink } from 'react-router-dom';
import "./NavBar.css";

export const NavBar = () => {
    return (
        <nav className='sidebar-menu'>
            <List className='sidebar-menu-main'>
                {['Home', 'Labels', 'Archive', 'Trash'].map((text, index) => (
                <NavLink key={uuid()} className={({ isActive }) => isActive ? "active-nav-link nav-link" : "nav-link"} to={index === 0 ? "/home" : index === 1 ? "/labels" : index === 2 ? "/archive" : "/trash"}>
                    { ({isActive}) =>
                    (<ListItem key={text} disablePadding>
                    <ListItemButton className='menu-link-list'>
                        <ListItemIcon className="list-item-icon-container" sx={isActive ? {color: 'var(--accent-color)'} : {color: 'black'}}>{
                        index === 0 ? <HomeOutlined fontSize="inherit" /> : index === 1 ? <LabelOutlined fontSize="inherit" /> : index === 2 ? <ArchiveOutlined fontSize="inherit" /> : <DeleteOutlined fontSize="inherit" />
                        }
                        </ListItemIcon>
                        <ListItemText primary={text} className="sidebar-menu-title" />
                    </ListItemButton>
                    </ListItem>)}
                </NavLink>
                ))}
            </List>

            
        </nav>
    )
}