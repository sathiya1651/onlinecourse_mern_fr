import React from 'react'
import './Home3.css'
import Home4 from './Home4'

const Home3 = () => {
  return (
    <>
    <div className=''>
    <div className="container-fluid p-5 way">
        <div className="row m-3">
            <div className="col-lg-4 col-md-4 col-sm-12">
            <button className='btn btn-outline-dark one'>Web Development</button>
            </div>
            <div className="col-lg-4 col-md-4 col-sm-12">
            <button className='btn btn-outline-dark one'>Database Design</button>
            </div>
            <div className="col-lg-4 col-md-4 col-sm-12">
            <button className='btn btn-outline-dark one'>Mobile Development</button>
            </div>



        </div>
        </div>

        <div className="container-fluid p-5 way1">
        <div className="row m-3">
        <div className="col-lg-4 col-md-4 col-sm-12 way1">
            <button className='btn btn-outline-dark one'>Programming Language</button>
            </div>
            <div className="col-lg-4 col-md-4 col-sm-12">
            <button className='btn btn-outline-dark one'>Data Science</button>
            </div>
            <div className="col-lg-4 col-md-4 col-sm-12">
            <button className='btn btn-outline-dark one'>Software Engineering</button>
            </div>

        </div>
    </div>
    
    </div>
    <Home4/>
    </>
  )
}

export default Home3
