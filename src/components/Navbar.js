import React, { useState } from "react";
import MobNav from "./MobNav";
import MenuTwoToneIcon from '@mui/icons-material/MenuTwoTone';
import { Link } from "react-router-dom";
import MonochromePhotosIcon from '@mui/icons-material/MonochromePhotos';

import Button from '@mui/material/Button';
import { useNavigate } from "react-router-dom";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup, onAuthStateChanged, signOut, updateProfile } from "firebase/auth";
function Navbar() {
    let nav =useNavigate()
    const auth = getAuth();
  const user = auth.currentUser;
    const [active, setActive] = useState(false)
    const showMenu = () => {
        setActive(!active)
    }
    return (

        <div className="bg-tranparent fixed">
        
           <div className="h-[100px] w-[100px] top-10 right-2.5 p-8 scale-150 md:hidden ">
                        <MenuTwoToneIcon  style={{ color: "#000000" }} onClick={showMenu}/>
                    </div>
                    <div className="flex flex-row justify-around w-screen p-3">
                    <div className="flex flex-row  gap-5 p-5">
                         <MonochromePhotosIcon  style={{ color: "#FFFFFF",width:"30px",height:"30px" }} />
                            <div className=" text-white text-2xl font-ibm ">
                                <span className=" font-bold">PHOTO</span>
                                <span className=" font-light ">graphy</span>
                            </div>
                    </div>               
                    {/* <div className="flex flex-row justify-end items-center "> */}
                   
                        <div className="hidden md:flex flex-row gap-x-20 items-center ">
                        <Link to ="/explore"><div className=" hover:scale-110 transition duration-300 ease-in-out  text-[#8da193] text-xl font-medium font-jost ">EXPLORE</div></Link>
                            <Link to ="/gallery"><div className=" hover:scale-110 transition duration-300 ease-in-out  text-[#8da193] text-xl font-medium font-jost ">GALLERY</div></Link>
                            <Link to ="/events"><div className=" hover:scale-110 transition duration-300 ease-in-out  text-[#8da193] text-xl font-medium font-jost ">EVENTS</div></Link>
                            <Link to ="/chat"><div className=" hover:scale-110 transition duration-300 ease-in-out  text-[#8da193] text-xl font-medium font-jost ">CHAT</div></Link>
                            <Link to ="/aboutus"><div className=" hover:scale-110 transition duration-300 ease-in-out text-[#8da193] text-xl font-medium font-jost ">ABOUT US</div></Link>

                        </div>
                       
                          
                    {/* </div> */}
                    </div>
                    <MobNav showMenu={showMenu} active={active}/>
        </div>
    );
}

export default Navbar;
