import React from 'react'
import './Home11.css'
import { FaUser } from "react-icons/fa6";
import Button from 'react-bootstrap/Button';
import { FaArrowRight } from "react-icons/fa";
import { RiVerifiedBadgeLine } from "react-icons/ri";
import Home12 from './Home12';




const Home11 = () => {
  return (
    <>
    <div className="container-fluid">
      <div className="row p-2">
        <div className="col-lg-12 col-md-12 col-sm-12">
          <h1>Accelerate growth - for you or your organization
</h1>
        </div>
      </div>
    </div>


    <div className="container-fluid">
      <div className="row p-2">
        <div className="col-lg-12 col-md-12 col-sm-12">
         <p className='fst-italic'>Reach goals faster with one of our plans or programs. Try one free today or contact sales to learn more.

</p>
        </div>
      </div>
    </div>
    
<div className="container-fluid p-3">
  <div className="row">


    <div className="col-lg-4 col-md-12 col-sm-12">
    <div class="card5">
  <div class="card-header p-1">
    <h4>Personal Plan
</h4>
    <p> For you
</p>
<span><FaUser />Individual</span>
  </div>
  <div class="card-body">
    <h5 class="card-title">Starting at ₹850 per month</h5>
    <p class="card-text">Billed monthly or annually. Cancel anytime.</p>
    <hr />
    <Button variant='outline-dark' className='p-1 wop'>Start Subscription  <FaArrowRight />
</Button>
<br /><br />
   <p><RiVerifiedBadgeLine />     Access to 11,000+ top courses</p>
                               
      <p> <RiVerifiedBadgeLine />  Certification prep</p>
                                    
      <p> <RiVerifiedBadgeLine />   Goal-focused recommendations
</p>
                                
      <p> <RiVerifiedBadgeLine />    AI-powered coding exercises

</p>                      
      
  </div>
</div>

    </div>


    <div className="col-lg-4 col-md-12 col-sm-12">
    <div class="card5">
  <div class="card-header p-1">
    <h4>Team Plan
</h4>
    <p> For your team
</p>
<span><FaUser /><sup>2 to 20 people</sup></span>
  </div>
  <div class="card-body">
    <h5 class="card-title">₹1,167 a month per user

</h5>
    <p class="card-text">Billed annually. Cancel anytime.

</p>
    <hr />
    <Button variant='outline-dark' className='p-1 wop'>Start Subscription  <FaArrowRight />
</Button>
<br /><br />
   <p><RiVerifiedBadgeLine />     Access to 11,000+ top courses</p>
                               
      <p> <RiVerifiedBadgeLine />  Certification prep</p>
                                    
      <p> <RiVerifiedBadgeLine />   Goal-focused recommendations
</p>
                                
      <p> <RiVerifiedBadgeLine />    AI-powered coding exercises

</p>                      
<p> <RiVerifiedBadgeLine />    Analytics and adoption reports

</p>                      
      
  </div>
</div>

    </div>




    <div className="col-lg-4 col-md-12 col-sm-12">
    <div class="card5">
  <div class="card-header p-1">
    <h4>Enterprise Plan
</h4>
    <p> For your whole organization

</p>
<span><FaUser /><sup>More than 20 people</sup></span>
  </div>
  <div class="card-body">
    <h5 class="card-title">Contact sales for pricing

</h5>
    <hr />
    <br />
    <Button variant='outline-dark' className='p-1 wop'>Start Subscription  <FaArrowRight />
</Button>
<br /><br />
   <p><RiVerifiedBadgeLine />     Access to 11,000+ top courses</p>
                               
      <p> <RiVerifiedBadgeLine />  Certification prep</p>
                                    
      <p> <RiVerifiedBadgeLine />   Goal-focused recommendations
</p>
                                
      <p> <RiVerifiedBadgeLine />    AI-powered coding exercises

</p>   
<p> <RiVerifiedBadgeLine />    Hands-on tech training with add-on


</p>                      
      
  </div>
</div>

    </div>
























    
    
  </div>
</div>

<Home12/>

    </>
  )
}

export default Home11
