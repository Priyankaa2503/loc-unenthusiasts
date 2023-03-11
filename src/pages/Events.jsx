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
        
        <div className="flex flex-col justify-center ">
          <EventCard />
        </div>
     
      </div>
    </div>
  );
}
