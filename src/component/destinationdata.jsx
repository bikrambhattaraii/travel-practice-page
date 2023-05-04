import "./destinationstyles.css";
export function DestinationData (props){
return(
<>
<div className={props.className}>
    <div className="des-text">
        
    <h2>{props.heading}</h2>
    <p>{props.text}</p>
    </div>
    <div className="image">
        <img src={props.image1} alt="img"  />
        <img src={props.image2} alt="img" />
    </div>
   </div>
</>
)

}