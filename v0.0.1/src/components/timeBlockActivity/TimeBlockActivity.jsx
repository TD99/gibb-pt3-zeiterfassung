import React from 'react'
import './timeBlockActivity.css'
import {FaBell} from 'react-icons/fa';

const TimeBlockActivity = (prop) => {
    
  const {Title} = prop; 
  const {Subtitle} = prop;
  const {Background} = prop;


  return (  
    <div className='timeBlockActivity' style={{backgroundColor: Background}}>
        <div className='timeBlockActivity-icon' >
         {/*{this.Icon}*/}
         <FaBell icon="fa-solid fa-bell" size={80} color="white" />
         
        </div>
        <div className='timeBlockActivity-Title'>
         {/*<p>{this.Title}</p>*/}
         <h2>{Title}</h2>
         
        </div>
        <div className='timeBlockActivity-subtitle'>
        {/*<p>{this.Subtitle}</p>*/}
        <p>{Subtitle}</p>
        </div>
    </div>
  )

};


export default TimeBlockActivity