import React from 'react'
import { Link } from 'react-router-dom';


export default function header() {
  return (
    <div>
        <header>
                <div className='logo'>
                    <h2>MYFIT</h2>
                </div>
                <nav>
                    <ul>
                    <li> <Link to ="/">HOME</Link></li>
                    <li><Link to = "/Wear">GYM WEAR</Link></li>
                    <li><Link to = "/Meal">MEAL PLAN</Link></li>
                    <li><Link to = "/Card">CONTACT</Link></li>
                    <li><Link to ="/Gym ">GYM EQUIPMENT</Link></li>
                    </ul>
                </nav>

                <div className='header-social'>
                <a href="#"><i class="fab fa-facebook"></i></a>
                <a href="#"><i class="fab fa-twitter"></i></a>
                </div>   
            </header>


            

    </div>
  )
}



