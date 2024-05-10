import React from 'react'
import { useCart } from 'react-use-cart'
import './carts.css'
import { useNavigate } from 'react-router-dom';

const Cart3 = () => {


   const {isEmpty,totalUniqueItems,items,totalItems,cartTotal,updateItemQuantity,removeItem,emptyCart,} = useCart(); 

if(isEmpty)
    return <h1 className='text-center'>Cart</h1>

const navigate = useNavigate();

const Buy = ()=>{
    alert("Payment received")
    navigate('/Home')
}

  return (
    <>
    <section className='py-4 container'>
        <div className='row justify-content-center'>
            <div className="col-12">
                <h5>No of course: {totalUniqueItems} </h5>
                {/* <h6>{totalItems}</h6> */}

                <table className='table table-light table-hover m-0'>
                    <tbody>
                    {items.map((item,index)=>{
                        return(
                             <tr key={index}>
                        <td><img src={item.img} style={{height:'6rem'}}/>
                        </td>
                        <td>Course : {item.title}</td>
                        <td>Price : {item.price}</td>
                        <td>purchase : {item.quantity}</td>
                        {/* <button className='btn btn-danger ms-2' onClick={()=>updateItemQuantity(item.id,item.quantity-1)}>-</button>
                        <button className='btn btn-success ms-2' onClick={()=>updateItemQuantity(item.id,item.quantity+1)}>+</button> */}
                        <button className='btn btn-info m-3' onClick={()=>removeItem(item.id)}>X</button>

                        </tr>)

                    })}
</tbody>
                </table>
            </div>

            <div className="p-1">
                <h5>Total Amount: $ {cartTotal}</h5>

            </div>
            <div className="text-center p-5 popsa ">
                <button className='btn btn-outline-dark   ' onClick={()=>emptyCart()}>Delete All</button>
                <button className='btn btn-outline-success' onClick={()=>Buy()}>Buy Now</button>
            </div>

        </div>
    </section>
    
    </>
  )
}

export default Cart3
