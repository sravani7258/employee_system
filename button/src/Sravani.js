import {useState} from "react";
const Sravani = ()=>{
    const [str,setStr] = useState(`React`);
    const func_one = ()=>{
        setStr(`React18.x`);
    
    };
     const func_two=(param1)=>{
        setStr(param1);
     }
    return(
         <>
         <h1>{str}</h1>
         <button onClick={func_one}>Button1</button>
         <button onClick={()=>func_two(`Angular14`)}>Button2</button>
         </>
    )
}

export default Sravani;