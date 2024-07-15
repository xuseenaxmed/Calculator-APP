import { useState } from "react";


function Login() {
    const [username,setname]=useState("")
    const [password,setPass]=useState("")
  return (
    <div className="login">
      <label>username</label> <br />
      <input type="text" placeholder="enter your username" onChange={(e)=>setname(e.target.value)}/> 
      <label >password</label> <br /> <br />
      <input type="password" placeholder="enter your password" onChange={(e)=>setPass(e.target.value)}/>
      <br /> <br />
      <button type="sumit">login</button>
      <h2>username:{username}</h2>
      <h2>username:{password}</h2>
    </div>
  );
};

export default Login
