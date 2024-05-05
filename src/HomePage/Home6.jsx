import React from 'react'
import './Home6.css'
import Button from 'react-bootstrap/Button';
import { FaArrowRight } from "react-icons/fa6";
import one from '../Images1/one.png'
import Home7 from './Home7';

const Home6 = () => {
  return (
    <>
    <div className="container-fluid">
        <div className="row">
            <div className="col-lg-4 col-md-12 col-sm-12">
            <div className='m-5'>
                <h2 className=' fw-bold p-2  '>Top trends for the future of work</h2>
                <p className='p-2'>GenAI and leadership are at the core of today's skills-based economy. Get the 2024 Global Learning & Skills Trends Report to learn more.</p>
                <Button variant='outline-dark po'>Get the report  <FaArrowRight />
 </Button>
            </div>
            </div>
            <div className="col-lg-8 col-md-12 col-sm-12">
                <img src={one} alt="" className='first second' />
            </div>
        </div>
    </div>

    <Home7/>
    </>
  )
}

export default Home6
