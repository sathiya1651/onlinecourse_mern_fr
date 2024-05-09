import React, { useState,useEffect } from 'react';
import axios from 'axios'
import { MdDelete } from "react-icons/md";
import {Link} from 'react-router-dom'
import { CiEdit } from "react-icons/ci";

const Admin1 = () => {


    const [Form, setForm] = useState([])

    useEffect(() => {
        const fetchData = async () => {
            console.log(Form)
          try {
            const res = await axios.get('http://localhost:4000/allcourse');
            setForm(res.data);
          } catch (error) {
            console.error('Error fetch', error);
          }
        };
    
        fetchData();
      }, []);
    



  return (
    <>
    <div class="container-fluid p-5 pl">
        <table class="table table-striped">
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Description</th>
                    <th>Price</th>
                    <th>Image</th>
                    <th>Edit</th>
                    <th>Delete</th>
                </tr>
            </thead>
            <tbody>
                
                {Array.isArray(Form) && Form.map(item => (
                    <tr key={item._id} className='m-5'>
                        <td>{item._id}</td>
                        <td>{item.coursename}</td>
                        <td>{item.coursedescription}</td>
                        <td>{item.courseprice}</td>
                        <td><img src={`http://localhost:4000/public/upload/${item.image}`} alt='' style={{width:"100px", height:"auto"}} /></td>
                        <td><Link to="/updatecourse"><button><CiEdit />
</button></Link></td>
                        <td><Link to='/deletecourse'><button><MdDelete />
</button></Link></td>
                    </tr>
                ))}
            </tbody>
        </table>
    </div>
    
    </>
  )
}

export default Admin1
