import axios from "axios";
import {useRef,useState} from "react";
const Post = ()=>{
    const uemail =useRef();
    const upwd = useRef();
    const [token,setToken]= useState("");
    const login =()=>{
     axios.post(`https://reqres.in/api/login`,{'email':uemail.current.value,'password':upwd.current.value}).then((posRes)=>{
        const {data} = posRes;
        const {token} = data;
        setToken(token);

      },(errRes)=>{
    console.log(errRes);
});
    }
  return(
    <>
    
    <fieldset>
        <legend>LOGIN</legend>
        <label>Email</label>
        <input type="email" ref={uemail}></input>
        <br></br>
        <br></br>
        <label>Password</label>
        <input type="password" ref={upwd}></input>
        <br></br>
        <button onClick={login}>Login</button>
        <h1>{token}</h1>
    
      
    </fieldset>
    
    </>
  )
  }

 export default Post;












































































































































































































































    
