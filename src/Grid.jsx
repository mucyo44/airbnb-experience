 import {React}from "react"
 import Grid1 from "./assets/Airbnb/image 28.png"
 import Grid2 from "./assets/Airbnb/image 30.png"
 import Grid3 from "./assets/Airbnb/image 26.png"
 import Grid4 from "./assets/Airbnb/image 27.png"
 import Grid5 from "./assets/Airbnb/image 29.png"
 import Grid6 from "./assets/Airbnb/image 22.png"
 import Grid7 from "./assets/Airbnb/image 23.png"
 import Grid8 from "./assets/Airbnb/image 25.png"
 import Grid9 from "./assets/Airbnb/image 24.png"


   export const Grid = ()=>{

    return(
        <div className="Grid-container">
            <div className="grid1">
                <img src={Grid1} />
            </div>
            <div className="grid2">
                <img src={Grid2} />
                <img src={Grid3} />
            </div>
            <div className="grid3">
                <img src={Grid4} />
                <img src={Grid5} />
            </div>
            <div className="grid4">
                <img src={Grid6} />
                <img src={Grid7} />
            </div>
            <div className="grid5">
                <img src={Grid8} />
                <img src={Grid9} />
            </div>
        </div>
    )

 }