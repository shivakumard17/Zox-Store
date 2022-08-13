import React,{useState,useEffect} from 'react'
import Banner from '../Components/Nav/banner.png'
import './index.elements.css'
import axios from 'axios'
import ProductsItems from '../Components/Products/ProductsItems'
function Home() {
   const [products,setProducts]=useState([]);

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
    <div className='Home'>

      <div className="banner">
        <img src={Banner} alt="banner" />
      </div>
      <div className="top-products">
       <h2>Top-Products</h2>
      
      </div>
    <div className="products">
         {products.map(product=>{
          return(
            <ProductsItems
            product={product}
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

export default Home