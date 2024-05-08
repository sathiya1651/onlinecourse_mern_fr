import React from 'react'
import './Web.css'
import { LuUsers } from "react-icons/lu";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { FaShoppingCart } from "react-icons/fa";
import { PiCurrencyInrBold } from "react-icons/pi";
import { FaStar } from "react-icons/fa";
import Foot from '../Footer/Foot'


const Data = () => {
  return (
   <>
    <div className='p-2'>
    <div className="kop  ">
        <h3 className='io'>Database Design</h3>
        <p className='io'><LuUsers /> 1,209,733,738 learners</p>
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
      <Card.Img variant="top" src="https://upload.wikimedia.org/wikipedia/commons/8/87/Sql_data_base_with_logo.png" />
      <Card.Body>
        <Card.Title> DBMS - 2024</Card.Title>
        <Card.Text>
        Become an advanced, confident, and modern sql developer from scratch
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
      <Card.Img variant="top" src="data:image/jpeg;base64,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" />
      <Card.Body>
        <Card.Title>Complete dbms from zero to Expert-2024</Card.Title>
        <Card.Text>
    A great skills set like sql
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
      <Card.Img variant="top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSd-FldcrymN-QF0T0LTlT3uxLqF1YGWJMRqIGe4BDKVw&s"/>
      <Card.Body>
        <Card.Title> Complete From  Redis </Card.Title>
        <Card.Text>
        Become an advanced, confident, and modern sql developer from scratch
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
      <Card.Img variant="top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTz5Y7tCSROd2ckkXFImA6sFElC6xY-zkKEtm3lnRs_2A&s" />
      <Card.Body>
        <Card.Title> DBMS</Card.Title>
        <Card.Text>
        Complete Backend  with 2 projects
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
               <img src="https://media.licdn.com/dms/image/D4E12AQEVNA7Qh_r24A/article-cover_image-shrink_720_1280/0/1711009445506?e=2147483647&v=beta&t=YisAZwCYZ9M5Kc3ZB6GuCDyC0Dz2WaDR-VM0_9_yCAk" alt=""  className='php'/>
                
                </Col>
                <Col xs={6}>
                  <div>
                    <h4>Oracle: The Complete Guide - from Beginner to Advanced</h4>
                    <span className='nom'>Master the programming language that powers the web: Learn database and kickstart a lucrative web developer career</span>
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

export default Data
