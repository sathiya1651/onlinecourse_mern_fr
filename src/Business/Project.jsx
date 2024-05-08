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



const Project = () => {
  return (
    <>
    <div className='p-2'>
    <div className="kop  ">
        <h3 className='io'>Project Management Courses
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
      <Card.Img variant="top" src="data:image/jpeg;base64,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" />
      <Card.Body>
        <Card.Title>I.T. Project Management for Beginners: A Step-by-Step Guide</Card.Title>
        <Card.Text>
        Acquire the core project management skills and techniques to be immediately effective in delivering I.T. projects.        </Card.Text>
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
      <Card.Img variant="top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxdsNj_YqULoxP_i8H5KNL46HzSMRERs8z2Q&s" />
      <Card.Body>
        <Card.Title>Trello Project Management: Complete Course</Card.Title>
        <Card.Text>
        Manage Tasks and Projects, Increase Team Collaboration, and Boost Your Productivity Using Trello        </Card.Text>
        
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
      <Card.Img variant="top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxdsNj_YqULoxP_i8H5KNL46HzSMRERs8z2Q&s"/>
      <Card.Body>
        <Card.Title>Agile PM 301 - Mastering Agile Project Management</Card.Title>
        <Card.Text>
        Learn How to Blend Agile and Traditional Project Management to Create an Adaptive Approach to Project Management        </Card.Text>
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
      <Card.Img variant="top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTL4cTfpINgdlaEeg91LfNw8--tVSaztgzjhKR4rOY0Zg&s" />
      <Card.Body>
        <Card.Title> Business Analysis: Functional & Non-Functional Requirements</Card.Title>
        <Card.Text>
        Simple Requirements Decomposition / Drill-Down Techniques for Defining Product Behaviors and Qualities (Now with AI)        </Card.Text>
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
               <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRe_5rl1f2Lfu7wKWwxVWhiQbvH3VOv380MRIEkPI809w&s" alt=""  className='php'/>
                
                </Col>
                <Col xs={6}>
                  <div>
                    <h4>PMP Exam Cram Course - Beta - In Progress
</h4>
                    <span className='nom'>Pass Your PMP Exam Fast
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

export default Project
