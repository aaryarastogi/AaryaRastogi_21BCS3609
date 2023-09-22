import React from 'react';
import './Recipe.css'
import noodles from '../Images/noodles.jpeg'
import Carousel from 'react-multi-carousel';
import "react-multi-carousel/lib/styles.css";
import ShahiPaneer from '../Images/shahipaneer.jpeg';
import honey from '../Images/honey-chili.jpg'
import gobhi from '../Images/chilligobhi.jpeg'
import vada from '../Images/vada.jpeg'
import { Link } from 'react-router-dom';


const Recipe =()=>{
    const responsive = {
        superLargeDesktop: {
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };
      
    return(
        <div className='container' id='recipe'>
            <div className="recipe">
                <h1 className='heading'>Recipes</h1>
                <button href="/recipe">View All</button>
            </div>
            <Carousel
                swipeable={false}
                draggable={false}
                showDots={false}
                responsive={responsive}
                ssr={true} 
                infinite={true}
                autoPlaySpeed={1000}
                keyBoardControl={true}
                customTransition="all .5"
                transitionDuration={500}
                containerClass="carousel-container"
                dotListClass="custom-dot-list-style"
                itemClass="carousel-item-padding-40-px"
                className='slider'
            >
                <Link to='/shahipaneer' className='small' >
                  <img src={ShahiPaneer}></img>
                  <h1>Shahi Paneer</h1>
                </Link>
                <Link to='/chilligobhi' className='small'>
                  <img src={gobhi}></img>
                  <h1 className='small'>Chilli Gobhi</h1>
                </Link>
                <Link to='/honeychillipotato' className='small'>
                  <img src={honey}></img>
                  <h1 className='small'>Honey Chilli Potato</h1>
                </Link>
                <Link to='/vada' className='small'>
                  <img src={vada}></img>
                  <h1 className='small'>Vada Pao</h1>
                </Link>
            </Carousel>
        </div>
    )
}

export default Recipe