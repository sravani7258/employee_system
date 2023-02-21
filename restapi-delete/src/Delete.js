import axios from "axios";
import {useState,useRef} from "react";
 const Delete =()=>{
     const id = useRef();
     const remove = ()=>{
        axios.delete(`https://reqres.in/api/users/${id.current.value}`).then((posRes)=>{
            console.log(posRes);
     },(errRes)=>{
        console.log(errRes);
     
        })
     }
     return(
        <>
        <input type="number" ref={id}></input>
        <button onClick={remove}>Delete</button>
        </>
     )
 }
  export default Delete;
 