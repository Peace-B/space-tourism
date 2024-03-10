import React from 'react'
import { useState } from 'react'
import"../CSS/Destination.css"
import { destin } from '../DB/DestinationDb'


const DestinationDetails = () => {
    const [items] = useState(destin);
    const [value, setValue] = useState(0);
    const {name, images, description, distance, travel} = items [value];
return (
    <div className='destination-body'>
    <h3 className='h-header'><span>01</span> PICK YOUR DESTINATION</h3>      
        <div className="destination">
            <div className="left-side-dest">
                <div className="image">
                    <img src={images} title={name} className="dest-img"alt="" />
                </div>
            </div>
            <div className="right-side-dest">
                <div className="btn-dest">
                    {items.map((item, index) => (
                    <button 
                    key={index} 
                    onClick={()=>{setValue(index);
                    }}
                    className={`${index === value && 'active'}`}
                    >{item.name.toUpperCase()}
                    </button>
                    ))}
                </div>
                <div className="title-dest">
                    <h2>{name.toUpperCase()}</h2>
                    <p className='dest-para'>{description}</p>
                </div>
                <div className="border-des"></div>
                <div className='ul-dest'>
                 <div>
                 <p>AVG. DISTANCE</p>
                <h2 className='span-dest'>{distance.toUpperCase()}</h2>
                 </div>
                    <div>
                    <p>EST. TRAVEL TIME</p>
                    <h2 className='span-dest'>{travel.toUpperCase()}</h2>
                    </div>
                </div>    
            </div>
        </div>
    </div>
  );
};

export default DestinationDetails