import {useState} from "react";
import Child from './Child';
const Sravani =()=>{
    const [str,setStr] =useState("");
        const func_one =(param1)=>{
            setStr(param1);
        }
        return(
            <>
            <Child func_one={func_one}></Child>
            <h1>{str}</h1>
            </>
        )
    }
    

export default Sravani;