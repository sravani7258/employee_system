import {Link,Outlet} from "react-router-dom";
const Pagetwo =()=>{
    return(
        <>
        <h1>pagetwo!!!</h1>
        <Link to="pagetwo/Child_three" style={{marginRight:100}}>Child3</Link>
        <Link to="pagetwo/Child_four">Child4</Link>
        <br></br>
        <Outlet></Outlet>
        </>
    )
}
export default Pagetwo;