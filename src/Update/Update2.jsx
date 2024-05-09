import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import axios from 'axios'
import { useNavigate } from 'react-router-dom';


const Update2 = () => {

    const [formData, setFormData] = useState({
        id: '',
        coursename: '',
        coursedescription: '',
        courseprice: '',
        image:null
    });

    const navigate = useNavigate();

    const handleChange = (e) =>{
        setFormData(prev=>({...prev,[e.target.name]:e.target.value}))
    }
    const update = (_id) => {
        console.log(formData);
        axios.patch(`http://localhost:4000/updatecourse/${formData.id}`,formData)
            .then(response => {
                console.log(response);
                navigate('/admin');
            })
            .catch(error => {
                console.log(error);
            });
    };

  return (
   <>
   <div className="modal show" style={{ display: 'block', position: 'initial' }}>
                <Modal.Dialog>
                    <Modal.Header closeButton>
                        <Modal.Title>Update course </Modal.Title>
                    </Modal.Header>
                    <Modal.Body className='text-center'>
                        <input type="number" name="id" placeholder='Id' value={formData.id} onChange={handleChange} />
                    </Modal.Body>
                    <Modal.Body className='text-center'>
                        <input type="text" name="coursename" placeholder='coursename' value={formData.coursename} onChange={handleChange} />
                    </Modal.Body>
                    <Modal.Body className='text-center'>
                        <input type="text" name="coursedescription" placeholder='coursedescription' value={formData.coursedescription} onChange={handleChange} />
                    </Modal.Body>
                    <Modal.Body className='text-center'>
                        <input type="text" name="courseprice" placeholder='courseprice' value={formData.courseprice} onChange={handleChange} />
                    </Modal.Body>
                     <Modal.Body>
                     <input type="file" class="form-control-file" name="image" onChange={handleChange} />

                     </Modal.Body>

                    <Modal.Footer>
                        <Button variant="secondary" onClick={update}>Update</Button>
                    </Modal.Footer>
                </Modal.Dialog>
            </div>
   
   </>
  )
}

export default Update2
