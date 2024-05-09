import React from 'react'
import Cart2 from './Cart2'
import data from './data'

const Cart1 = () => {
  
  
    return (
   <>
  <h1 className='text-center'>Skill</h1> 
  <section className='py-4 container'>
    <div className="row justify-content-center">
        {data.productData.map((item,index)=>{
            return(

            <Cart2 
            img={item.img}
            title={item.title}
            desc={item.desc} 
            price={item.price} 
            item={item} 
            key={index}/>

                  
            )
        })}




    </div>

  </section>
   
   </>
  )
}

export default Cart1
