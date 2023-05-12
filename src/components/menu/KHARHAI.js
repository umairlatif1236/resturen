import img1 from  "../images/chicken_karahi.jpg"
import img2 from "../images/mutton.jpg"
import img3 from "../images/beef.jpg"
import img4 from "../images/dumba.jpg"
import img5 from "../images/white-chicken.jpg"
import { Link } from "react-router-dom"
import "./bbq.css"
import { useContext } from "react"
import { CartContext } from "../CartContext"
let data=[
  {
  img:img1,
  tittle:"chicken karhai",
  price:"15$"
},
{
  img:img2,
  tittle:"mutton karhai",
  price:"15$"
},
{
  img:img3,
  tittle:"beef karhai",
  price:"15$"
}
,
{
  img:img4,
  tittle:"dumba karhai",
  price:"15$"
},
{
  img:img5,
  tittle:" whitechicken karhai",
  price:"15$"
}

]



let Kharhai=()=>{
  let globalstate=useContext(CartContext)
  let dispatch=globalstate.dispatch

    return(
       < div className="main">
        {
          data.map((item)=>{
            return(
              <div>
                  <div  className="div">
    <div className="card" style={{ width: '18rem' }}>
    <img className="card-img-top" src={item.img}alt="Card image cap"/>
    <div className="card-body">
      <h5 className="card-title">{item.tittle}</h5>
      <h5 className="card-title">{item.price}</h5>
      <button className="btn" onClick={()=>{ dispatch({type:"ADD",payload:item})}}> add to cart</button>
  </div>
  </div>
  </div>
                </div>
            )
          } )
      
}
</div>
  
    )
}
export default Kharhai