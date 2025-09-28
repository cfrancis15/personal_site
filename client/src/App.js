import React, {useEffect,useState} from "react";


function App(){
  const [backendData,setBackendData] = useState(null);
  
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

  return(
    <div>
      <h1>Firebase Test</h1>
      <button onClick={testFirebase}>Test</button>
    </div>
  )
}

export default App;

