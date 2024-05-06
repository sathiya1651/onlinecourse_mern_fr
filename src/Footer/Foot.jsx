import React from 'react'
import './Foot.css'

import { FaFacebook } from "react-icons/fa6";

import { BsTwitterX } from "react-icons/bs";

import { FaLinkedinIn } from "react-icons/fa";

import { FaInstagram } from "react-icons/fa6";

const Foot = () => {
  return (
    
    <>
    <div>
        <h1 className='fst-italic text-center p-5'>Contact Us</h1>
        <footer className='footer p-5'>



            <div className="container row">
                <div className="footer-col ">
                    <h4>company</h4>
                    <ul>
                        <li><a href="#">Business</a></li>
                        <li><a href="#">Get the app</a></li>
                        <li><a href="#">About Us</a></li>
                        <li><a href="#">Contact Us</a></li>


                    </ul>
                </div>

                <div className="footer-col">
                    <h4>Get Help</h4>
                    <ul>
                        <li><a href="#">Careers</a></li>
                        <li><a href="#">Blogs</a></li>
                        <li><a href="#">Help and Support</a></li>
                        <li><a href="#">Investor</a></li>


                    </ul>
                </div>

                <div className="footer-col">
                    <h4>Policy</h4>
                    <ul>
                        <li><a href="#">Terms</a></li>
                        <li><a href="#">Privacy Policy</a></li>
                        <li><a href="#">Sitemap</a></li>

                        <li><a href="#">Statement</a></li>

                    </ul>
                </div>

                <div className="footer-col">
                    <h4>follow us</h4>
                    <div className="social-links">
                        <a href="https://www.facebook.com/"><FaFacebook />
</a>
                        <a href="https://twitter.com/login"><BsTwitterX />
</a>
                        <a href="https://in.linkedin.com/"><FaLinkedinIn />
</a>
                        <a href="https://www.instagram.com/">  <FaInstagram />
     </a>


                    </div>
                </div>


            </div>

        </footer>
    </div>
    
    
    </>
  )
}

export default Foot
