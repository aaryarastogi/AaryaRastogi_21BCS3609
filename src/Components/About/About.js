import React from 'react';
import './About.css';
import about from '../Images/aboutus.png'

const About=()=>{
  return (
    <div className='whole' id='about'>
        <div className="image">
          <img
            src={about}
            alt="chef"
          />
      </div>
      <div className="text">
        <h1>About Us</h1>
        <p>At Foodies, we are passionate about food and cooking. Our mission is to inspire you to create delicious and memorable meals right in your own kitchen. Whether you're a seasoned chef or a beginner in the culinary world, we've got something for everyone.</p>
        <h3>We offer:</h3>
        <ul>
          <li>Delicious Recipes: Explore our extensive collection of recipes from various cuisines, dietary preferences, and skill levels. From quick and easy weekday dinners to gourmet dishes for special occasions, we've got it all.</li>
          <li>Cooking Tips: Learn essential cooking techniques, time-saving tips, and ingredient substitutions to enhance your culinary skills.</li>
          <li>Meal Planning: Discover meal planning ideas, weekly menus, and shopping lists to make your meal preparation hassle-free.</li>
          <li>Healthy Eating: Find nutritious recipes and dietary guidelines for a balanced and healthy lifestyle.</li>
        </ul>
      </div>
    </div>
  );
}

export default About;
