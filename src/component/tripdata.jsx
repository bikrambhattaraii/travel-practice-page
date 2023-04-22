import "./tripstyles.css"
export function Cards(props){
        return(
            <>
            <div className="t-card">
               <div className="t-image">
                <img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.YBxdbgTHdP5hjspw1j__gQHaE7%26pid%3DApi&f=1&ipt=c54362fb7ed974b29594d3623dd3fa977037c9ef0abaad67ac16452a85f05098&ipo=images" alt=""></img>
                </div> 
                <h4>{props.heading}</h4>
                <p>{props.text}</p>
            </div>
            </>
        )


}