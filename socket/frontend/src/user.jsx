import { useState } from "react";

function User({socket}) {
    const [user,setuser]=useState('');
    function onsubmituser(e){
        e.preventDefault();
        console.log(`sending user data to server`);
        
        socket.emit('user',user);
        setuser('');
    }
    return ( <form onSubmit={onsubmituser}>
        <input type="text" value={user} onChange={(e)=>setuser(e.target.value)} />
        <button type="submit" >submit</button>
    </form> );
}

export default User;