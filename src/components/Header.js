import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
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

import DrawerComp from "./Drawer";
import Photo from "../assets/photography.png";
const Header = () => {
  let nav=useNavigate()
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
              {/* <Typography sx={{ fontSize: "2rem", paddingLeft: "10%" }}>
                Shoppee
              </Typography> */}
              <DrawerComp />
            </>
          ) : (
            <>
              <Tabs
                sx={{ marginLeft: "auto",marginRight:"auto"}}
                indicatorColor="secondary"
                textColor="inherit"
                
                value={value}
                onChange={(e, value) => setValue(value)}
                className="text-white"
               
              >
                <Tab label="Explore" />
                <Tab label="Gallery" />
                <Tab label="Chat" />
                <Tab label="About Us" />
              </Tabs>
              <span className="mr-2">Username</span>
              <AccountCircleIcon/>
              

            
          
            </>
          )}
        </Toolbar>
      </AppBar>
    </React.Fragment>
  );
};

export default Header;
