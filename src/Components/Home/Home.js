import React from "react";
import './Home.css'
import noodles from '../Images/noodles.jpeg'

const Home=()=>{
    const handleAbout=()=>{
        const element=document.getElementById("about");
        if(element){
          element.scrollIntoView({behavior:"smooth"})
        }
      }
    return(
        <div className="home" id="home">
            <div className="first">
                <h1>Food is Life</h1>
                <p>A recipe is a story that ends with a good meal.</p>
                <button onClick={handleAbout}>Explore us</button>
            </div>
         </div>
    )
}

export default Home;