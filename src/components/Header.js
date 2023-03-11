import React, { useState } from "react";
import {
  AppBar,
  Button,
  Tab,
  Tabs,
  Toolbar,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import AddBusinessRoundedIcon from "@mui/icons-material/AddBusinessRounded";
import DrawerComp from "./Drawer";
import Photo from "../assets/photography.png";
const Header = () => {
  const [value, setValue] = useState();
  const theme = useTheme();
  console.log(theme);
  const isMatch = useMediaQuery(theme.breakpoints.down("md"));
  console.log(isMatch);

  return (
    <React.Fragment>
      <AppBar sx={{ background: "transparent" }} >
        <Toolbar>
         
          <img src={Photo} alt='logo' className='h-[40px] w-[40px]'/>
          {isMatch ? (
            <>
              <Typography sx={{ fontSize: "2rem", paddingLeft: "10%" }}>
                Shoppee
              </Typography>
              <DrawerComp />
            </>
          ) : (
            <>
              <Tabs
                sx={{ marginLeft: "auto"}}
                indicatorColor="secondary"
                textColor="inherit"
                
                value={value}
                onChange={(e, value) => setValue(value)}
                className="text-black"
               
              >
                <Tab label="Explore" />
                <Tab label="Gallery" />
                <Tab label="Chat" />
                <Tab label="About Us" />
              </Tabs>
              <span>Username</span>
              
            
          
            </>
          )}
        </Toolbar>
      </AppBar>
    </React.Fragment>
  );
};

export default Header;
