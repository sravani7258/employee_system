import axios from "axios";
import {useEffect,useState} from "react";
import './Demo.css';
const Demo =()=>{
    const [arr,setArr] = useState([]);
    useEffect(()=>{
        axios.get(`https://www.7timer.info/bin/astro.php?lon=113.2&ac=0&unit=metric&output=json&tzshift=0`).then((posRes)=>{
             const {data} = posRes;
             const {dataseries} =data;
                 
             setArr(dataseries);
    },(errRes)=>{
        console.log(errRes);
        });
    },[]);
return(
    <>
     <h5 style={{color:"red"}}>{JSON.stringify(arr)}</h5> 
    <table border={10}
          cellPadding={10}
          cellspacing={10}
          align="center">
            <tr>
                <th>TimePoint</th>
                <th>CloudCover</th>
                <th>Seeing</th>
                <th>Transperency</th>
                <th>Lifted_index</th>
                <th>rh2m</th>
                <th colspan={2}>wind10m<br></br>direction-speed</th>
                <th>temp2m</th>
                <th>Prec_type</th>
            </tr>
            {
            arr.map((element,index)=>{
                return(
                    <tr key={index}>
                        <td>{element.timepoint}</td>
                        <td>{element.cloudcover}</td>
                        <td>{element.seeing}</td>
                        <td>{element.transparency}</td>
                        <td>{element.lifted_index}</td>
                        <td>{element.rh2m}</td>
                        <td>{(element.wind10m.direction)}</td>
                        <td>{(element.wind10m.speed)}</td>
                        <td>{element.temp2m}</td>
                        <td>{element.prec_type}</td>
                        
                    </tr>
                )
            })}
          </table>
    </>
)
        }      
export default Demo;
