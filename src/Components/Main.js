import React from "react";
import Home from "./Home/Home";
import Recipe from "./Recipes/Recipe";
import About from "./About/About";

const Main=()=>{
    return(
        <div>
            <Home/>
            <Recipe/>
            <About/>
        </div>
    )
}

export default Main;