import {Link,Outlet} from "react-router-dom";
const Pageone =()=>{
    return(
        <>
        <h1>pageone!!!</h1>
        <Link to="pageone/Child_one" style={{marginRight:100}}>Child1</Link>
        <Link to="pageone/Child_two">Child2</Link>
        <br></br>
        <Outlet></Outlet>
        </>
    )
}
export default Pageone;