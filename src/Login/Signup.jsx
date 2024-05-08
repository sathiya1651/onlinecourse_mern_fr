import React, { useState } from 'react'
import axios from 'axios'
import './Login.css'
import { FaUser } from "react-icons/fa";
import { TbPassword } from "react-icons/tb";
import { SiGnuprivacyguard } from "react-icons/si";
import { Link, useNavigate } from "react-router-dom";
import { CgNametag } from "react-icons/cg";



const Signup = () => {

const [Form,setForm] = useState({
    "name":"",
    "username":"",
    "password":"",
})

const navigate = useNavigate();


const handleChange = (e) =>{
    setForm(prev=>({...prev,[e.target.name]:e.target.value}))
}

const handleSubmit = (e) => {

  e.preventDefault();
  
  axios.post("http://localhost:4000/signup", Form)
    .then(res => {
        console.log("Response:", res.data); // Log the response for debugging
        if (res.data) {
            alert("Signup verified");
            navigate('/login')
        } else {
            alert("Not Detail verified");
        }
    })
    .catch(error => {
        console.error('Error:', error);
        alert("Please Enter Detail");
    });
}
  

    return (


        <div className="pics1" >
 
        <div className="wrapper">
         <div className="login-box">
           <div className="login-header">
             <span className='shadow-lg p-3 mb-5  rounded saw'>sign up</span>
           </div>


       <div className="input_box">
   <input type="text" className='input-field'  name='name' value={Form.name} onChange={handleChange}/>  
   <label  className='label'>Name</label><CgNametag className='icon' />

   </div>

   <div className="input_box">
   <input type="text" className='input-field' name='username' value={Form.username} onChange={handleChange} />   
   <label  className='label'>Username</label><FaUser className='icon' />

   </div>

<div className="input_box">
   <input type="password" className='input-field' name='password' value={Form.password} onChange={handleChange} />   
   <label  className='label'>Password</label><TbPassword className='icon' />
   </div>
   <div className="input_box">

   <button type="submit" className='btn btn-outline-danger border-3  py-2' onClick={handleSubmit} >Sign Up   <SiGnuprivacyguard className='mx-3'  /></button>  
   </div>
   <p>Already Account <Link to = "/login">Please Login</Link></p>

   
       </div>
    </div>
</div>
  )
}

export default Signup


