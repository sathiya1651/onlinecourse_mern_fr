import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import './Home2.css'

import one from '../Images/one.jpg'
import two from '../Images/two.jpeg'
import three from '../Images/three.webp'
import four from '../Images/four.webp'
import Home3 from './Home3';

const Home2 = () => {
  return (
    <>
<Carousel>
      <Carousel.Item>
       <img
       className='d-block w-100 men'
       src={one}
       alt="First slide"/>
        <Carousel.Caption>
          <h3 className='text-success'>Web Developement</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img
       className='d-block w-100 men'
       src={two}
       alt="Second slide"/>
        <Carousel.Caption>
          <h3>Cyber Security</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>


      <Carousel.Item>
        <img
       className='d-block w-100 men'
       src={three}
       alt="Second slide"/>
        <Carousel.Caption>
          <h3 className=''>Cloud Computing </h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      
      <Carousel.Item>
        <img
       className='d-block w-100 men'
       src={four}
       alt="Second slide"/>
        <Carousel.Caption>
          <h3 className=''>Andriod Development </h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      
    </Carousel>
    
    <Home3/>
    </>
  )
}

export default Home2
