import React from 'react';
import Images from '../images/image23.jpg';
import Image from '../images/image28.jpg';
import Image1 from '../images/image20.jpg';
import Image2 from '../images/image27.jpg';
import Image3 from '../images/image29.jpg';
import Image4 from '../images/image30.jpg';
import Footer from './footer';



export default function meal() {
  return (
    <div>
      <div className='meal-showcase'>
        <h1>ABS ARE MADE IN THE KITCHEN</h1>
        <svg className='waves' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#fff" fill-opacity="1" d="M0,32L40,53.3C80,75,160,117,240,133.3C320,149,400,139,480,160C560,181,640,235,720,240C800,245,880,203,960,160C1040,117,1120,75,1200,74.7C1280,75,1360,117,1400,138.7L1440,160L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z"></path></svg>

      </div>

      <div className='container'>
        <div className="break-text">
          <h1>MEAL PLAN FOR A DAY</h1>
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,</p>
        </div>
        <div className='break-ideas' >

          <div className="break-card">
            <i class="fa fa-coffee"></i>
            <h2>Breakfast Ideas</h2>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry</p>
            <button>View More</button>
          </div>

          <div>
            <img src={Images} />
            <h3>Toated Exekiel Bread and Avocado</h3>
          </div>
          <div>
            <img src={Image} />
            <h3>Toated Exekiel Bread and Avocado</h3>
          </div>
        </div>

      </div>

      <div className='container'>
        <div className='lunch-ideas' >
          <div>
            <img src={Image1} />
            <h3>Toated Exekiel Bread and Avocado</h3>
          </div>

          <div className="break-card2">
            <i class="fa fa-cutlery"></i>
            <h2>Lunch Ideas</h2>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry</p>
            <button>View More</button>
          </div>
          <div>
            <img src={Image2} />
            <h3>Toated Exekiel Bread and Avocado</h3>
          </div>


        </div>
      </div>


      <div className='container'>
        <div className='break-ideas' >
          <div>
            <img src={Image3} />
            <h3>Toated Exekiel Bread and Avocado</h3>
          </div>
          <div>
            <img src={Image4} />
            <h3>Toated Exekiel Bread and Avocado</h3>
          </div>

          <div className="break-card">
            <i class="fa fa-cutlery"></i>
            <h2>Dinner Ideas</h2>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry</p>
            <button>View More</button>
          </div>


        </div>
      </div>
      <div className='menu-consult'>
        <h1>BOOK FOR A CONSULTATION</h1>

      </div>
      
      <div className='menu'>

        <div className='outer-form'>
          <form>
            <h4>BOOK</h4>
            <i class="fa fa-user"></i>
            <input type="text" className='input1' placeholder="Username" />
            <input type="email" className='input2' placeholder="Email" />
            <input type="password" className='input2' placeholder="Password" />
            <textarea placeholder='write your message' rows={5} cols={35}></textarea>
            <button>Submit</button>

          </form>
        </div>

      </div>




    <Footer />
    </div>
  )
}
