import {Link,Outlet} from "react-router-dom";
const Pagethree = ()=>{
    return(
        <>
        <h1>pagethree!!!</h1>
        <Link to="pagethree/Child_five" style={{marginRight:100}}>Child5</Link>
        <Link to="pagethree/Child_six">Child6</Link>
        <br></br>
        <Outlet></Outlet>
        
        </>
    )
}
export default Pagethree;