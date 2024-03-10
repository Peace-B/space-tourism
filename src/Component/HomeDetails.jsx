import React from 'react'
import "../CSS/HomeDetails.css"
import Menu from './Nav'
import { Link } from 'react-router-dom'

const HomeDetails = () => {
  return (
        <div className='home-body'>
           <div className="home-content">
              <div className='home-writeup'>
                <h2>SO,  YOU  WANT  TO  TRAVEL  TO</h2>
                <h1>SPACE</h1>
                <p>Let's face it; if you want to go to space, you might as well genuinely go to 
                  outer space and not hover kind of on the edge of it. Well sit back, and relax 
                  because we'll give you a truly out of this world experience!</p>
              </div>
              <div className="circle">
              <Link to="/destination">
              <button>EXPLORE</button>
              </Link>
              </div>
           </div>
       </div>
  )
}

export default HomeDetails