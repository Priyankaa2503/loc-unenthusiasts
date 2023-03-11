import React from 'react'
import Navbar from '../components/Navbar'
import { Banner } from '../components/Banner'
import { Explore } from '../components/Explore'
export default function Home() {
  return (
    <div>
        <Navbar/>
        <div className='flex justify-center'><Banner/></div>
        <div className='flex justify-center'><Explore/></div>
    </div>
  )
}
