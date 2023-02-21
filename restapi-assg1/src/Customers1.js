import axios from "axios";
import {useEffect,useState} from "react";
const Customers1 =()=>{
    const [arr,setArr] = useState([]);
    useEffect(()=>{
    axios.get(`http://01angularbackend-env.eba-stukssg8.ap-northeast-1.elasticbeanstalk.com/products`).then((posRes)=>{
        const {data}= posRes;
        setArr(data);
    },(errRes)=>{
        console.log(errRes);
    });
},[]);
        return(
            <>
            <table border={10}
             cellspacing={10}
             cellpadding={10}
             align="center">
                <tr>
                    <th>p_id</th>
                    <th>p_name</th>
                    <th>p_cost</th>
                </tr>
                {arr.map((element,index)=>{
                    return(
                        <tr>
                            <td>{element.p_id}</td>
                            <td>{element.p_name}</td>
                            <td>{element.p_cost}</td>
                        </tr>
                    )
                })}
               
                
             </table>
            </>
        )

}
export default Customers1;