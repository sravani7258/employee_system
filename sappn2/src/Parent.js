import {Link,Routes,Route} from "react-router-dom";
import Pageone from "./Pageone";
import Pagetwo from "./Pagetwo";
import Pagethree from "./Pagethree";
import Child1 from "./Child1";
import Child2 from "./Child2";
import Child3 from "./Child3";
import Child4 from "./Child4";
import Child5 from "./Child5";
import Child6 from "./Child6";
const Parent =()=>{
  return(
    <>
    <Link to="/pageone" Style={{marginRight:100}}>pageone</Link>
    <Link to="/pagetwo" Style={{marginRight:100}}>pagetwo</Link>
    <Link to="/pagethree">Pagethree</Link>
    <br></br>
    <Routes>
        <Route path="/pageone" element={<Pageone></Pageone>}>
        <Route path="pageone/Child_one" element={<Child1></Child1>}></Route>
        <Route path="pageone/Child_two" element={<Child2></Child2>}></Route>
        </Route>

        <Route path="/pagetwo" element={<Pagetwo></Pagetwo>}>
        <Route path="pagetwo/Child_three" element={<Child3></Child3>}></Route>
        <Route path="pagetwo/Child_four" element={<Child4></Child4>}></Route>
        </Route>

        <Route path="/pagethree" element={<Pagethree></Pagethree>}>
        <Route path="pagethree/Child_five" element={<Child5></Child5>}></Route>
        <Route path="pagethree/Child_six" element={<Child6></Child6>}></Route>
        </Route>
        
        </Routes>
    </>
  )
}
export default Parent;

