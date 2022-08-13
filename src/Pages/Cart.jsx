import React from 'react';
import {useSelector,useDispatch} from 'react-redux';
import {FaStar} from 'react-icons/fa';
import './Cart.elements.css'
import {remove} from '../store/cartSlice'

function Cart() {
  const products=useSelector((state)=>state.cart);
  const dispatch=useDispatch();


  const handleRemove=(productId)=>{
    
    dispatch(remove(productId));

  }

  return (
    <div className='cart_page'>
     <h3>Your Cart</h3>
      <div className='cart_wraper'>
           { products.map(product=>( 
  
              <div className='cart_card' key={product.id}>
               <div className="img"><img src={product.image} alt=''/></div>
               
               <div className="class">
               <h4>{product.title.substring(0,60)}</h4>
               <p>{product.category}</p>
               <p className='rating'><FaStar/><FaStar/><FaStar/>{product.rating.rate}({product.rating.count})</p>
               <p>${product.price}</p>
               <button className='btn' onClick={()=>handleRemove(product.id)}>Remove</button></div>
                </div>
           ))
}
      </div>

     
    </div>
  )
}

export default Cart