import { DestinationData } from "./destinationdata";
import "./destinationstyles.css";
import Destination2 from "../assests/destination (2).jpg";
import Destination1 from "../assests/destination (1).jpg";

export function Destination (){



return(
    <>
    <div className="destination">
        <h1>Popular destination</h1>
        <p>Tour gives you the oppurtunity to travel the world</p>
  
   </div>
<DestinationData className="first-des" heading="Paris, France"
text="The city of love, Paris is known for its beautiful architecture, world-class museums like the Louvre and Musée d'Orsay, iconic landmarks like the Eiffel Tower and Notre Dame Cathedral, and romantic atmosphere. Visitors can enjoy strolling along the Seine River, shopping on the Champs-Élysées, and dining on French cuisine in quaint bistros." 
image1={Destination1}
/>

<DestinationData className="first-des-reverse" heading="Rio, brazil"
text="The city of love, Paris is known for its beautiful architecture, world-class museums like the Louvre and Musée d'Orsay, iconic landmarks like the Eiffel Tower and Notre Dame Cathedral, and romantic atmosphere. Visitors can enjoy strolling along the Seine River, shopping on the Champs-Élysées, and dining on French cuisine in quaint bistros."
image2={Destination2} />
</>
)

}