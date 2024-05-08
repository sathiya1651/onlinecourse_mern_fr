import React from 'react'
import './Web.css'
import { LuUsers } from "react-icons/lu";
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { FaShoppingCart } from "react-icons/fa";
import { PiCurrencyInrBold } from "react-icons/pi";
import { FaStar } from "react-icons/fa";
import Foot from '../Footer/Foot'

const Mobile = () => {
  return (
   <>
    <div className='p-2'>
    <div className="kop  ">
        <h3 className='io'>Mobile App Development</h3>
        <p className='io'><LuUsers /> 4,309,133,738 learners</p>
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
      <Card.Img variant="top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQo9dZysu3ZVronCw9I_4w6p0HmvZoHjUrlFAftS28PSw&s" />
      <Card.Body>
        <Card.Title> Flutter - 2024</Card.Title>
        <Card.Text>
        Become an advanced, confident, and Mobile App developer from scratch
        </Card.Text>
        <PiCurrencyInrBold /> 299  
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
      <Card.Img variant="top" src="https://assets-global.website-files.com/654366841809b5be271c8358/659efd7c0732620f1ac6a1d6_why_flutter_is_the_future_of_app_development%20(1).webp" />
      <Card.Body>
        <Card.Title>Complete Mobile APP from zero to Expert-2024</Card.Title>
        <Card.Text>
    A great skills set like Fluuter
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
      <Card.Img variant="top" src="https://solguruz.com/_next/image/?url=https%3A%2F%2Fblog.solguruz.com%2Fwp-content%2Fuploads%2F2023%2F11%2FFlutter-App-Development-Cost-A-Complete-Guide.png&w=1080&q=75"/>
      <Card.Body>
        <Card.Title> Complete From  Mobile APP </Card.Title>
        <Card.Text>
        A great skills set like Fluuter
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
      <Card.Img variant="top" src="https://strapi.dhiwise.com/uploads/618fa90c201104b94458e1fb_647ecd43c5092e1c431f22fd_Flutter_App_Development_A_Step_by_Step_Tutorial_With_Dhi_Wise_E2_80_99s_Flutter_Builder_OG_Image_62b760b8fe.jpg" />
      <Card.Body>
        <Card.Title> DART</Card.Title>
        <Card.Text>
        Become an advanced, confident, and Mobile App developer from scratch
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
               <img src="https://repository-images.githubusercontent.com/205812745/0de8a400-d662-11e9-8b88-ba362adb1830" alt=""  className='php'/>
                
                </Col>
                <Col xs={6}>
                  <div>
                    <h4>Flutter: The Complete Guide - from Beginner to Advanced</h4>
                    <span className='nom'>Master the programming language that powers the web: Learn Mobile app and kickstart a lucrative web developer career</span>
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

export default Mobile
