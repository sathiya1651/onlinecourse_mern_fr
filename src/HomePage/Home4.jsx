import React from 'react'
import './Home4.css'
import five from '../Images/five.webp'
import six from '../Images/six.jpg'
import Home5 from './Home5'

const Home4 = () => {
  return (
    <>
    <div className="container-fluid p-5">
        <div className="row">
            <div className="col-lg-12 col-md-12 col-sm-12">
            <h1 className='pop text-center'>All the skills you need in one place</h1>

            </div>
        </div>
    </div>

<div className="container-fluid">
    <div className="many">
    <div className="row">
        <div className="col-lg-6 col-md-12 col-sm-12">
            <img src={five} alt="" className='w-100'/>

        </div>
       <div className="col-lg-6 col-md-12 col-sm-12">
        <img src={six} alt="" className='w-100' />

       </div>

    </div>
    </div>
    </div>


<Home5/>
    </>
  )
}

export default Home4
