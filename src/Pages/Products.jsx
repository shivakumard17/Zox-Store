import React,{useEffect,useState} from 'react';
import axios from 'axios'
import './index.elements.css'
import ProductsItems from '../Components/Products/ProductsItems'
import {NavLink} from "react-router-dom";


function Products() {
  const [products,setProducts]=useState([]);
  // const [filter ,setFilter]=useState([]);
  // const [search ,setSearch]=useState([]);
  

  useEffect(()=>{
    
   const getProducts = async () => {
     const response = await axios.get(`https://fakestoreapi.com/products`)
     const data=response.data;
     setProducts(data);
     window.scrollTo(0, 0);

 }

 getProducts()
 
  },[])
  


 return (
   <div className='products_page'>
   <div className="catagory">
    <ul>
      <NavLink className='link'  to='/products/'>All</NavLink>
      <NavLink className='link' to='/products/electronics'>electronics</NavLink>
      <NavLink className='link'  to='/products/jewelery'>jewelery</NavLink>
      <NavLink className='link'  to='/products/men-clothing'>men's clothing</NavLink>
      <NavLink className='link'  to='/products/women-clothing'>women's clothing</NavLink>
    </ul>
   </div>
    
   <div className="products">
        {products.map(product=>{
         return(
           <ProductsItems
           id={product.id}
           title={product.title}
           category={product.category}
           price={product.price}
           image={product.image}
           rate={product.rating.rate}
           count={product.rating.count}
           />   

         )})}
       
      </div>
   </div>
 )
}

export default Products