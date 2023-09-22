import React from "react";
import './HoneyChilli.css'

const HoneyChilli=()=>{
    return(
        <div style={{padding:'10px'}}>
            <div className="honey">
                <h1 className="content">Honey Chilli Potato</h1>
            </div>
            <h3 className="detail">A delicious Indian vegetarian recipe, Honey Chilli Potato is a great option to spice up your meal. It is an evening meal . It makes your mood good when you are sad and it taste so spicy that you want to eat more and more after eating it.</h3>
            <div className="four-boxes">
                <div className="box">
                    <h2>Total Cook Time</h2>
                    <p>35min</p>
                </div>
                <div className="box">
                    <h2>Prep Time</h2>
                    <p>10min</p>
                </div>
                <div className="box">
                    <h2>Cook Time.</h2>
                    <p>25min</p>
                </div>
                <div className="box">
                    <h2>Recipe Serving</h2>
                    <p>2min</p>
                </div>
            </div>

            <h3>Ingredients</h3>
            <p>Onion , Potatoes , chilli , vegtable oil ,  soya sauce , tomato sauce , salt , black salt , sugar , ginger paste , red chilli powder , water  , water , turmeric</p>
            
            <h1 className="head">Steps to be followed:</h1>

            <ul className="steps">
                <li>Pressure cook the potatoes</li>
                <li>Prepare the cornflour batter</li>
                <li>Deep fry the potatoes</li>
                <li> Saute the fried potatoes with seasonings & sauces</li>
                <li>Garnish and serve</li>
                <li> Your Honey Chilli Potato is Ready 😍 </li>
            </ul>
        </div>
    )
}

export default HoneyChilli;