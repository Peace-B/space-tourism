import React, { useState, useEffect, useRef } from 'react'
import '../CSS/Nav.css'
import { Link } from 'react-router-dom'
import logo from '../assets/image/logo.svg'
import hamburger from '../assets/image/icon-hamburger.svg'
import close from '../assets/image/icon-close.svg'
import "../CSS/SideNav.css"

const SideNav = () => {
  const [menu, setMenu] = useState(false)

  let menuRef = useRef();

  useEffect(()=>{
    document.addEventListener('mousedown', (event)=>{
      if(!menuRef.current.contains(event.target)){
        setMenu(false)
      }
    })
  })

 console.log(menu);
  return (
    <div className='sidebar' ref={menuRef}>
      <div className="left-logo">
        <img src={logo} alt="logo" />
      </div>
      <div className="menu">
        <div className="img-side" onClick={()=>{
          setMenu(!menu)
        }}>
          {menu ? (<img src={close} alt="" className='open'/>) : (<img src={hamburger} alt="" className='close' />)}
        
        
        </div>
       {menu ?  (<div className="side">
        <ul>
          <Link to='/' style={{textDecoration:"none"}}>
            <div className="side-btn">
              <li><span>00</span>HOME</li>
            </div>
          </Link>
          <Link to='/destination' style={{textDecoration:"none"}}>
            <div className="side-btn">
              <li><span>01</span>DESTINATION</li>
            </div>
          </Link>
          <Link to='/crew' style={{textDecoration:"none"}}>
            <div className="side-btn">
              <li><span>02</span>CREW</li>
            </div>
          </Link>
          <Link to='/technology' style={{textDecoration:"none"}}>
            <div className="side-btn">
              <li><span>03</span>TECHNOLOGY</li>
            </div>
          </Link>
        </ul>
      </div>) :
      
    (null )}
       
      </div>

      
    </div>
  )
}

export default SideNav