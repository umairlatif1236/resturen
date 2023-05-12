import img1 from "../images/briyani.jpeg"
import img2 from "../images/beef_briyani.jpg"
import img3 from "../images/mutton_briyani.jpg"
import img4 from "../images/pulao.jpg"
import img5 from "../images/beefpulao.webp"
import { Link } from "react-router-dom"
import  React,{ useState,createContext, useContext } from "react"

import App from "../App"
import  Context, {CartContext} from "../CartContext"
import Addtocart from "../Addtocart"

let item=[
  {
  img:img1,
  tittle:'chicken briyani',
  price:"5$"
},
{
  img:img2,
  tittle:'beef briyani',
  price:"10$"
},
{
  img:img3,
  tittle:'mutton briyani',
  price:"5$"
},
{
  img:img4,
  tittle:'mutton pulao',
  price:"7$"
},
{
  img:img5,
  tittle:'beef briyani',
  price:"7$"
}
]



let Briyani=()=>{
  let globalstate=useContext(CartContext)
  let dispatch=globalstate.dispatch
  console.log(globalstate)
  return(
    < div className="main">
  
  {
    item.map((data)=>{
      return(
       
  
     
        <div  className="div">
    <div className="card" style={{ width: '18rem' }}>
    <img className="card-img-top" src={data.img}alt="Card image cap"/>
    <div className="card-body">
      <h5 className="card-title">{data.tittle}</h5>
      <h6 className="card-title">{data.price}</h6>
       <button className="btn" onClick={()=>{ dispatch({type:"ADD",payload:data})}}> Add to cart</button>
  </div>
  </div>
  </div>

      )

    })
  }
    </div>
  )
}
  
  
    
export default Briyani



