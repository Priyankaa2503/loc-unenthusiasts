import React from "react";
import Navbar from "../components/Navbar";
import EventCard from "../components/cards/EventCard";
import { Link} from 'react-router-dom'

// import Event from '../assets/events.jpg'

export default function Events() {
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };
  return (
    <div>
      <Navbar />

      <div className="bg-eventsbg bg-cover bg-fixed  h-screen flex flex-col justify-start items-start p-10">
        <p className="font-jost text-white font-bold text-[100px] mt-10 p-10">
          EVENTS
        </p>
        <div className="flex flex-row gap-8 p-10 justify-center items-center">
        <button  className="bg-[#61876E] hover:bg-[#AA5656] border-2  rounded-2xl text-white font-jost py-2 px-4 mt-6 w-[300px] shadow-black shadow-lg hover:scale-110 transition duration-300 ease-in-out">INCOMING EVENTS</button>
        <button  className="bg-[#61876E] hover:bg-[#AA5656] border-2  rounded-2xl text-white font-jost py-2 px-4 mt-6 w-[300px] shadow-black shadow-lg hover:scale-110 transition duration-300 ease-in-out">OUTGOING EVENTS</button>
        </div>
        <div className="flex flex-col justify-center ">
          <EventCard />
        </div>
     
      </div>
    </div>
  );
}
