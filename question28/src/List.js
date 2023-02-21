import {useState} from "react";
import "./List.css";
const List =()=>{
    const [str,setStr] = useState(["Angular","React","Node","MangoDb","MernStack"]);
    return(
        <>
        <h>React Table</h>
        {
            <table border={10} cellspacing={20} cellpadding={10} align={'center'}>
                <tr>
                    <th>SNO</th>
                    <th>Value</th>
                </tr>
                {
                str.map((element,index)=>{
                    return(
                        <tr>
                            <td>{index}</td>
                            <td>{element}</td>
                        </tr>
                    )
                    })
            }
            </table>
}
        </>
    )
}
export default List;