import React from 'react';
import './style.css';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

function appbar() {
  return (
    <nav className="navbar">
      <Box sx={{ bgcolor: 'background.paper', flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar variant="dense">
            <Typography variant="h6" color="inherit" component="div">
              D4 BIRDWATCHER
            </Typography>
          </Toolbar>
        </AppBar>
      </Box>
    </nav>
  );
}

export default appbar;
