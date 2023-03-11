import React from 'react'
import Header from '../components/Header'
import { Banner } from '../components/Banner'
import { Explore } from '../components/Explore'
export default function Home() {
  return (
    <div>
        <Header/>
        <div className='flex justify-center'><Banner/></div>
        <div className='flex justify-center'><Explore/></div>
    </div>
  )
}
