import axios from "axios";
import {useEffect,useState} from "react";
const Customers = ()=>{
    const [arr,setArr]=useState([]);
    useEffect(()=>{
        axios.get(`https://www.w3schools.com/angular/customers.php`).then((posRes)=>{
             const {data} = posRes;
             const {records}= data;
             setArr(records);
                },(errRes)=>{
        console.log(errRes);
        });

    },[]);
        return(
            <>
            <table border={1} cellPadding={10} cellSpacing={10} align="center">
                <tr>
                    <th>Name</th>
                    <th>City</th>
                    <th>Country</th>
                </tr>
                {
                    arr.map((element,index)=>{
                        return(
                            <tr key={index}>
                                <td>{element.Name}</td>
                                <td>{element.City}</td>
                                <td>{element.Country}</td>
                            </tr>
                        )
                    })
                }
            </table>
            </>
        )
}
        export default Customers;