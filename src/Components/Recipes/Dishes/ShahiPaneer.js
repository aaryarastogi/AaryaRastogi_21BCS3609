import React from "react";
import './ShahiPaneer.css'

const ShahiPaneer=()=>{
    return(
        <div style={{padding:'10px'}}>
            <div className="dish">
                <h1 className="content">Shahi Paneer</h1>
            </div>
            <h3 className="detail">Shahi means royal in Hindi. The soft paneer chunks cooked in the rich and creamy gravy ensures that this recipe is nothing less than true royalty! But this Shahi legacy also makes one believe that it is impossible to cook a true Shahi Paneer at home. However, making Shahi Paneer in the comfort of your kitchen is much easier than you think, as long as you get the right ingredients and follow the recipe correctly. So, don’t wait…it’s time you give it a try!</h3>
            <div className="four-boxes">
                <div className="box">
                    <h2>Total Cook Time</h2>
                    <p>49min</p>
                </div>
                <div className="box">
                    <h2>Prep Time</h2>
                    <p>15min</p>
                </div>
                <div className="box">
                    <h2>Cook Time.</h2>
                    <p>34min</p>
                </div>
                <div className="box">
                    <h2>Recipe Serving</h2>
                    <p>5min</p>
                </div>
            </div>
            <h3>Ingredients</h3>
            <p>Onion , Paneer , chilli , vegtable oil , curd , soya sauce , tomato sauce , salt , black salt , sugar , ginger paste , red chilli powder , garam masala , water , cumin , cream , tomatoes , water , turmeric</p>
            
            <h1 className="head">Steps to be followed:</h1>

            <ul className="steps">
                <li>Prepare ingredients as mentioned in the list.</li>
                <li>Pressure cook together onions, tomatoes, ginger and garlic with ½ a cup of water. Cool and blend into a smooth paste</li>
                <li>Heat butter in a pan. Add coriander powder, red chilli powder, kasuri methi and the paneer cubes. Sauté for a few minutes</li>
                <li>Add the onion-tomato paste, ½ cup water and salt to the paneer. Bring to a boil and simmer for 5 minutes. Then, add 2 tablespoons of cream and let it simmer for 2 minutes.</li>
                <li> Your Shahi Paneer is Ready 😍 </li>
            </ul>
        </div>
    )
}

export default ShahiPaneer;