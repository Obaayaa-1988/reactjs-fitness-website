import React from 'react'
import Images from '../images/image7.png';
import Image2 from '../images/image18.jpg';
import Pic1 from '../images/pic1.jpg';
import Pic2 from '../images/pic2.jpg'
import Pic3 from '../images/pic3.jpg'





export default function

  () {
  return (
    <div>
      <div className='landing-about'>

        <div className='land-image'>
          <img src={Images} />

        </div>

        <div className='land-about'>
          <h1>ABOUT MYFIT</h1>
          <p>Activia is a stylish gym and fitness center WordPress theme featuring a modern design.
            The theme comes with multiple homepage layouts with various styles of homepage designs
            The theme comes with multiple homepage layouts with various styles of homepage designs
          </p>
          <button>Read More</button>
        </div>

      </div>


      <div className='landing-image'>
        <div className='container'>
          <div className='landing-text'>
            <h1>BENEFITS OF WORKOUTS</h1>
          </div>
          <div className='landing-cards'>

            <div className='land-card'>
              <i class="fa fa-heartbeat"></i>
              <h2>Better HeartBeat</h2>
              <p>The theme comes with multiple homepage layouts with various</p>

            </div>

            <div className='land-card'>
              <i class="fa fa-eye"></i>
              <h2>Clear Eyesight</h2>
              <p>The theme comes with multiple homepage layouts with various</p>



            </div>

            <div className='land-card'>
              <i class="fa fa-lightbulb-o"></i>
              <h2>Great Brain</h2>
              <p>The theme comes with multiple homepage layouts with various</p>
            </div>

            <div className='land-card'>
              <i class="fa fa-female"></i>
              <h2>Awesome Body</h2>
              <p>The theme comes with multiple homepage layouts with various</p>
            </div>

          </div>
        </div>
      </div>



      <div className='offer-card'>
        <h1>WHAT WE OFFER</h1>
        <div className='container'>
          <div className='offer-cards'>
            <div className='offer-images'>
            <img src={Pic1} />

            </div>
            <div className='offer-online cards'>
              <h3>Online Coaching</h3>
              <p>The theme comes with multiple homepage layouts with various</p>
              <button>SIGN UP</button>
            </div>

            <div className='offer-images'>
            <img src={Pic2} />


            </div>

            <div className='trainer cards'>
              <h3>Personal Trainer</h3>
              <p>The theme comes with multiple homepage layouts with various</p>
              <button>SIGN UP</button>

            </div>

            <div className='offer-images'>
            <img src={Pic3} />

            </div>

            <div className='offer-count cards '>
              <h3>Macros Count</h3>
              <p>The theme comes with multiple homepage layouts with various</p>
              <button>LEARN MORE</button>

            </div>

          </div>

        </div>

      </div>

  
       <div className='mass-text'>
       <h1> GYM MEMBERSHIP SIGN UP</h1>
       </div>

      <div className='body-workout'>

      <div className='mass-image'>
          <img src={Image2} />
        </div>

        <div className='outer-form2'>
          <form>
            <i class="fa fa-user-circle-o"></i>
            <input type="text" className='input1' placeholder="Username" />
            <input type="email" className='input2' placeholder="Email" />
            <input type="password" className='input2' placeholder="Password" />
            {/* <textarea placeholder='write your message' rows={5} cols={35}></textarea> */}
            <button>sign up</button>

          </form>
        </div>

      </div>

    </div>
  )
}
