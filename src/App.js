import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import { Provider } from "react-redux";
import store from './store/store'
import Home from './Pages/Home'
import Products from './Pages/Products'
import Cart from './Pages/Cart'
import Favorite from './Pages/Favorite'
import NavBar from "./Components/Nav/NavBar";




function App() {
  return (

    <div className="app"  >
      <Provider store={store}>
    <Router>
    <NavBar/>
    <Routes>
    <Route path="/" element={<Home/>}/>
    {/* <Route path="/products" element={<Products/>}/> */}
    <Route path="/cart" element={<Cart/>}/>
    {/* <Route path="/favorite" element={<Favorite/>}/> */}
    </Routes>
    
    
    </Router>
    </Provider>
    
    </div>
  );
}

export default App;
