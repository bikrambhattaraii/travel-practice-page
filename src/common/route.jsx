import { BrowserRouter,Route, Routes } from "react-router-dom";
import {Home} from "../routes/home"
import {About} from "../routes/about"
import {Service} from "../routes/service"
export function Rout(){
    return(
        <>
      <BrowserRouter>
      
      <Routes>
        <Route path="/" element={<Home></Home>}> </Route>
      <Route path="/home" element={<Home></Home>}></Route>
      <Route path="/about" element={<About></About>}></Route>
      <Route path="/contact" element={<About></About>}></Route>
      <Route path="/service" element={<Service></Service>}></Route>
      </Routes>
      </BrowserRouter>  
        </>
    )
}