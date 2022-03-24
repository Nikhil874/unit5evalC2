import "./App.css";
import { Rentals } from "./Components/Rentals/Rentals";
import { AddHouse } from "./Components/AddHouse/AddHouse";
import { useState } from "react";

function App() {
  const[toggle,setToggle]=useState(true);
  return (
    <div className="App">
     
      
      <button className="toggleForm" onClick={()=>{
        setToggle(toggle ? false : true)
      }}>
       {toggle? "Show Rentals" : "Add Houses"}

      </button>
      {toggle?   <Rentals/> :<AddHouse/>}
      <br />
    </div>
  );
}

export default App;


