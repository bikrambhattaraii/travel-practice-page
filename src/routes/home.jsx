import {Navbar} from "../component/navbar/navbar";
import {Hero} from "../component/hero"
import React from "react";
import { Destination } from "../component/destination";
import { Trip } from "../component/trip";
import {Footer} from "../component/footer"
import { AboutUs } from "../component/aboutus";
import {Scrolltotop} from "../component/scrolltotop/scrolltotop"
export function Home(){
    return(
        <>
        <Navbar />

        <Hero  
        cName="hero-image" 
        heroImg="https://images3.alphacoders.com/165/thumb-1920-165265.jpg"
        title="Your journey starts from here"
        text="Choose your favourite destination"
        buttonText="Travel plan"
        url="/"
        btnClass="show"
        />
       <Destination></Destination>
       <Trip></Trip>
       <AboutUs />
       <Scrolltotop />
       <Footer></Footer>
        </>

    )
}
