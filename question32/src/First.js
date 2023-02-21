import {useState} from "react";
const First =()=>{
    const [flag,setFlag]=useState(true);
    const func_one=()=>{
        setFlag(flag=>!flag)
    }
        return(
            <>
        {

        flag ? <h1> WELCOME TO CONDITIONAL RENDERING</h1> : <h1></h1>

        }
            <button onClick={func_one}>Show/Hide</button>
            </>
        )
    }
export default First;
    
