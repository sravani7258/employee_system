import Child1 from "./Child1";
import Child2 from "./Child2";
import Child3 from "./Child3";
 const Parent = ()=>{
    return(

        <>
        <h1>parent component extract the data from child components</h1>
        <Child1></Child1>
        <Child2></Child2>
        <Child3></Child3>
        </>
    )
 }
 export default Parent;