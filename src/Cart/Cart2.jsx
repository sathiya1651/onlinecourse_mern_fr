import React from 'react'
import { FaDollarSign } from "react-icons/fa6";
import { useCart } from 'react-use-cart';
import './carts.css'


const Cart2 = (props) => {

   const {addItem} = useCart(); 


  return (
    <>
    <div className='col-11 col-md-6 col-lg-3 mx-0 mb-4'>
    <div class="card p-0 overflow-hidden h-100 shadow lbn" style={{ width: '18rem' }}>
  <img src={props.img} class="card-img-top" alt="..."/>
  <div class="card-body text-center">
    <h5 class="card-title">{props.title}</h5>
    <h6 className='card-title'><FaDollarSign /> {props.price}</h6>
    <p class="card-text">{props.desc}</p>
    <button className='btn btn-primary' onClick={()=>addItem(props.item)}>Add to Cart</button>

  </div>
</div>

    </div>
    
    
    </> 
  )
}

export default Cart2
