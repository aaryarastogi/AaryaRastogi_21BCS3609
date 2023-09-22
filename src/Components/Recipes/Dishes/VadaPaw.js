import React from "react";
import './VadaPaw.css'

const VadaPaw=()=>{
    return(
        <div style={{padding:'10px'}}>
            <div className="vada">
                <h1 className="content">Vada Pao</h1>
            </div>
            <h3 className="detail"> A popular street food from Mumbai! Vada Pao is one of the most loves food across India. Vada made of spices and potatoes sandwiched between toasted pao bread, this dish is a filling meal that you can have for a light lunch or brunch or as an evening snacks. Spicy, crunchy and filling, you won't be able to resist making this everyday at home.</h3>
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
            <p>Onion , Potatoes , chilli , vegtable oil , soya sauce , tomato sauce , salt , black salt , sugar , ginger paste , red chilli powder , curry leaves , water , besan , coriander leaves , cumin seeds , jaggery powder , turmeric , lemon juice , pav , fried green chillies.</p>
            
            <h1 className="head">Steps to be followed:</h1>

            <ul className="steps">
                <li>Heat oil in a pan. Once hot, add cumin seeds, chopped ginger and garlic.</li>
                <li>When the garlic and ginger turn golden, add all the spice powders, salt and mashed potatoes.</li>
                <li>Mix well and turn the heat off. Add the lime juice and chopped cilantro for garnish.</li>
                <li>Once the potato mixture cools down, divide the mixture into 10-12 equal portions and shape them into pin pong sized balls.</li>
                <li>Mix the chickpea flour, salt and chili powder. Add water in small quantities & mix well until you make a pancake (or dosa) like batter.</li>
                <li>Heat up the oil for frying.</li>
                <li>Coat each ball with the batter and drop into the hot oil. Do not overcrowd the oil (it brings down the temperature of oil all of a sudden).</li>
                <li>When they turn golden, drain them onto some paper towels. Set Aside.</li>
                <li>For the bread baskets, cut the bread into a discs using a cutter or just cut the crusts off.</li>
                <li>Flatten out the bread discs slightly using a rolling pin.</li>
                <li>Grease a muffin pan and set the rolled out bread discs in it.</li>
                <li>Bake at 350°F for 5-7 min or until it gets toasted slightly. We do not want the bread to dry up. It has to be like toast; crispy outer layer but soft.</li>
                <li>Once done, Set aside and cool the baskets for 5 minutes.</li>
                <li>When you are ready to serve, start assembling the vada pav bites.</li>
                <li>Place a little bit of tamarind sauce in the basket (depending on your taste), place the potato fritter on it.</li>
                <li>Now, pipe some green chutney on top and sprinkle some spicy garlic chutney.</li>
                <li> Your Vada Pao is Ready 😍 </li>
            </ul>
        </div>
    )
}

export default VadaPaw;