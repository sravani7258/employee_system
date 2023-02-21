import {useState} from "react";
import "./Employee.css";
const  Employees=()=>{
    const [employee,setEmployee]=useState([{"e_id":"102","e_name":"Sravani","e_salary":"30000"},
                                        {"e_id":"103","e_name":"Saraswathi","e_salary":"70000"},
                                        {"e_id":"102","e_name":"Sthyanarayana","e_salary":"90000"},
                                        {"e_id":"102","e_name":"Sathya","e_salary":"650000"},
                                        {"e_id":"102","e_name":"laxmi","e_salary":"300000"}]
                );
 const [product,setProduct]=useState([{"p_id":"102","p_name":"RiceCooker","p_price":"30000"},
 {"p_id":"103","p_name":"Ac","p_price":"70000"},
 {"p_id":"102","p_name":"GYSER","p_price":"9000"},
 {"p_id":"102","p_name":"WASHINGMACHINE","p_price":"450000"},
 {"p_id":"102","p_name":"INVERTER","p_price":"300000"}]
 );

const [flag,setFlag]=useState(true);
const func_one=()=>{
    setFlag(flag=>!flag);
}
 return(
    <>
    {
    flag ?(
    <table border={1}>
        <tr>
        <th>e_id</th>
        <th>e_name</th>
        <th>e_salary</th>
        </tr>
        {
            employee.map((element,index)=>{
                return(
                    <tr key={index}>
                        <td>{element.e_id}</td>
                        <td>{element.e_name}</td>
                        <td>{element.e_salary}</td>
                    </tr>
                )
            })
        }
    </table>)
    :(
    <table border={1}>
        <tr>
        <th>p_id</th>
        <th>p_name</th>
        <th>p_price</th>
        </tr>
        {
            product.map((element,index)=>{
                return(
                    <tr key={index}>
                        <td>{element.p_id}</td>
                        <td>{element.p_name}</td>
                        <td>{element.p_price}</td>
                    </tr>
                )
            })
        }
    </table>)
    }
    <button onClick={func_one}>Change</button>
    </>
 )
}
export default Employees;
