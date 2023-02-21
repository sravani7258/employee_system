import axios from "axios";
import {useEffect,useState} from "react";
const File = ()=>{
    const [arr,setArr] = useState([]);
    
    useEffect(()=>{
        axios.get(`https://reqres.in/api/users?page=2`).then((posRes)=>{
                const {data:x} =posRes;
                const {data} =x;
                setArr(data);
            
                
    },(errRes)=>{
        console.log(errRes);

    })     
},[]);
            return(
                <>
                <table border={1}
                cellspacing={15}
                cellPadding={15}
                align="center">
                    <tr>
                        <th>ID</th>
                        <th>EMAIL</th>
                        <th>FIRST_NAME</th>
                        <th>LAST_NAME</th>
                        <th>AVATAR</th>
                    </tr>
                    {arr.map((element,index)=>{
                        return(
                            <tr key={index}>
                                <td>{element.id}</td>
                                <td>{element.email}</td>
                                <td>{element.first_name}</td>
                                <td>{element.last_name}</td>
                                <td><img src={element.avatar}></img></td>

                            </tr>
                        )
                    })}
                    
                </table>
                </>
                
            )

}
 export default File;
