import "./tripstyles.css"
import {Cards} from "./tripdata"

export function Trip(){
    
return(
    <>
    <div className="trip-container">
        <h1>recent Trips</h1>
        <p>you can discover unique destination</p>
    <div className="tripcard">
        <Cards
        
    heading="trips in sindhupalchowk"
    text="Sindhupalchowk is a district located in the Bagmati Province of Nepal. It is a beautiful place with a unique blend of natural beauty, cultural diversity, and historical significance. If you are planning a trip to Sindhupalchowk, here are some things you can do and places you can visit:"
        />
        <Cards
        heading="bhojpur"
        text="The Mundhum Trail in Bhojpur is a trekking trail located in the eastern region of Nepal. It is named after the Mundhum, which is the scripture of the Kirat community, the indigenous people of the region.

        The Mundhum Trail offers a unique trekking experience that combines natural beauty with cultural immersion. The trail passes through remote villages where you can experience the daily life of the local people and learn about their culture and traditions. You will also encounter stunning views of the Himalayan mountain range and explore pristine forests, rivers, and waterfalls."
        />
        <Cards
        heading="bhedetar"
        text="Bhedetar is a popular tourist destination located in the Dhankuta district of eastern Nepal. It is a hill station situated at an altitude of around 1,420 meters above sea level, and it offers beautiful panoramic views of the surrounding mountains and valleys."
        />
    </div>
    </div>
</>
)}