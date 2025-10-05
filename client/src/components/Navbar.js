import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';

import {ReactComponent as BuffaloIcon} from '../assets/buffalo.svg'

import { useNavigate } from 'react-router-dom';

const pages = [
  {name:'Home', path:"/"},
  {name:"Reading Room", path:"/reading-room"},
  {name:"Adventures", path:"/adventures"},
];




function Navbar() {

const navigate=useNavigate();

  return (
    <Box>
      <AppBar position="static">
        <Toolbar>

            <BuffaloIcon style={{height:50, width:50}} />
          


          {pages.map((page) => (
          <Button 
            key={page.name}
            color="inherit" 
            onClick={() => navigate(page.path)}>
    
    
    {page.name}


  </Button>
))}
        
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default Navbar;

