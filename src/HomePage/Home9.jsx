import React from 'react'
import './Home9.css'
import eight from '../Images1/eight.webp'
import nine from '../Images1/nine.png'
import ten from '../Images1/ten.webp'
import eleven from '../Images1/eleven.webp'
import { RiDoubleQuotesL } from "react-icons/ri";
import { RiDoubleQuotesR } from "react-icons/ri";
import Home10 from './Home10'


const Home9 = () => {
  return (
   <>
   <div className="container-fluid p-4">
    <div className="row">
      <div className="col-lg-4">
        <div className="p-4">
        <h5 className='text-center '>Business </h5>
        </div>
        <div className="p-1">
          <p className='row fst-italic'>business development is a process aimed at growing a company and making it more successful. That can include seeking new business opportunities, building and sustaining connections with existing clients, entering strategic partnerships, and devising other plans to boost profits and market share.

</p>
        </div>
        <div>
          <div className="pop">
        <span className=''><sup><RiDoubleQuotesL /></sup>
I don't believe in taking right decisions. I take decisions and then make them right. <sup><RiDoubleQuotesR />
</sup>
</span>
</div>


        </div>
      
      </div>

   <div className="col-lg-8">
    <div className="row">
      <div className="col-lg-6">
        <img src={eight} alt="" className='w-75 fr' />

      </div>
      <div className="col-lg-6">
        <img src={nine} alt="" className='w-75 fr' />

      </div>
    </div>
<br />
    <div className="row">
      <div className="col-lg-6">
        <img src={ten} alt="" className='w-75 fr' />

      </div>
      <div className="col-lg-6">
        <img src={eleven} alt="" className='w-75 fr' />

      </div>
    </div>

   </div>
   </div>


    </div>
   
   <Home10/>
   </>
  )
}

export default Home9
