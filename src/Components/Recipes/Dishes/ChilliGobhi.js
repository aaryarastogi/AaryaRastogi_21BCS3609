import React from "react";
import './ChilliGobhi.css'

const ChilliGobhi=()=>{
    return(
        <div style={{padding:'10px'}}>
            <div className="chilli">
                <h1 className="content">Chilli Gobhi</h1>
            </div>
            <h3 className="detail">A delicious Indian vegetarian recipe, Chilli Gobi is a great option to spice up your meal. Cauliflower or Gobi is an ideal lunch recipe, a super easy recipe that can be cooked under 30 minutes across Indian homes in abundance. It is also one of the most versatile vegetable around. You can toss it up with spices and make a version of your own self. Gobi can be prepared for lunch or you can also pack it for tiffin and also cook as a dish at dinner.</h3>
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
            <p>Onion , Cauli flower , chilli , vegtable oil , cornflour , soya sauce , tomato sauce , salt , black salt , sugar , ginger paste , red chilli powder</p>
            
            <h1 className="head">Steps to be followed:</h1>

            <ul className="steps">
                <li>Mix together the gobhi, 1 teaspoon salt, egg, corn flour, garlic, ginger and enough water to have the pieces coated with the mixture.</li>
                <li>Heat the oil, and fry over medium heat to a golden color.</li>
                <li>Heat 2 tbsp of the oil in a wok, and stir fry the onions in it over high heat till they look wet.</li>
                <li>Add the green chillies and stir a few times, add the remaining salt, soya sauce, vinegar, and the gobhi.</li>
                <li>Mix well, and serve garnished with some greens.</li>
                <li>Tip- If you like the gobhi softer, you can blanch it before adding it to the batter ingredients.</li>
                <li> Your Chilli Gobhi is Ready 😍 </li>
            </ul>
        </div>
    )
}

export default ChilliGobhi;