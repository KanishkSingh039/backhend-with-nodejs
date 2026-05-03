import {io} from "socket.io-client";
import { useRef } from "react";
import { useState } from "react";
import { useEffect } from "react";
import User from "./user";
const socket=io('http://localhost:3000');
function App() {
  const chatbox=useRef();
  const [massege,setmassege]=useState('');
  const [massegebox,setmassegebox]=useState([]);
  const [users,setusers]=useState([]);
  const[currentuser,setcurrentuser]=useState(''); 
  useEffect(()=>{
    socket.on('currentuser',(data)=>{
      setusers((prev) => {
    if (prev.includes(data)) return prev;
    return [...prev, data];
  });
  setcurrentuser(data);
    })
    socket.on('massegebox',(mess)=>{
      setmassegebox((prev)=>[...prev,mess]);
    });
    
    
    return ()=>{socket.off("massegebox")
      socket.off("currentuser");
    };
  },[]);
  function onsubmit(e) {
    e.preventDefault();
    console.log(massegebox);
    socket.emit('massege',{
        massege:massege,
        user:currentuser
      
    });
  }
  return ( 
    <div>
      <div>{massegebox.map((msg,i)=>{
        return(<ul key={i}>
          <li style={{listStyle:"none"}}><p style={{display:"inline-block"}}>{msg.user}:</p> <p style={{display:"inline-block"}}>{msg.massege}</p></li>
        </ul>)
      })}</div>
      <form action={onsubmit}>
        <input type="text" 
        value={massege}
        onChange={(e)=>setmassege(e.target.value)}
        
        />
        <button onClick={(e)=>onsubmit(e)}>submit</button>
      </form>
      <User socket={socket}/>
  </div> 
);
}

export default App;