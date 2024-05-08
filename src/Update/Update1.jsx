import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import axios from 'axios'
import { useNavigate } from 'react-router-dom';


const Update1 = () => {
    const [formData, setFormData] = useState({
        id: '',
        name: '',
        username: '',
        password: ''
    });

    const navigate = useNavigate();

    const handleChange = (e) =>{
        setFormData(prev=>({...prev,[e.target.name]:e.target.value}))
    }
    const update = async () => {
        try {
            console.log(formData);
            const response = await axios.patch(`http://localhost:4000/update/${formData.id}`, formData);
            console.log(response);
            navigate('/admin');
        } catch (error) {
            console.log(error);
        }
    };
    
   




  return (
    <>
            <div className="modal show" style={{ display: 'block', position: 'initial' }}>
                <Modal.Dialog>
                    <Modal.Header closeButton>
                        <Modal.Title>Update </Modal.Title>
                    </Modal.Header>
                    <Modal.Body className='text-center'>
                        <input type="text" name="id" placeholder='Id' value={formData.id} onChange={handleChange} />
                    </Modal.Body>
                    <Modal.Body className='text-center'>
                        <input type="text" name="name" placeholder='name' value={formData.name} onChange={handleChange} />
                    </Modal.Body>
                    <Modal.Body className='text-center'>
                        <input type="text" name="username" placeholder='username' value={formData.username} onChange={handleChange} />
                    </Modal.Body>
                    <Modal.Body className='text-center'>
                        <input type="password" name="password" placeholder='password' value={formData.password} onChange={handleChange} />
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={update}>Update</Button>
                    </Modal.Footer>
                </Modal.Dialog>
            </div>
        </>
  )
}

export default Update1
