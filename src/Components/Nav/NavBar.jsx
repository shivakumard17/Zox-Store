import React ,{useState}from 'react'
import './NavBar.elements.css'
import {AiOutlineClose ,AiOutlineMenu} from "react-icons/ai";
// import {FaRegHeart} from "react-icons/fa";
import {BsCartDash} from "react-icons/bs";
import {NavLink} from "react-router-dom";
import {useSelector} from 'react-redux';


function NavBar() {

  const [menu,setMenu]=useState(false);
   const item=useSelector((state)=>state.cart);
  
  const menuClick=()=>{
    //  setMenu(!menu)
     setMenu(prv=>!prv);
   
  };
  
 
  

  return (
    <div className='NavBar'>

     <div className={`side_bar${menu}`}>
     <div className="side_Menu"  onClick={menuClick}>
      <p>ZOXSTORE</p>{menu?<AiOutlineClose/>:<AiOutlineMenu/>}</div>
      <div className="SideLink_Box">
            <ul>
             <NavLink className='links' onClick={menuClick} to='/'>Home</NavLink>
             <NavLink className='links' onClick={menuClick} to='/cart'>Cart</NavLink>
            </ul>
      
       </div>
      
     </div>

      <div className="nav_box">
        <div className="Left_box">
            <div className="Menu"onClick={menuClick}><AiOutlineMenu/></div>
            <p>ZOXSTORE</p>
       </div>
       <div className="Link_Box">
            <ul>
             <NavLink className='links' to='/'>Home</NavLink>
             <NavLink className='links'  to='/cart'>Cart</NavLink>
            </ul>
      
       </div>
       <div className="Cart_box">
       {/* <NavLink  to='/favorite'className="Fav"  ><FaRegHeart/></NavLink> */}
       <NavLink to='/cart'className="Cart" ><BsCartDash/><span>{item.length}</span></NavLink></div>
      </div>
    </div>
  )
}

export default NavBar