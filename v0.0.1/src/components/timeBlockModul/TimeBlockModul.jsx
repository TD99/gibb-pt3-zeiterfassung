import React from 'react'
import './timeBlockModul.css'
import {FaSchool} from 'react-icons/fa';



const TimeBlockModul = (prop)  => {
  
  const {Title} = prop;
  const {Subtitle} = prop;
  

  
  return (
    <div className='timeBlockModul'>
    <div className='timeBlockModul-icon'>
    <FaSchool icon="fa-solid fa-school" color='#DDDEE3' size={80}/>
     
    </div>
    <div className='timeBlockModul-Title'>
     <h2>{Title}</h2>
    </div>
    <div className='timeBlockModul-subtitle'>
    <p>{Subtitle}</p>
    </div>
</div>
  )
  };




export default TimeBlockModul