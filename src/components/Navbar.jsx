import React,{useState,useEffect} from "react";
import MobNav from "./MobNav";
import MenuTwoToneIcon from '@mui/icons-material/MenuTwoTone';
import { Link } from "react-router-dom";

function Navbar() {
    const[active,setActive]=useState(false)
    const[activeLink,setActiveLink]=useState('home');
    const[scrolled, seScrolled]=useState(false);
    useEffect(() => {
        const onScroll = () =>{
            if(window.scrollY>50){
                seScrolled(true);
            }else{
                seScrolled(false);
            }
        }
        window.addEventListener("scroll",onScroll);
        return() => window.removeEventListener("scroll",onScroll);
    }, [])
    const showMenu = ()=>
    {
        setActive(!active)
    }
    return (

        <div className="bg-gradient-to-r from-[#222222] to-[#161616] min-w-full max-w-max" id="navbar">
    
           <div className="h-[100px] w-[100px] top-10 right-2.5 p-8 scale-150 md:hidden ">
                        <MenuTwoToneIcon  style={{ color: "#F5F5F5" }} onClick={showMenu}/>
                    </div>
                    <div className="flex flex-row justify-between">
                    <div className="flex flex-row justify-center items-center gap-5 p-10">
                            <div className="bg-[#007ced] text-white rounded-full h-12 w-12 flex justify-center items-center">
                                <p className="font-bold text-4xl">P</p>
                            </div>
                            <div className=" text-white h-16 w-16 ">
                                <p className=" font-semibold mt-4 font-roguescript text-4xl">Priyanka</p>
                            </div>
                    </div>               
                    <div className="flex flex-row justify-end p-12">
                   
                        <ul className="hidden md:flex flex-row gap-x-20 justify-end items-center mr-8">
                            <Link to ="/aboutme"><li className="hover:text-[#F5F5F5] hover:scale-110 transition duration-300 ease-in-out  text-[#D5D5D5] text-xl font-medium font-jost ">aboutme</li></Link>
                            <Link to ="/resume"><li className="hover:text-[#F5F5F5] hover:scale-110 transition duration-300 ease-in-out  text-[#D5D5D5] text-xl font-medium font-jost ">resume</li></Link>
                            <Link to ="/projects"><li className="hover:text-[#F5F5F5] hover:scale-110 transition duration-300 ease-in-out  text-[#D5D5D5] text-xl font-medium font-jost ">projects</li></Link>
                            <Link to ="/contact"><li className="hover:text-[#F5F5F5] hover:scale-110 transition duration-300 ease-in-out  text-[#D5D5D5] text-xl font-medium font-jost ">contact</li></Link>

                        </ul>
                       
                          
                    </div>
                    </div>
                    <MobNav showMenu={showMenu} active={active}/>
                   
        </div>
        );
    }
    
    export default Navbar;
    