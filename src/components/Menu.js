import { Link } from "react-router-dom"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import img1 from "./images/bbq.jpg"
import img2 from "./images/briyani.jpg"
import img3 from "./images/karhai.jpg" 
import "./Men.css"
import Chickenbbq from "./menu/KHARHAI";
import Beefbbq from "./menu/BBQ";
import Muttonbbq from "./menu/BRIYANI";

 
 let Menu=()=>{

    return(
      <div className="m">
        <p > ~~~Menu~~~</p>
      <div className="h" >
  
   
 <Link  className="link"   to="bbq">
  <div className="card" style={{ width: '18rem' }}>
  <img className="card-img-top" src={img1}alt="Card image cap"/>
  <div className="card-body">
    <h5 className="card-title">bbq</h5>
</div>
</div>
</Link>




 <Link  className="link" to="briyani">
  <div className="card" style={{ width: '18rem' }}>
  <img className="card-img-top" src={img2}alt="Card image cap"/>
  <div className="card-body">
    <h5 className="card-title">briyani</h5>
</div>
</div>
</Link>


 <Link className="link"  to="kharhai">
  <div className="card" style={{ width: '18rem' }}>
  <img className="card-img-top" src={img3}alt="Card image cap"/>
  <div className="card-body">
    <h5 className="card-title">kharhai</h5>
</div>
</div>
</Link>


 </div>
 </div>
 
    )
 }
 export default Menu