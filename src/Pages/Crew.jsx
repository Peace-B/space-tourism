import React, { useState } from 'react'
import "../CSS/crewbody.css"
import { crews } from '../DB/CrewDb'

const Crew = () => {
  const [crewDB] = useState(crews)
  const [value, setValue] = useState(0)
  
  const {name, images, role, bio} = crews[value]
  return (
    <div className='crew-body'>
      <div className="crew">
        <div className='section-crew'>
          <div className="title-crew">
            <h1><span>02</span>MEET YOUR CREW</h1>
          </div>

          <div className="content-crew">
          <div className="left-content-crew">
            <div className='left-content-info'>
              <h2>{role.toUpperCase()}</h2>
              <h1>{name.toUpperCase()}</h1>
              <p>{bio}</p>
            </div>
            <div className='left-content-btn'>
            {crewDB.map((crew, index) => (
              <button 
              key={index}
              onClick={()=> {
                setValue(index)
              }}
              ></button>
            ))}
            </div>

          </div>
          <div className="border-line-crew">
            {/* jkkhj */}
          </div>
          <div className="right-content-crew">
            <img src={images} alt="" />
          </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Crew