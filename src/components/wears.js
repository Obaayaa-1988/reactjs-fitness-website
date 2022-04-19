
import React, { useState } from 'react';
import Images from '../images/image13.jpg';
import { NavLink, Outlet } from 'react-router-dom';
import Pic5 from '../images/pic5.jpg';
import { getWears } from '../wearData';
import Footer from './footer';



export default function Wears() {

  let wears = getWears()

  const [ hello, sayHello ] = useState("");
  const myHello = () => {
    sayHello("Thank You For Buying From Us")
  }

  const [count, newCount] = useState(0);
  const increaseCount = () => {
    newCount(count + 1)
  }

  return (

    <div>
      <div className='gym-showcase'>
        <div className='gym-image1'>
          <h1>SUMMER 2022 COLLECTION</h1>
          <p>Get Your Body Excited</p>
          <button onClick={myHello}>Shop Now</button>
          <span>{hello}</span>

        </div>

        <div className='gym-image1'>
          <img src={Images} alt="gym attire" />

        </div>

      </div>


      <div className='outfit-showcase'>
        <div className='container'>
          <div className='outfit-text'>
            <h1>New Arrivals</h1>
          </div>
        {/* new arrivals end */}

          <div className='outfit-grid'>

            {wears.map((wear) => (
              <NavLink to={`/Wears/${wear.number}`} key={wear.number}>

                <div className='outfit-image1'>
                  <img src={wear.image} />
                  <p>{wear.name} {wear.price}</p>
                  <button onClick={increaseCount}>Add to Cart <span>{count}</span></button>
                 
                </div>

              </NavLink>
              
            ))}
           
          </div>
          <Outlet />

          {/* end of outfit-grid */}

        </div>
      </div>


      {/* sales part */}

      <div className='wear-display'>
        <div className='wear-linear'>
          <h2>SALE IS ON</h2>
          <h1>30% OFF </h1>
          <button>BUY NOW</button>
        </div>

        <div className='display-image'>
          <img src={Pic5} alt="gym wear"/>

        </div>
      
      </div>

      <Footer />

    </div>
  )
}
