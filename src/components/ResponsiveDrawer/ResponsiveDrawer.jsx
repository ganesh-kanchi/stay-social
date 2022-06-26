import React from 'react';
import "./ResponsiveDrawer.css"
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import { Box, Drawer, AppBar, CssBaseline, Toolbar, List, Typography, ListItem,
   ListItemButton, ListItemIcon, ListItemText, IconButton  } from '@mui/material';
import { HomeOutlined, LabelOutlined, ArchiveOutlined, DeleteOutlined, Menu} from "@mui/icons-material"

const drawerWidth = 240;

function ResponsiveDrawer(props) {
  console.log(props)
  const { window, children } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div className='drawer'>
      <Toolbar sx={{bgcolor: 'var(--accent-color)'}} />
      <List>
        {['Home', 'Labels', 'Archive', 'Trash'].map((text, index) => (
          <NavLink className={({ isActive }) => isActive ? "active-nav-link nav-link" : "nav-link"} to={index === 0 ? "/home" : index === 1 ? "/labels" : index === 2 ? "/archive" : "/trash"}>
            <ListItem key={text} disablePadding >
              <ListItemButton className='menu-link-list'>
                <ListItemIcon>{
                  index === 0 ? <HomeOutlined /> : index === 1 ? <LabelOutlined /> : index === 2 ? <ArchiveOutlined /> : <DeleteOutlined />
                  }
                  
                </ListItemIcon>
                  <ListItemText primary={text} />
              </ListItemButton>
            </ListItem>
          </NavLink>
        ))}
      </List>
      
    </div>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          bgcolor: 'var(--accent-color)',
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
        }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <Menu />
          </IconButton>
          <Typography variant="h6" noWrap component="div">
            Track Them Habits
          </Typography>
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: 'none', sm: 'block' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
      >
        <Toolbar />
        {children}
      </Box>
    </Box>
  );
}

ResponsiveDrawer.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default ResponsiveDrawer;
