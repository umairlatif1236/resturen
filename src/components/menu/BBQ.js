import img1 from "../images/chest.jpg"
import img2 from "../images/tikka.jpg"
import img3 from "../images/seekhkabab.jpg" 
import img4 from "../images/malai-boti.jpg"
import "./bbq.css"
import { Link } from "react-router-dom"
import { useContext } from "react"
import { CartContext } from "../CartContext"

let data=[
  {
  img:img1,
  tittle:"chest piece",
  price:"15$"
},
{
  img:img2,
  tittle:"tikka boti",
  price:"15$"
},
{
  img:img3,
  tittle:"seekh kabab",
  price:"15$"
},
{
  img:img4,
  tittle:"malai boti",
  price:"15$"
},
]

let Bbq=()=>{
  let globalstate=useContext(CartContext)
  let dispatch=globalstate.dispatch

    return(
        <div className="main">
    
{data.map((item)=>{
  return(<div  className="div">
  <div className="card" style={{ width: '18rem' }}>
  <img className="card-img-top" src={item.img}alt="Card image cap"/>
  <div className="card-body">
    <h5 className="card-title">{item.tittle}</h5>
    <h5 className="card-title">{item.price}</h5>
     <button className="btn" onClick={()=>{
      dispatch({type:"ADD",payload:item})
     }}> add to cart</button>
</div>
</div>
</div>)

})}



        </div>
    )
}
export default Bbq