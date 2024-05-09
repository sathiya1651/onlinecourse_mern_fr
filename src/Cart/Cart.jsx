import React from 'react'
import Cart1 from './Cart1'
import Cart3 from './Cart3'
import { CartProvider } from 'react-use-cart'

const Cart = () => {
  return (
   <>
   <CartProvider>
   <Cart1/>
   <Cart3/>

   </CartProvider>
   
  
   </>
  )
}

export default Cart
