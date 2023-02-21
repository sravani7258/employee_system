import {useState} from "react";
import Child from "./Child";
const Parent = ()=>{
    const [str,setStr] = useState("");
    const [num,setNum] = useState(0);
    
    const func_one = (param1,param2)=>{
        setStr(param1);
        setNum(param2);
    }
    return(
        <>
        <Child func_one={func_one}></Child>
            <h1>{str}</h1>
            <h1>{num}</h1>
        </>
    )
}
export default Parent;