import React from 'react'
import Pic6 from '../images/pic6.jpg';
import Footer from './footer';

export default function Contact() {
    return (
        <div>
            <div className='container'>
                <div className='contact-flex'>
                    <div className='contact-side' >
                        <h2>CONTACT US</h2>
                        <h3>Take A <span>Chance To Change</span> Your Body</h3>
                        <p>Activia is a stylish gym and fitness center WordPress theme featuring a modern design.
                            The theme comes with multiple homepage layouts with various styles of homepage designs
                            The theme comes with multiple homepage layouts with various styles of homepage designs
                        </p>
                        <button>Read More</button>

                    </div>
                    <div className='card-side'>
                        <div className='card-background'>
                            <img src={Pic6} alt="gym wear" />
                        </div>


                    </div>

                </div>



            </div>
            <div className='contact-showcase'>
                <div className='container'>
                    <div className='form-showcase'>
                        <div className='form-flex'>

                            <div className='side-social'>
                                <div className='social-flex'>
                                    <a href="#"><i class="fab fa-facebook"></i></a><span>|</span>
                                    <a href="#"><i class="fab fa-twitter"></i></a><span>|</span>
                                    <a href="#"><i class="fab fa-instagram"></i></a>
                                </div>

                            </div>

                            <div className='contact-form'>
                                <form>
                                    <input type="text" className='input1' placeholder="Enter your name" />
                                    <input type="email" className='input2' placeholder="Enter your email" />
                                    <input type="number" className='input2' placeholder="mm/dd/yy" />
                                    <textarea placeholder='write your message' rows={5} cols={35}></textarea>
                                    <div>
                                        <button>send</button>
                                    </div>

                                </form>
                            </div>

                        </div>
                    </div>

                </div>


            </div>
            <div className='contact-banner'>
                <div className='banner-side'>
                    <h4>GET IN TOUCH</h4>

                </div>

                <div className='banner-right'>
                    <h4>GET IN TOUCH</h4>

                </div>

            </div>

            <Footer />





        </div>
    )
}

