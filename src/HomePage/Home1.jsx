import React from 'react'
import Home2 from './Home2'
import './Home1.css'
import { Link } from 'react-router-dom'
import { FiShoppingCart } from "react-icons/fi";




const Home1 = () => {
  return (
   <>
   <div>
    <div className="ol">
   <nav className="navbar navbar-expand-lg navbar-light ">
  <div className="container-fluid ">
    <a className="navbar-brand rrr" href="#">Learn Hub</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link mx-2" aria-current="page" href="#">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link mx-2" aria-current="page" href="#">Course</a>
        </li>
        <li className="nav-item">
          <a className="nav-link mx-2" aria-current="page" href="#">Contact</a>
        </li>
<Link to="/cart"><button className='btn btn-outline-dark wq'>   Add Cart    <FiShoppingCart />
</button></Link>
    

      </ul>
      <form className="d-flex fg">
        <input className="form-control text-center " type="search" placeholder="Search" aria-label="Search"/>
      </form>
 
  
<div>
<Link to="/">  <button className='btn btn-outline-dark adf1'>signup</button>
</Link>
<Link to="/login">  <button className='btn btn-outline-dark adf'>Logout</button>
</Link>

</div>

    </div>
  </div>
</nav>
</div>
   </div>
   <Home2/>
   </>
  )
}

export default Home1
