import React from "react";
import { Link} from 'react-router-dom'


export default function Home() {
  return (
    <div className="bg-bghome h-screen">
      <div className="flex flex-col justify-center items-center gap-32 h-screen ">
        <span className="text-white text-5xl font-jost">PHOTOGRAPHY</span>
        <button  className="bg-[#61876E] hover:bg-[#AA5656] border-2  rounded-2xl text-white font-jost py-2 px-4 mt-6 w-[300px] shadow-black shadow-lg hover:scale-110 transition duration-300 ease-in-out"><Link to="/signup">GET STARTED</Link></button>
      </div>
    </div>
  );
}
