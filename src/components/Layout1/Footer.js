import React from 'react'
import {Box,Typography} from "@mui/material";
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import GitHubIcon from '@mui/icons-material/GitHub';
import YouTubeIcon from '@mui/icons-material/YouTube';
const Footer = () => {
  return (
    <>
    <Box sx={{textAlign:'center',bgcolor:'#1A1A19',color:'white',p:3}}>
        <Box sx={{my:3,"& svg":{fontSize: "60px", cursor:"pointer" ,mr:2,},

        "& svg:hover":{color:'goldenrod', transform:'translateX(5px)',
    transition:'all 400ms',},
    }}>
            {/* Icons*/}
<InstagramIcon/>
<TwitterIcon/>
<GitHubIcon/>
<YouTubeIcon/>
        </Box>
<Typography variant="h5" sx={{"@media(max-width:600px)":{
    fontSize:"1rem",
}}}>
    All right reserved
</Typography>
    </Box>

    </>
  )
}

export default Footer;

/*import React, { useState } from "react";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";

const Footer = () => {
  const [value, setValue] = useState(0);

  const CustomBottomNavigation = (props) => {
    return (
      <BottomNavigation
        showLabels
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      >
        {props.children}
      </BottomNavigation>
    );
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Material UI Footers With PureCode</h1>
      <h3>Bottom Navigation Component</h3>
      <CustomBottomNavigation>
        <BottomNavigationAction label="Twitter" icon={<TwitterIcon />} />
        <BottomNavigationAction label="Instagram" icon={<InstagramIcon />} />
        <BottomNavigationAction label="Facebook" icon={<FacebookIcon />} />
      </CustomBottomNavigation>
    </div>
  );
};

export default Footer;*/