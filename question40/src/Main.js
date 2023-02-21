import { Link,Route, Routes} from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Portfolio from "./Portfolio";
const Sravani = ()=>{
    return(
        <>
        <Link to="/Home" style={{marginRight:100}}>Home</Link>
        <Link to="/About" style={{marginRight:100}}>About</Link>

        <Link to="/Portfolio">Protofolio</Link>

        <Routes>
                <Route path="/Home" element={<Home></Home>}></Route>
                <Route path="/About" element={<About></About>}></Route>
                <Route path="/Portfolio" element={<Portfolio></Portfolio>}></Route>
        </Routes>
        </>
    )
}
export default Sravani;