import React from 'react'
import './Home5.css'
import { FaStar } from "react-icons/fa6";
import { FaRegStarHalfStroke } from "react-icons/fa6";
import seven from '../Images/seven.jpg'
import eight from '../Images/eight.jpg'
import nine from '../Images/nine.png'
import ten from '../Images/ten.jpg'
import Home6 from './Home6';

const Home5 = () => {
  return (
    <>
    <div className="container-fluid p-5">
        <div className="row">

            <div className="col-lg-3 col-md-6 col-sm-12">
            <div className="card" style={{ width: '18rem'  }}>
  <img className="card-img-top" src={seven} alt="Card image cap"/>
  <div className="card-body">
    <h5 className="card-title">The Complete 2024 Web Development Bootcamp</h5>
    <p className="card-text"> $ 499</p>
    <p>         4.7 <FaStar /><FaStar /><FaStar /><FaStar /><FaStar /><FaStar /><FaRegStarHalfStroke />
</p>
    <span className='open'>Bestseller</span>
  </div>
</div>
            </div>


            <div className="col-lg-3 col-md-6 col-sm-12">
            <div className="card" style={{ width: '18rem' }}>
  <img className="card-img-top" src={eight} alt="Card image cap"/>
  <div className="card-body">
    <h5 className="card-title">Web Development Masterclass -Online Certificate </h5>
    <p className="card-text">         $ 499
</p>
<p>4.4 <FaStar /><FaStar /><FaStar /><FaStar /><FaRegStarHalfStroke /></p>
<span className='open'>Bestseller</span>
  </div>
</div>
            </div>



            <div className="col-lg-3 col-md-6 col-sm-12">
            <div className="card" style={{ width: '18rem' }}>
  <img className="card-img-top" src={nine} alt="Card image cap"/>
  <div className="card-body">
    <h5 className="card-title">Programming Language 2024 -Full Stack Web Developer</h5>
    <p className="card-text">$ 599</p>
    <p> 4.5 <FaStar /><FaStar /><FaStar /><FaStar /><FaRegStarHalfStroke />
</p>
    <span className='open'>Bestseller</span>

  </div>
</div>
            </div>


            <div className="col-lg-3 col-md-6 col-sm-12">
            <div className="card" style={{ width: '18rem' }}>
  <img className="card-img-top" src={ten} alt="Card image cap"/>
  <div className="card-body">
    <h5 className="card-title">Practical Web  Development 2024 - Javascript, Python, Java and C++</h5>
    <p className="card-text">$299</p>
<p>    4.7 <FaStar /><FaStar /><FaStar /><FaStar /><FaStar /><FaStar /><FaRegStarHalfStroke />
</p>
    <span className='open'>Bestseller</span>
  </div>
</div>
            </div>

            
        </div>
    </div>

    <Home6/>
    </>
  )
}

export default Home5
