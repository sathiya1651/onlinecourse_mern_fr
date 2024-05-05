import React from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import { BrowserRouter, Routes,Route } from 'react-router-dom';
import Signup from './Login/Signup';
import Login from './Login/Login';
import Home1 from './HomePage/Home1';

const App = () => {
  return (
    <>
    <BrowserRouter>
    <Routes>

   <Route path='/' element={<Signup/>} />
   <Route path='/login' element={<Login/>}/>

   <Route path='/Home' element={<Home1/>}/>

    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
