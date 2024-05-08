import React, { useState,useEffect } from 'react';
import axios from 'axios'

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
                </tr>
            </thead>
            <tbody>
                
                {Form.map(item => (
                    <tr key={item.courseid}>
                        <td>{item.courseid}</td>
                        <td>{item.coursename}</td>
                        <td>{item.coursedescription}</td>
                        <td>{item.courseprice}</td>
                        <td><img src={`http://localhost:4000/${item.image}`} alt='' /></td>
                    </tr>
                ))}
            </tbody>
        </table>
    </div>
    
    </>
  )
}

export default Admin1
