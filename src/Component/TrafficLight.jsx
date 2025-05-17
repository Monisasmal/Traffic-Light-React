import React, { useState, useEffect } from "react";
import "../Component/TrafficLight.css";

const TrafficLight = () => {

const[lights,setlights] = useState("red");

 useEffect(() => {
  const interval = setInterval(() => {
   setlights(prev => {
    if(prev === 'red') return 'green';
    if(prev === 'green') return 'yellow';
    return 'red';
   })
  },2000);
  return () => clearInterval(interval);
},[])

  return(
    <div className="container">
      <div className="traffic-light">
        <div className={`light red ${lights === 'red' ? 'active' : ''}`}></div>
        <div className={`light green ${lights === 'green' ? 'active' : ''}`}></div>
        <div className={`light yellow ${lights === 'yellow' ? 'active' : ''}`}></div>
      </div>
    </div>
  )
}
export default TrafficLight;