import axios from "axios";
import {useState,useRef} from "react";
const Put = ()=>{
    const [res,setRes] = useState({});
    const name = useRef();
    const job = useRef();
    const update = ()=>{
    axios.put(`https://reqres.in/api/users/2`,{'name':name.current.value,'job':job.current.value}).then((posRes)=>{
        const {data} = posRes;
        setRes(data);
},(errRes)=>{
            console.log(errRes);
    });
}
  return(
    <>
    <input type="text" ref={name}></input>
    <br></br><br></br>
    <input type="text" ref={job}></input>
    <br></br><br></br>
    <button onClick={update}>Update</button>
    <p>{JSON.stringify(res)}</p>
    </>
  )
}
export default Put;