import {useState} from "react";
import "./Bhanu1.css";
const  Sravani = ()=>{
        const [str,setStr] = useState(`Hello`);
        const [num,setNum] = useState(100);
        const [bool,setBool] = useState(true);
        const [obj,setObj] = useState({"name1":"Sravani","name2":"Bhanu","name3":"Sathya"});

        return(
            <>
            <h1>{str}</h1>
            <h1 className="class-ss">{num}</h1>
            <h1 id="id-cs">{JSON.stringify(bool)}</h1>
            <p>{obj.name1}......{obj.name2}.....{obj.name3}</p>
            </>
        )

        
    
}
export default Sravani;
