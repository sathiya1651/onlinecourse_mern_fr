import React, { useState } from 'react'
import axios from 'axios'
import { Link, useNavigate } from 'react-router-dom'
import './Login.css'
import { FaUser } from "react-icons/fa";
import { TbPassword } from "react-icons/tb";
import { LuLogIn } from "react-icons/lu";



const Login = () => {

    const [Form,setForm] = useState({        
        "username":"",
        "password":"",
    })


    const navigate = useNavigate();

    
    const handleChange = (e) =>{
        setForm(prev=>({...prev,[e.target.name]:e.target.value}))
    }
    const handleSubmit = (e) => {
      console.log(Form)
      e.preventDefault();
      
      axios.post('http://localhost:4000/login', Form)
          .then(res => {
            if(res.data){
            alert("Login Successful")
                navigate('/Home')
                sessionStorage.setItem('token', res.data.token);
            sessionStorage.setItem('userId', res.data.userId);

            }else{
                alert("No data")
            }
           console.log(res);
          })
          .catch(err=>alert("Please Enter Detail"));
    };






  return (
    <div className="pics1" >
 
        <div className="wrapper">
         <div className="login-box">
           <div className="login-header">
             <span className='shadow-lg p-3 mb-5  rounded saw1'>Login</span>
           </div>


      

   <div className="input_box">
   <input type="text" className='input-field' name='username' value={Form.username} onChange={handleChange} />   
   <label  className='label'>Username </label><FaUser className='icon' />

   </div>

<div className="input_box">
   <input type="password" className='input-field' name='password' value={Form.password} onChange={handleChange} />   
   <label  className='label'>Password</label><TbPassword className='icon'  />
   </div>
   <div className="input_box">

   <button type="submit" className='btn btn-outline-info border-3  py-2' onClick={handleSubmit} >Login   <LuLogIn className='mx-3' /></button>  
   </div>
   <p>Create new account <Link to = "/">Create</Link></p>

   
       </div>
    </div>
</div>
  )
}

export default Login