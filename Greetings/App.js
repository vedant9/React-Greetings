import React from "react";
import './App.css';

function App(){
  const date= new Date();
  const hours = date.getHours();
  let time;
  let comment;

  if(hours<12 && hours>=4)
  {
    time = " morning, Vedant! Hope you have a good day ";
    comment = " Positivity is everything. Nothing can stand in your way";
  }
  else if(hours>=12 && hours <=16)
  {
    time = " afternoon, Vedant! Had lunch?";
    comment = " Keep hustling. It's your time to shine";
  }
  else if(hours>16 && hours<=22)
  {
    time = " evening, Vedant! How was your day?";
    comment = " All work done for today but it never stops. Time to unwind";
  }
  else{
    time = " night, Vedant! It's getting late...";
    comment = " Get some rest and push harder tomorrow";
  }
    return (
      <div className="App">
      <div className="clk">
        <h3>It's about {hours%12} right now!</h3>
      </div>
      <div className="P1">
        <h1>Good {time}</h1>
      </div>
      <div className="P2">
        <h2>{comment}!</h2>
      </div>
      </div>
    );
  }


export default App;
