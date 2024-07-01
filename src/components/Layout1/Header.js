import React, { useState } from 'react'
import { AppBar, Box, Drawer, IconButton, Toolbar, Typography } from '@mui/material'
 import FastfoodIcon from '@mui/icons-material/Fastfood';
import { Link } from 'react-router-dom';
import '../../styles/HeaderStyles.css'
import MenuIcon from '@mui/icons-material/Menu';
import Divider from '@mui/material/Divider';
const Header = () => {
  const [mobileOpen,setMobileOpen]=useState(false)
  
  //handle menu click
  const handleDrawerToggle=()=>{
    setMobileOpen(!mobileOpen)
  }
  
  //Menu drawer 

const drawer=(
  <Box onClick={handleDrawerToggle} sx={{textAlign:'center'}}>

<Typography color={'goldenrod'} 
variant="h6" component="div" 
sx={{flexGrow:1,my:2}}>
                  <FastfoodIcon/>
                My Restaurant
                </Typography>
                <Divider/>   
                
  <ul className="mobile-navigation">
    <li>
      <Link to={"/"}> Home </Link>
    </li>
    <li>
      <Link to={"/menu"}> Menu </Link>
    </li>
    <li>
      <Link to={"/about"}> About </Link>
    </li>
    <li>
      <Link to={"/contact"}> Contact </Link>
    </li>
  </ul>

                
  </Box>
)

  return (
    <div>
        <Box>
          <AppBar component={'nav'}sx={{bgcolor:"black"}}>
           
              <Toolbar> 
<IconButton color="inherit" 
aria-label="open drawer"
 edge="start" 
 sx={{mr:2,display:{sm:"none"},}}
 // menu k icon pr event lagaya 
 onClick={handleDrawerToggle}  // isse menu responsive mobile devie pr show hoga
 
 >


  
  <MenuIcon/>
  
  </IconButton>


                <Typography color={'goldenrod'} variant="h6" component="div" sx={{flexGrow:1}}>
                  <FastfoodIcon/>
                My Restaurant
                </Typography>
                
                <Box className="navigation-menu" sx={{display:{xs:'none',sm:'block'}}}>
  <ul navigation-menu1>
    <li>
      <Link to={"/"}> Home </Link>
    </li>
    <li>
      <Link to={"/menu"}> Menu </Link>
    </li>
    <li>
      <Link to={"/about"}> About </Link>
    </li>
    <li>
      <Link to={"/contact"}> Contact </Link>
    </li>
  </ul>
</Box>
                </Toolbar>
            
          </AppBar>
          <Box component="nav"> 
          <Drawer variant="temporary" open={mobileOpen}
           onClose={handleDrawerToggle}
           sx={{   //  drawer k click par menu ko bich center me laane k liye("& .MuiDrawer-paper") ka use kiya
            display:{xs:"block",sm:"none"},
            "& .MuiDrawer-paper":{boxSizing:"border-box",width:"240px",
           },
           }}
           >
            {drawer}
          </Drawer>
          </Box>
          <Box >
          <Toolbar/>
          </Box>
          
        </Box>
    </div>
  )
}

export default Header