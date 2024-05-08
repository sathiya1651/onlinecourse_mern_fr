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

const Human = () => {
  return (
    <>
    <div className='p-2'>
    <div className="kop  ">
        <h3 className='io'>Human Resources Courses
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
      <Card.Img variant="top" src="https://thumbor.forbes.com/thumbor/fit-in/900x510/https://www.forbes.com/advisor/wp-content/uploads/2022/09/What_Is_Human_Resources_-_article_image.jpg" />
      <Card.Body>
        <Card.Title> Understanding and Complying with HIPAA</Card.Title>
        <Card.Text>
        This program will train you on the HIPAA and provide an overview on the rules governing protected health information.
        </Card.Text>
        <PiCurrencyInrBold /> 549  
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
      <Card.Img variant="top" src="https://online.maryville.edu/wp-content/uploads/sites/97/2023/09/hr-team.jpg" />
      <Card.Body>
        <Card.Title>World-Class HR: 21st Century Talent Management</Card.Title>
        <Card.Text>Learn about the challenges and opportunities of modern human resources (HR). Attract and retain the best people.A great skills set like Fluuter
        </Card.Text>
        
        <PiCurrencyInrBold /> 549 
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
      <Card.Img variant="top" src="https://online.maryville.edu/wp-content/uploads/sites/97/2023/09/human-resource-manager.jpeg"/>
      <Card.Body>
        <Card.Title> International Business Etiquette </Card.Title>
        <Card.Text>
        Soft Skills you need to excel at work!        </Card.Text>
        <PiCurrencyInrBold /> 549   
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
      <Card.Img variant="top" src="https://media.licdn.com/dms/image/C4E12AQE_YilVEKg09Q/article-cover_image-shrink_600_2000/0/1520236767425?e=2147483647&v=beta&t=0ABpHXOb2ovAMJW2jUpMYV8VXxlpJvRT80CV1VtkpAE" />
      <Card.Body>
        <Card.Title> Recruitment Interviewing Essentials: Interviewing Made Easy</Card.Title>
        <Card.Text>
        Start hiring confidently, interview skilfully & make recruitment decisions professionally. Avoid costly hiring mistakes.        </Card.Text>
        <PiCurrencyInrBold /> 549 
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
               <img src="https://thumbor.forbes.com/thumbor/fit-in/900x510/https://www.forbes.com/advisor/wp-content/uploads/2022/11/Image-12.jpg" alt=""  className='php'/>
                
                </Col>
                <Col xs={6}>
                  <div>
                    <h4>Executive Diploma in Human Resources Strategy</h4>
                    <span className='nom'>HR Strategy: Aligning HR Strategy with Business Objectives by MTF Institute
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

export default Human
