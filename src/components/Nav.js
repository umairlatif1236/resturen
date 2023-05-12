import { Link } from "react-router-dom"

let Nav=()=>{


    return(
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <Link class="navbar-brand" to="/">Navbar</Link>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav mr-auto">
      <li class="nav-item active">
        <Link class="nav-link" to="contact">contact <span class="sr-only"></span></Link>
      </li>
      <li class="nav-item active">
        <Link class="nav-link" to="about">About us <span class="sr-only"></span></Link>
      </li>
      <li class="nav-item active">
        <Link class="nav-link" to="menu">Menu <span class="sr-only"></span></Link>
      </li>
      <li class="nav-item active">
        <Link class="nav-link" to="cart">cart <span class="sr-only"></span></Link>
      </li>
     
    </ul>
    
  </div>
</nav>
    )
}
export default Nav