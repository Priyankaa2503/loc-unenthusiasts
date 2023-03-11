import React from 'react'
import ProfilePic from '../assets/profile.png'
import { Link} from 'react-router-dom'
import Navbar from '../components/Navbar'
import {ProfileBG } from '../assets/profileBg.jpeg'
import { Post } from '../components/cards/Post'
export const Profile=()=>{
    return(
        <div>
            <Navbar/>
            <div className="flex flex-row bg-profileBg p-48 h-screen w-screen bg-cover bg-no-repeat">
                <div className="flex flex-col h-[100%] w-[60%] p-6 justify-center">
                    <div className='flex flex-col'>
                        <img src={ProfilePic}className="h-[200px] w-[200px]"/>
                        <button  className="bg-[#61876E] hover:bg-[#AA5656] border-2  rounded-2xl text-white w-[250px] font-jost py-2 px-4 mt-12 shadow-black shadow-lg hover:scale-110 transition duration-300 ease-in-out"><Link to="#gallery">View Gallery</Link></button>
                    </div>
                </div>
                <div className="flex flex-col h-[100%] bg-[#00000050] w-[60%] p-8">
                    <div className='flex flex-row h-[20px] w-100%'>
                        <div className='mr-16 text-2xl font-bold text-white'>Name</div>
                        <div className='text-2xl font-bold text-white'>Username</div>
                    </div>
                    <div className='flex flex-row h-[20px] w-100% mt-12'>
                        <div className='mr-16 text-2xl font-bold text-white'>E-mail</div>
                        <div className='text-2xl font-bold text-white'>email@gmail.com</div>
                    </div>
                    <div className='flex flex-row h-[20px] w-100% mt-12'>
                        <div className='mr-16 text-2xl font-bold text-white'>type</div>
                        <input type='text' className='h-8'></input>
                    </div>
                    <div className='flex flex-row h-[20px] w-100% mt-12'>
                        <div className='mr-16 text-2xl font-bold text-white'>type</div>
                        <input type='text' className='h-8'></input>
                    </div>
                </div>
            </div>  
            <div className="h-screen flex flex-col justify-start items-start p-10" id="gallery">
                <p className="font-jost text-white font-bold text-[100px] mt-10 p-10">My Gallery</p>
                <div className="flex flex-col justify-center ">
                    {/* <Post/>
                    <Post/>
                    <Post/> */}
                </div>
            </div>
        </div>
        
    )
}