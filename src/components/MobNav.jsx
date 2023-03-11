import React from "react";
import CloseTwoToneIcon from '@mui/icons-material/CloseTwoTone';
import { Link } from "react-router-dom";
const MobNav = ({showMenu,active}) =>
{
  
    return(
    
    <div className={active ? 'absolute flex flex-col items-end inset-4 gap-6 md:hidden':'hidden'}>
         <CloseTwoToneIcon  style={{ color: "#F5F5F5" }} onClick={showMenu} className='h-[30px] w-[30px] mt-4 scale-150 cursor-pointer'/>
      
                            <Link to ="/aboutme"><div className="hover:text-[#F5F5F5] hover:scale-110 transition duration-300 ease-in-out  text-[#D5D5D5] text-xl font-medium font-jost ">aboutme</div></Link>
                            <Link to ="/resume"><div className="hover:text-[#F5F5F5] hover:scale-110 transition duration-300 ease-in-out  text-[#D5D5D5] text-xl font-medium font-jost ">resume</div></Link>
                            <Link to ="/projects"><div className="hover:text-[#F5F5F5] hover:scale-110 transition duration-300 ease-in-out  text-[#D5D5D5] text-xl font-medium font-jost ">projects</div></Link>
                            <Link to ="/contact"><div className="hover:text-[#F5F5F5] hover:scale-110 transition duration-300 ease-in-out  text-[#D5D5D5] text-xl font-medium font-jost ">contact</div></Link>

                       
    </div>
 
    );
};
export default MobNav;


