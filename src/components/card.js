import React from 'react';
import Images from '../images/image3.jpg';
import Image1 from '../images/image2.jpg';
import Image2 from '../images/image4.jpg';


export default function Card() {
  return (
    <div>
    <div className='card-container'>
      <div className='card-image1'>
        <div className='image-overlay'>
        <div>
          <h2>WEIGHTLIFTING</h2>
          <p>Activia is a stylish gym and fitness center WordPress theme featuring a modern design. The theme comes with multiple homepage layouts with various styles of homepage designs</p>
          <button className='btn'>Find Out More</button>
        </div>
          
          </div>
        <img src={Images} />
        
      </div>

      <div className='card-image2'>
        <div className='image-overlay2'>
        <div>
          <h2>POWER LIFTING</h2>
          <p>Activia is a stylish gym and fitness center WordPress theme featuring a modern design. The theme comes with multiple homepage layouts with various styles of homepage designs</p>
          <button className='btn2'>Find Out More</button>
        </div></div>
        <img src={Image2} />
      </div>

      <div className='card-image3'>
        <div className='image-overlay3'>
        <div>
          <h2>BODY WEIGHT TRAINING</h2>
          <p>Activia is a stylish gym and fitness center WordPress theme featuring a modern design. The theme comes with multiple homepage layouts with various styles of homepage designs</p>
          <button className='btn3'>Find Out More</button>
        </div>
          
          
          </div>
        <img src={Image1} />
      </div>

    </div>


    </div>
  )
}

