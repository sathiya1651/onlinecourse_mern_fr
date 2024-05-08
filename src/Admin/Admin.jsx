import React, { useState,useEffect } from 'react';
import axios from 'axios'
import Admin1 from './Admin1';

const Admin = () => {

    const [Form, setForm] = useState([])

    useEffect(() => {
        const fetchData = async () => {
            console.log(Form)
          try {
            const res = await axios.get('http://localhost:4000/alluser');
            setForm(res.data);
          } catch (error) {
            console.error('Error fetch', error);
          }
        };
    
        fetchData();
      }, []);   




  return (
    <>
    <div class="container-fluid p-5">
        <h5 className=' text-center'>DashBoard Admin Page</h5>
        <table class="table table-striped">
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Username</th>
                    <th>Password</th>
                   
                </tr>
            </thead>
            <tbody>
                
                {Form.map(item => (
                    <tr key={item.userid}>
                        <td>{item.userid}</td>
                        <td>{item.name}</td>
                        <td>{item.username}</td>
                        <td>{item.password}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    </div>
<br /><br /><br /><br /><br />
    <Admin1/>
    </>
  )
}

export default Admin
