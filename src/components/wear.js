import React from 'react';
import { useState } from 'react';
import './wear.css';
import { NavLink} from 'react-router-dom';
import { getWears } from '../wearData';
import { getWear } from '../wearData';
import { useParams } from 'react-router-dom';
import Footer from './footer';  


export default function Wear() {
    const [count, newCount] = useState(0);
    const increaseCount = () => {
      newCount(count + 1)
    }


    let params = useParams();
    let wear = getWear(parseInt(params.wearId, 10));
    let wears = getWears();

    let filteredWear = [];

    const wearFiltered = () => {
        filteredWear = wears.filter((item) => item.number !== wear.number )
        console.log(filteredWear)
    }

    wearFiltered();


  return (
    <div>
      <div className='container'>
        <div className='outfit-image'>
            <img src={wear.image} alt="pic" />
            <p>{wear.name} {wear.price}</p>
        </div>

        <section className='outfit-card'>

            { filteredWear.map((list) => (
                <div>
                    <NavLink to={`/wears/${list.number}`} key={list.number}>

                <div className='outfit-image1'>
                  <img src={list.image}  alt="pic" />
                  <p>{list.name} {list.price}</p>
                  <button onClick={increaseCount}>Add to Cart <span>{count}</span></button>
                 
                </div>
                    </NavLink>
                </div>

            )) }

        </section>
        </div>


         <Footer />
    </div>
  )
}
