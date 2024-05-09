import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import axios from 'axios'
import { useNavigate } from 'react-router-dom';

const Del2 = () => {

    const [num, setNum] = useState('');
    const navigate = useNavigate()

    const remove = () => {
        axios.delete(`http://localhost:4000/deletecourse/${num}`)
            .then((response) => {
                console.log(response);
                navigate('/admin')
                
                
            })
            .catch((error) => {
                console.log(error);
            
            });
    };

    const handleChange = (e) => {
        setNum(e.target.value);
    };



  return (
    <>
    <div className="modal show" style={{ display: 'block', position: 'initial' }}>
               <Modal.Dialog>
                   <Modal.Header closeButton>
                       <Modal.Title>Delete Course</Modal.Title>
                   </Modal.Header>

                   <Modal.Body>
                       <input type="number" placeholder='Enter num' value={num} onChange={handleChange} />
                   </Modal.Body>

                   <Modal.Footer>
                       <Button variant="secondary" onClick={remove}>Delete </Button>
                       
                   </Modal.Footer>
               </Modal.Dialog>
           </div>
   
   
   
   
   </>
  )
}

export default Del2
