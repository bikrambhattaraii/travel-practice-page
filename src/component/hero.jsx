import { Link } from 'react-router-dom';
import "./herostyles.css"
import {Destination} from "../component/destination"

 export function Hero(props){
    
return(
    <div className={props.cName}>
        <img alt="hero-image" src={props.heroImg} /> 
    
    <div className="image-text">
        <h1>{props.title}</h1>
        <p>{props.text}</p>
    <Link to="/destination" element={<Destination/>}>
        <button className="explore-button">Explore here</button>
    </Link>
    
    </div>
    </div>
)

}