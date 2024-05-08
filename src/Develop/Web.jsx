import React from 'react'
import './Web.css'
import { LuUsers } from "react-icons/lu";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { FaShoppingCart } from "react-icons/fa";
import { PiCurrencyInrBold } from "react-icons/pi";
import one from '../Images2/one.png'
import two from '../Images2/two.jpg'
import three from '../Images2/three.jpg'
import four from '../Images2/four.png'
import php from '../Images2/php.png'
import { FaStar } from "react-icons/fa";
import Foot from '../Footer/Foot'


const Web = () => {
  return (
    <>
  <div className='p-2'>
    <div className="kop  ">
        <h3 className='io'>JavaScript Courses</h3>
        <p className='io'><LuUsers /> 16,333,738 learners</p>
    </div>
    </div>

    <div>
        <p className='fs-5 fst-italic'>Courses to get you started</p>
    </div>

    
            

    <div className="container-fluid">
        <h6 className='fs-5'>Most Popular</h6>
        <div className="fip p-2">
        <Row>
            <Col xs={3}>
            <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={one} />
      <Card.Body>
        <Card.Title> JavaScript Course - 2024</Card.Title>
        <Card.Text>
        Become an advanced, confident, and modern JavaScript developer from scratch
        </Card.Text>
        <PiCurrencyInrBold /> 1199  
        <Card.Text>
<span>Bestseller</span>
        </Card.Text>
           <hr />
           <p><FaShoppingCart  />  </p>                                                         
     
      </Card.Body>
    </Card>
            </Col>

            <Col xs={3}>
            <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={two} />
      <Card.Body>
        <Card.Title>Complete Javascript from zero to Expert-2024</Card.Title>
        <Card.Text>
    A great skills set like  JavaScript
        </Card.Text>
        
        <PiCurrencyInrBold /> 899 
        <Card.Text>
<span>Bestseller</span>
        </Card.Text>
          <hr />
       <p><FaShoppingCart  />  </p>  
                                                        
     
      </Card.Body>
    </Card>
            </Col>

            <Col xs={3}>
            <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={three} />
      <Card.Body>
        <Card.Title> Complete From  CSS & JavaScript </Card.Title>
        <Card.Text>
         Functions to your Web Pages using CSS & JavaScripts
        </Card.Text>
        <PiCurrencyInrBold /> 1499   
        <Card.Text>
<span>Bestseller</span>
        </Card.Text>
       
         <hr />
         <br />
         <p><FaShoppingCart  />  </p>                                                        
     
      </Card.Body>
    </Card>
            </Col>

            <Col xs={3}>
            <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={four} />
      <Card.Body>
        <Card.Title> Complete Web Design: HTML, CSS, Javascript</Card.Title>
        <Card.Text>
        Complete HTML5 & CSS3 with 2 projects
        </Card.Text>
        <PiCurrencyInrBold /> 1599 
        <Card.Text>
<span>Bestseller</span>
        </Card.Text>
          <hr />
          <p><FaShoppingCart  />  </p> 
      </Card.Body>
    </Card>
            </Col>

           
        </Row>
            </div>


    </div>  
    
    <hr />
    <div>
        <div className="lp p-3">
            <p className=' fw-bold fs-4 '>Featured course</p>
            <p className='fs-6'>Many learners enjoyed this highly rated course for its engaging content.</p>
        </div>
    </div>

      <div className="plss">
        <div className="container-fluid p-2">
            <Row>
                <Col xs={6}>
               <img src={php} alt=""  className='php'/>
                
                </Col>
                <Col xs={6}>
                  <div>
                    <h4>Modern PHP: The Complete Guide - from Beginner to Advanced</h4>
                    <span className='nom'>Master the programming language that powers the web: Learn PHP and kickstart a lucrative web developer career</span>
                  </div>
                  <div>
                    <p>By Jannis Seemann</p>
                    <p>Updated <span className=''>April 2024</span> 8.5 total hours  67 lectures </p>
                  </div>
                  <div>
                    5.0  <FaStar /> <FaStar /> <FaStar /> <FaStar /> <FaStar /><sup>(22)</sup>
                    <span className='lit2'>Highest Rated</span>


                  </div>
                  <br />
                  <div>
                 <p className='fw-bold'><PiCurrencyInrBold />  499 <span className='er'><del><PiCurrencyInrBold />1999</del></span></p> 
                  </div>
                </Col>
            </Row>

        </div>
      </div>


<Foot/>



    </>
  )
}

export default Web
