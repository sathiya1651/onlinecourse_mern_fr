import React from 'react'
import './Home10.css'
import Home11 from './Home11'

const Home10 = () => {
  return (
  <>
  <div className=''>
<div className="container-fluid">
  <div className="row">
    <div className="col-lg-12 col-md-12 col-sm-12">
    <h1 className='text-center  las '> Business Development</h1>

    </div>
  </div>
</div>


    <div className="container-fluid p-5 ier5">
        <div className="row m-3">
            <div className="col-lg-4 col-md-4 col-sm-12 ier5">
            <button className='btn btn-outline-dark  rig'>Human Resources</button>
            </div>
            <div className="col-lg-4 col-md-4 col-sm-12">
            <button className='btn btn-outline-dark  rig'>Project Management</button>
            </div>
            <div className="col-lg-4 col-md-4 col-sm-12">
            <button className='btn btn-outline-dark rig'>Business Stragery</button>
            </div>



        </div>
        </div>

        <div className="container-fluid p-5 ier ">
        <div className="row m-3">
        <div className="col-lg-4 col-md-4 col-sm-12 ">
            <button className='btn btn-outline-dark rig '>Management</button>
            </div>
            <div className="col-lg-4 col-md-4 col-sm-12">
            <button className='btn btn-outline-dark  rig'>Communication</button>
            </div>
            <div className="col-lg-4 col-md-4 col-sm-12">
            <button className='btn btn-outline-dark rig '>Business Analytics</button>
            </div>

        </div>
    </div>
    
    </div>
  
  <Home11/>
  
  </>
  )
}

export default Home10
