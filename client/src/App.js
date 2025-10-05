import React from 'react';
import {Routes, Route} from "react-router-dom";


import Navbar from "./components/Navbar";
import Home from "./components/Home"
import Philosophy from "./components/Philosophy"
import Adventures from "./components/Adventures"



//testing database function by calling backend
/*
const testFirebase=async () =>{
  try{
  const response = await fetch('http://localhost:5000/test-firebase',{
    method:'POST'
  });

  const data = await response.json();
  setBackendData(data);
  console.log("DONEZO",data)}
  catch (error){
    console.error("Error",error)
  };
}
*/

function App(){

   return(
    <div>
    <Navbar/>
    <Routes>
      <Route path="/" element={<Home/>}></Route>
      <Route path="/reading-room" element={<Philosophy/>}></Route>
      <Route path="/adventures" element={<Adventures/>}></Route>
      
    </Routes>



    </div>

)

  
  
}

export default App;





