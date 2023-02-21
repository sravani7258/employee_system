import {useState} from "react";
import "./Comp2.css";

const Str = ()=>{
     const [arr,setArr] = useState([10,20,30,40,50]);
     const [arr1,setArr1] = useState([`hello_1`,`hello_2`,`hello_3`,`hello_4`,`hello_5`]);
     const [arr2,setArr2]  = useState([100,200,300,400,500]);
     const [arr3,setArr3]  = useState([`frontend`,`backend`,`database`]);
    const [arr4,setArr4] = useState([100,"hello",200,"welcome"]);


return(
    <>
    {
        arr.map((element,index)=>{
            return(
                <h1 key={index}>{element}.......{index}</h1>
            )
        })
    }
       
       {
        arr1.map((element,index)=>{
            return(
                <h1 key={index}>{element}.......{index}</h1>

            )
        })
    }
       {
        arr2.map((element,index)=>{
            return(
            <h1 key1={index}>{element}...{index}</h1>
            )

            
        })
       }
  
        {
            arr2.map((element,index)=>{
                return(
                    <h2 key={index}>{element}...{index}</h2>
                )
            })
        }
      {
        arr3.map((element,index)=>{
            return(
                <h3 key={index}>{element}...{index}</h3>
            )
        })
      }
                {
                    arr4.map((element,index)=>{
                        return(
                            <h4 key={index}>{element}...{index}</h4>
                        )
                    })
                }

    </>
)       
}
export default Str;