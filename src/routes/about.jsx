import { Footer } from "../component/footer";
import {AboutUS} from "../component/aboutus"
import { Navbar } from "../component/navbar/navbar";
import { Hero } from "../component/hero";
function About(){
    return(
        <>
        <Navbar></Navbar>

       <Hero ></Hero>
       <AboutUS></AboutUS>
      <Footer></Footer> 
       </>
    )
}
export default About;