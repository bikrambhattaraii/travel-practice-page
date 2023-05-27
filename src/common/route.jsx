import { BrowserRouter,Route, Routes } from "react-router-dom";
import {Home} from "../routes/home"
import {About} from "../routes/about"
import {Service} from "../routes/service"
import { Footer } from "../component/footer";
import {Navbar} from "../component/navbar/navbar"
export function Rout(){
    return(
        <>
      <BrowserRouter>
      <Navbar></Navbar>
      
        <Route path="/" element={<Home></Home>}> </Route>
      <Route path="/home" element={<Home></Home>}></Route>
      <Route path="/about" element={<About></About>}></Route>
      <Route path="/contact" element={<About></About>}></Route>
      <Route path="/service" element={<Service></Service>}></Route>
      
    <Footer/>
      </BrowserRouter>  
        </>
    )
}