import "./form.css"
import React,{useState} from "react"
import { Link } from "react-router-dom"


let Form=()=>{

  let [name , changename]=useState()
  
  let [date , changedate]=useState()

  let namechange=(event)=>{
    changename(event.target.value)
    console.log(name)

  }
  let datechange=(event)=>{
    changedate(event.target.value)

  }
  
    return(

      <div className="form_div">
        <h3>Table reservation form</h3>
        <p> Book your table now by filling the form</p>
      <form className="form">
      <div className="form-group">
        <label className="label">Name</label>
        <input type="text" className="form-control" value={name} onChange={namechange}   placeholder="please enter your name"/>
      </div>
      <div className="form-group">
        <label className="label">Number of person</label>
        <select className="form-control">
          <option>1</option>
          <option>2</option>
          <option>3</option>
          <option>4</option>
          <option>5</option>
        </select>
      </div>
      <div className="form-group">
        <label className="label">Time slot</label>
        <select className="form-control" id="">
        <option>12PM TO 01 PM</option>
          <option>01PM TO 02 PM</option>
          <option>02PM TO 03 PM</option>
          <option>04PM TO 05 PM</option>
          <option>07PM TO 08 PM</option>
        </select>
      </div>
      <div className="form-group">
        <label className="label">select Date</label>
        <input className="form-control" type="date" value={date} onChange={datechange}   rows="3"/>
      </div>
     <Link to="reservation"> <button className="button">submit</button> </Link>
    </form>
    </div>
    )
}
export default Form