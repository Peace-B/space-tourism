import React from "react"
import { Link } from "react-router-dom";
import "../CSS/Nav.css"
import logo from "../assets/image/logo.svg"
function Menu() {

  return (
    <>
    <div className='nav-head'>
      <div className="left-side">
        <div className="logo">
          <img src={logo} alt="" />
        </div>
      </div>
      <div className="border-nav">
      </div>
      <div className="right-side">
      <ul>
       <div className="nav">
        <Link to='/' style={{textDecoration: "none",}}>
        <li><span>00</span>HOME</li>
        </Link>
      </div>

       <div className="nav">
        <Link  to='/destination' style={{textDecoration: "none"}}>
        <li><span>01</span>DESTINATION</li>
        </Link>
      </div>
       <div className="nav">
        <Link  to='/crew' style={{textDecoration: "none"}}>
        <li><span>02</span>CREW</li>
        </Link>
      </div>
       <div className="nav">
        <Link  to='/technology' style={{textDecoration: "none"}}>
        <li><span>03</span>TECHNOLOGY</li>
        </Link>
      </div>
       </ul>
      </div>
  </div>
  </>
  );
}

export default Menu;