import {useState} from "react";
import "./Array.css";
const Array =()=>{
    const [str,setStr] =useState([{"p_id":111,"p_name":"p_one","p_cost":10000},
                             {"p_id":111,"p_name":"p_one","p_cost":20000},
                             {"p_id":111,"p_name":"p_one","p_cost":30000},
                             {"p_id":111,"p_name":"p_one","p_cost":40000},
                             {"p_id":111,"p_name":"p_one","p_cost":50000}]);
return(
    <>
    {
    <table border={10} cellspacing={20} align={'center'} cellpadding={20}>
        <tr>
            <th>p_id</th>
             <th>p_name</th>
             <th>p_cost</th>
        </tr>
        {
            str.map((element,index)=>{       
                    return(
                <tr>
                    <td>{element.p_id}</td>
                    <td>{element.p_name}</td>
                    <td>{element.p_cost}</td>
                </tr>)})
        }
    </table>
    }
    </>
)
}
export default Array;