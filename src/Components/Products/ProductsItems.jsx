import React from 'react';
import "../Products/products.element.css";
import {FaStar} from 'react-icons/fa';
import {add} from '../../store/cartSlice';
import {useDispatch} from 'react-redux';


function ProductsItems({id,title,category,price,image,rate,count,product}) {

  const dispatch=useDispatch();

  const handleAdd=(product)=>{
      dispatch(add(product));
  }

  return (
    <div className='card' key={id}>
        
        <img src={image} alt="product" />
        <h4>{title.substring(0,20)}</h4>
        <p>{category}</p>
        <p className='rating'><FaStar/><FaStar/><FaStar/>{rate}({count})</p>
        <div className="cart">
            <p>${price}</p>
            <button onClick={()=>{handleAdd(product)}}>ADD</button>
        </div>
       




    </div>
  )
}

export default ProductsItems