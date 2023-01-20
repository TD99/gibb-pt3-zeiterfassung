import React from 'react'
import './timeBlockActivity.css'
const TimeBlockActivity = ({icon, title, subtitle}) => {
  return (
    <div className='timeBlockActivity'>
        <div className='timeBlockActivity-icon'>
         {icon}
        </div>
        <div className='timeBlockActivity-Title'>
         <p>{title}</p>
        </div>
        <div className='timeBlockActivity-subtitle'>
        <p>{subtitle}</p>
        </div>
    </div>
  )
}

export default TimeBlockActivity