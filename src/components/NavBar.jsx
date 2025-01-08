import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';

const NavBar = () => {
    return (
        <AppBar sx={{ display: 'flex', position: 'sticky', width: '100%', zIndex:100, background: 'linear-gradient(to right, rgba(255, 0, 0, 0.5), rgba(0, 0, 255, 0.5))'}}>
            <Toolbar>
                <Typography variant="h6" style={{ flexGrow: 1 }}>
                    WayBill Tracker V_1
                </Typography>
                <Button color="inherit" component={Link} to='/'>Home</Button>
                <Button color="inherit" component={Link} to='/awbList'>AWB List</Button>
                <Button color="inherit" component={Link} to='/awbShortlist'>AWB Shortlist</Button>
            </Toolbar>
        </AppBar>
    );
}

export default NavBar;