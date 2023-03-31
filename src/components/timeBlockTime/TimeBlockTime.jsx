import React from 'react'
import './timeBlockTime.css'
const TimeBlockTime = (prop) => {

  const {Number} = prop;
  const {Title} = prop; 
  const {Subtitle} = prop;


  return (
  
    <div className='timeBlockTime'>
    <div className='timeBlockTime-Time'>
    
    <h1>{Number}</h1>
    </div>
    <div className='timeBlockTime-Title'>
     <h2>{Title}</h2>
    </div>
    <div className='timeBlockTime-subtitle'>
    <p>{Subtitle}</p>
    </div>
</div>
  )
  };


export default TimeBlockTime