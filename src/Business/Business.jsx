import React from 'react'
import './Human.css'
import { LuUsers } from "react-icons/lu";
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { FaShoppingCart } from "react-icons/fa";
import { PiCurrencyInrBold } from "react-icons/pi";
import { FaStar } from "react-icons/fa";
import Foot from '../Footer/Foot'

const Business = () => {
  return (
    <>
    <div className='p-2'>
    <div className="kop  ">
        <h3 className='io'>Business Strategy Courses
</h3>
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
      <Card.Img variant="top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIiJdjOl5jfTlSWOb65UFt66PkOEEC9pUIIg&s" />
      <Card.Body>
        <Card.Title>Master Your Mindset & Brain: Framestorm® Your Way to Success</Card.Title>
        <Card.Text>
        Excel in any situation. Tweak your mindset in brain-smart ways. Master class in reframing based on neuroscience.        </Card.Text>
        <PiCurrencyInrBold /> 599  
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
      <Card.Img variant="top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8BE23fflbnQ3MRWKRWzApBB9eHtOVFhQG8vnPuP-69l885xbeiTK-JGfGOGTbZjNHc1Q&usqp=CAU" />
      <Card.Body>
        <Card.Title>International Expansion: A Blueprint for Success</Card.Title>
        <Card.Text>
        An Action Plan to Profitably Expand Your Business Through International Sales and Partnerships        </Card.Text>
        
        <PiCurrencyInrBold /> 599 
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
      <Card.Img variant="top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSeT5DSOzDtG8NFcxJlu7qnzic5ZSEaxdwmR3BggpjvlF4HXKMcr9IgZN-_FyaPq0OUAYk&usqp=CAU"/>
      <Card.Body>
        <Card.Title> How to Write the Ultimate 1 Page Strategic Business Plan</Card.Title>
        <Card.Text>
        Learn to Write a 1 Page Strategic Plan That Will Easily Bring You a 6 - 7 Figure Income & Guaranteed Business Success        </Card.Text>
        <PiCurrencyInrBold /> 599   
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
      <Card.Img variant="top" src="data:image/jpeg;base64,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" />
      <Card.Body>
        <Card.Title>How To Write A Business Plan And A Winning Business Model</Card.Title>
        <Card.Text>
        Business plan template & business plan examples: Create a top business model & business plan for your business ideas        </Card.Text>
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
               <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTG0rxqYRQbbBKQzMk27DjchnZwaqyqX51iIQ&s" alt=""  className='php'/>
                
                </Col>
                <Col xs={6}>
                  <div>
                    <h4>Executive Diploma in Strategic Management
</h4>
                    <span className='nom'>Executive Diploma in Strategic Management by MTF Institute
</span>
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
                 <p className='fw-bold'><PiCurrencyInrBold />  799 <span className='er'><del><PiCurrencyInrBold />1999</del></span></p> 
                  </div>
                </Col>
            </Row>

        </div>
      </div>

   <Foot/>
   </>
  )
}

export default Business
