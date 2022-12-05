import React,{useState} from 'react'
const App=()=>
{
  let time=new Date().toLocaleTimeString()
  const[ctime,setCtime]=useState(time)
  const UpdateTime =()=>
  {
    time=new Date().toLocaleTimeString();
    setCtime(time);
  }
  
  setInterval(UpdateTime,1000)
  return(
    <div>
      <center>
      <h1>{ctime}</h1>
  
  </center>
    </div>

  )
}
export default App