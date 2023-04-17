import "./destinationstyles.css";
import { Component } from "react";

export function DestinationData (props){



return(
<>
<div className={props.className}>
    <div className="des-text">
        
    <h2>{props.heading}</h2>
    <p>{props.text}</p>
    </div>
    <div className="image">
        <img src="https://unsplash.com/photos/DXuxHw3S5ak" alt="img"  />
        <img src="https://unsplash.com/photos/DXuxHw3S5ak" alt="img" />
    </div>
   </div>
</>
)

}