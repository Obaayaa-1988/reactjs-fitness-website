import React from 'react'

export default function Footer() {
    return (
        <div>
            <footer>
                <div className='footer-flex'>
                    <div className='flex-part1'>
                        <div className='logo'>
                            <h2>MYFIT</h2>
                        </div>
                        <p>Activia is a stylish gym and fitness center WordPress theme featuring a modern Activia is a stylish gym and fitness center WordPress theme featuring a modern</p>

                        <div class="left-social">
                            <a href="#"><i class="fab fa-facebook"></i></a>
                            <a href="#"><i class="fab fa-twitter"></i></a>
                            <a href="#"><i class="fab fa-instagram"></i></a>

                        </div>
                    </div>

                    <div className='flex-part2'>
                        <form>
                            <h5> SEND A QUICK MESSAGE</h5>
                        <textarea cols="35" rows="4" placeholder="write your message..."></textarea>
                          <button>Submit</button>
                        </form>

                    </div>

                    <div className='flex-part3'>
                        <div>
                            <i class="fa fa-address-book-o"></i>
                            <h3>ADDRESS</h3>
                            <h4>Lapaz Racecourse Gyedu-Street HNO_255</h4>
                            
                        </div>
                        <div>
                            <i class="fa fa-mobile"></i>
                            <h3>TELEPHONES</h3>
                            <h4>0240199546</h4>
                            
                        </div>

                        <div>
                            <i class="fa fa-envelope"></i>
                            <h3>EMAIL</h3>
                            <h4>ashbella333@gmail.com</h4>
                            
                        </div>
                            


                    </div>


                </div>

                <p className='footer-para'>Powered By Developers In Vogue &copy; 2022 | Theme By: <span class="">Ashbella</span> </p>


            </footer>


        </div>
    )
}
