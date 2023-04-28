import {React} from "react"
import Star from "@material-ui/icons/Star"
import Image12 from "./assets/Airbnb/image 12.png"
import Wedding from "./assets/Airbnb/wedding-photography 1.png"
import Biking from "./assets/Airbnb/mountain-bike 1.png"




 export const Footer = ()=>{
    return(
        <div className="footer">
         <div className="lesson--div">
            <h3>SOLD OUT</h3>
            <img src={Image12} />
            <div className="star">
            <span className="span-star"><Star/></span>
            <span className="span">5.0</span> 
            <span>(6).</span> 
            <span>USA</span>
            </div>
            <p>Life lessons with katie Zaferes</p>
            <p className="p-span"><span>From $136</span>/person</p>
         </div>
         <div className="wedding--div">
            <h3>ONLINE</h3>
            <img src={Wedding} />
            <div className="star">
            <span className="span-star"><Star/></span>
            <span className="span">5.0</span> 
            <span>(30).</span> 
            <span>USA</span>
            </div>
            <p>Learn wedding photography </p>
            <p className="p-span"><span>From $125</span>/person</p>
         </div>
         <div className="biking--div">
            <img src={Biking} />
            <div className="star">
            <span className="span-star3"><Star/></span>
            <span className="span">4.8</span> 
            <span>(2).</span> 
            <span>USA</span>
            </div>
            <p>Group Mountain Biking</p>
            <p className="p-span"><span>From $50</span>/person</p>
         </div>
        
        </div>
    )
}