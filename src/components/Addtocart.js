import { useContext } from "react"
import { CartContext } from "./CartContext"
import "./cart.css"
let Addtocart=()=>{
    let data=useContext(CartContext)
    let state=data.state
    let dispatch =data.dispatch
    return(
        <div>{
        state.map((item)=>{
           return(<div className="cart">
             <img className="imgcart" src={item.img}/>
            <h3 className="data">{item.price}</h3>
            <h3 className="data"> {item.tittle}</h3>
            </div>)
        })

    }
    </div>)
}
export default Addtocart