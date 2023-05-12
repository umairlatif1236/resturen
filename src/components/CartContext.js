import React,{ createContext,useReducer } from "react";
export const CartContext=createContext()

let reducer=(state,action)=>{
    if(action.type==="ADD"){
        return[...state,action.payload]

    }
    return state
    
    

}

  export  let Context=(props)=>{
    const[state,dispatch]=useReducer(reducer,[])
    const info={state,dispatch}
    return(
        <CartContext.Provider value={info}>
        {props.children}
        </CartContext.Provider>
    )

 }

    
 

 
   



