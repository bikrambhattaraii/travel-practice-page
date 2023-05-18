

import "./herostyles.css"

 export function Hero(props){
    
return(
    <div className={props.cName}>
        <img alt="hero-image" src={props.heroImg} /> 
    
    <div className="image-text">
        <h1>{props.title}</h1>
        <p>{props.text}</p>

        <a href={props.url} className={props.btnClass}>{props.buttonText}</a>
    </div>
    </div>
)

}