import React, { useState } from 'react'
import "../CSS/tech.css"
import { Techno } from "../DB/TechnologyDb"



const Technology = () => {
  const [Tech] = useState(Techno);
  const [value, setValue] = useState(0);
  const {name, images, description} = Tech[value]

  return (
    <div className='technology-body'>
    <div className="technology-con">
    <div className="tech-container">
      <div className="title-tech">
        <h3><span>03</span>SPACE LAUNCH 101</h3>
      </div>

      <div className="tech-content">
        <div className="left-content-tech">
          <div className="left-button">
             {Tech.map((techbtn, index) =>(
               <button key={index}
               onClick={() =>{
                setValue(index)
               }}
               >{index + 1}</button>
             ))}
          </div>

          <div className="left-content">
            <h5>THE TERMINOLOGY...</h5>
            <h1>{name.toUpperCase()}</h1>
            <p>{description}</p>
          </div>
        </div>

         <div className="right-content-tech">
           <img src={images.portrait} alt=""   className='vehicleimg'/>
           <img src={images.landscape} alt=""   className='vehicleland'/>
         </div>
      </div>
    </div>
    </div>
    </div>
  )
}

export default Technology