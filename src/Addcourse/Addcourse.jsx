import React, { useState } from 'react';
import axios from 'axios';
import './Addcourse.css'
import { useNavigate } from 'react-router-dom';


const Addcourse = () => {

    const [form, setForm] = useState({
        coursename: "",
        coursedescription: "",
        courseprice: "",
        image: null
      });
    
      const navigate = useNavigate()
    
      const handleChange = (e) => {
        const { name, value, type, files } = e.target;
        const newValue = type === 'file' ? files[0] : value;
    
        setForm(prev => ({ ...prev, [name]: newValue
        }));
      }
    
      const handleSubmit = async (e) => {
        console.log(form)
        e.preventDefault();
    
        const formDataToSend = new FormData();
        formDataToSend.append('coursename', form.coursename);
        formDataToSend.append('coursedescription', form.coursedescription);
        formDataToSend.append('courseprice', form.courseprice);
        formDataToSend.append('image', form.image);
    
        try {
          await axios.post('http://localhost:4000/course',formDataToSend, {
            headers: {
              'Content-Type': 'multipart/form-data'
            }
          });
          alert('Course  added successfully');
          navigate('/admin')
        } catch (error) {
            console.error('Error:', error); 
    
          alert('Error:', error);
        }
      };
    


  return (
    <>
    <div class="container p-5 ">
    <h1 className='text-center p-3 pics'>Add Course </h1>

  <div class="form-container  ">
    <div class="form-group">
      <input type="text" class="form-control" placeholder="Course Name" name="coursename" value={form.coursename} onChange={handleChange} />
    </div>
    <div class="form-group">
      <input type="text" class="form-control" placeholder="Course Description" name="coursedescription" value={form.coursedescription} onChange={handleChange} />
    </div>
    <div class="form-group">
      <input type="text" class="form-control" placeholder="Course Price" name="courseprice" value={form.courseprice} onChange={handleChange} />
    </div>
    <div class="form-group">
      <input type="file" class="form-control-file" name="image" onChange={handleChange} />
    </div>
    <button class="btn btn-primary iop " onClick={handleSubmit}>Submit</button>
  </div>
</div>
    </>
   
  )
}

export default Addcourse
