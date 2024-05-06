import React from 'react'
import './Home7.css'
import two from '../Images1/two.png'
import three from '../Images1/three.png'
import four from '../Images1/four.png'
import five from '../Images1/five.png'
import six from '../Images1/six.png'
import seven from '../Images1/seven.jpg'

import Home9 from './Home9'

const Home7 = () => {
  return (
   <>
   <div className='col-lg-12 col-md-12 col-sm-6'>
   <p className='p-2 rop '>Trusted by over 15,000 companies and millions of learners around the world
</p>
</div>

   <div className="container-fluid p-4 this">
    <div className="row p-5 lsa">
    <div className="col-lg-2 col-md-6 col-sm-6">
<img src={two} alt="" className='w-50 cap' />
      </div>

      <div className="col-lg-2 col-md-6 col-sm-6" >
<img src={three} alt="" className='w-50 cap' />
      </div>

      <div className="col-lg-2 col-md-6 col-sm-6" >
<img src={four} alt="" className='w-50 cap' />
      </div>

      <div className="col-lg-2 col-md-6 col-sm-6" >
<img src={five} alt="" className='w-50 cap' />
      </div>

      <div className="col-lg-2 col-md-6 col-sm-6" >
<img src={six} alt="" className='w-50 cap' />
      </div>

      <div className="col-lg-2 col-md-12 col-sm-6" >
<img src={seven} alt="" className='w-50 cap' />
      </div>

    </div>
   </div>
   
<Home9/>

   </>
  )
}

export default Home7
