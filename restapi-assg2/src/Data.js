import axios from "axios";
import {useEffect,useState} from "react";
const Data=()=>{

    const [data,setData] = useState([]);
    useEffect(()=>{
        axios.get(`http://01angularbackend-env.eba-stukssg8.ap-northeast-1.elasticbeanstalk.com/products/111`).then((posRes)=>{
                const {data} = posRes;
            setData(data);
        },(errRes)=>{
            console.log(errRes);
       });

    },[]);
    return(
        <>
        <h4>{JSON.stringify(data)}</h4>
        
        </>
    )

            }
    export default Data;