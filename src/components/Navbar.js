import React,{useState} from "react";
import MobNav from "./MobNav";
import MenuTwoToneIcon from '@mui/icons-material/MenuTwoTone';
import { Link } from "react-router-dom";

function Navbar() {
    const[active,setActive]=useState(false)
    const showMenu = ()=>
    {
        setActive(!active)
    }
    return (

        <div className="bg-tranparent fixed">
        
           <div className="h-[100px] w-[100px] top-10 right-2.5 p-8 scale-150 md:hidden ">
                        <MenuTwoToneIcon  style={{ color: "#000000" }} onClick={showMenu}/>
                    </div>
                    <div className="flex flex-row justify-between items-center">
                    <div className="flex flex-row justify-center items-center gap-5 p-5">
                            {/* <div className="bg-[#007ced] text-white rounded-full h-12 w-12 flex justify-center items-center">
                                <p className="font-bold text-4xl">P</p>
                            </div> */}
                            <div className=" text-black  ">
                                <p className=" font-semibold  font-roguescript text-4xl">Photography</p>
                            </div>
                    </div>               
                    <div className="flex flex-row justify-end items-center ">
                   
                        <ul className="hidden md:flex flex-row gap-x-20 justify-end items-center mr-8">
                        <Link to ="/explore"><div className="hover:text-[#F5F5F5] hover:scale-110 transition duration-300 ease-in-out  text-black text-xl font-medium font-jost ">EXPLORE</div></Link>
                            <Link to ="/gallery"><div className="hover:text-[#F5F5F5] hover:scale-110 transition duration-300 ease-in-out  text-black text-xl font-medium font-jost ">GALLERY</div></Link>
                            <Link to ="/events"><div className="hover:text-[#F5F5F5] hover:scale-110 transition duration-300 ease-in-out  text-black text-xl font-medium font-jost ">EVENTS</div></Link>
                            <Link to ="/chat"><div className="hover:text-[#F5F5F5] hover:scale-110 transition duration-300 ease-in-out  text-black text-xl font-medium font-jost ">CHAT</div></Link>
                            <Link to ="/aboutus"><div className="hover:text-[#F5F5F5] hover:scale-110 transition duration-300 ease-in-out  text-black text-xl font-medium font-jost ">ABOUT US</div></Link>

                        </ul>
                       
                          
                    </div>
                    </div>
                    <MobNav showMenu={showMenu} active={active}/>
        </div>
        );
    }
    
    export default Navbar;
    