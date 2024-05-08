import React from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import { BrowserRouter, Routes,Route } from 'react-router-dom';
import Signup from './Login/Signup';
import Login from './Login/Login';
import Home1 from './HomePage/Home1';
import Addcourse from './Addcourse/Addcourse';
import Admin from './Admin/Admin';
import Web from './Develop/Web';
import Data from './Develop/Data';
import Mobile from './Develop/Mobile';
import Human from './Business/Human';
import Project from './Business/Project';
import Business from './Business/Business';

const App = () => {
  return (
    <>
    <BrowserRouter>
    <Routes>

   <Route path='/' element={<Signup/>} />
   <Route path='/login' element={<Login/>}/>

   <Route path='/Home' element={<Home1/>}/>
   <Route path='/addcart' element={<Addcourse/>}/>
   <Route path='/admin' element={<Admin/>}/>

   <Route path='/Web Development' element={<Web/>}/>
   <Route path='/Data Design' element={<Data/>}/>
   <Route path='/Mobile App Development' element={<Mobile/>}/>

<Route path='/Human Resources' element={<Human/>}/>
<Route path='/Project Management' element={<Project/>}/>
<Route path='/Business Stragery' element={<Business/>}/>
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
