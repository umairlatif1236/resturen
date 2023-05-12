
import './App.css';
import Cover from "./Cover";

import React,{ useEffect ,useContext , createContext } from 'react'; 
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './/Home';
import Modal from './Modal';
import Nav from './Nav';
import About from './About';
import Briyani from './menu/BRIYANI';
import Kharhai from './menu/KHARHAI';
import Bbq from './menu/BBQ';
import Context, { CartProvider  } from "./CartContext.js"
import Addtocart from './Addtocart';
import Menu from './Menu';




function App(props) {
 
  return (
    <div className="App">
      {console.log(props)}

   <Nav/>
  
<Routes>

        <Route path="/" element={<Home/>}/>
        <Route path="bbq" element={<Bbq/>}/>
        <Route path="briyani" element={<Briyani/>}/>
        <Route path="kharhai" element={<Kharhai />}/>
        <Route path="menu" element={<Menu/>}/>
        <Route path='cart' element={<Addtocart/>}/>
        
    
        
        
         
       
      </Routes>
      
   
    </div>
  );
}

export default App;
