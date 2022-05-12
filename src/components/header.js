import React from 'react'
import { Link } from 'react-router-dom';


export default function Header() {
  return (
    <div>
        <header>
                <div className='logo'>
                    <h2>MYFIT</h2>
                </div>
                <nav>
                    <ul>
                    <li> <Link to ="/">HOME</Link></li>
                    <li><Link to = "/Wears">GYM WEAR</Link></li>
                    <li><Link to = "/Meal">MEAL PLAN</Link></li>
                    <li><Link to = "/Contact">CONTACT</Link></li>
                    <li><Link to ="/Gym ">GYM EQUIPMENT</Link></li>
                    </ul>
                </nav>

                <div className='header-social'>
                <a href="#"><i class="fa fa-bell"></i></a>
                <a href="#"><i class="fa fa-podcast"></i></a>
                </div> 
                  
            </header>


            

    </div>
  )
}



