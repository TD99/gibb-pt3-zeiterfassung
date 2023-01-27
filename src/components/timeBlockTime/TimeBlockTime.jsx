import React from 'react'

const TimeBlockTime = (icon, title, subtitle, background) => {
  return (
    <div color={background} className='timeBlocktime'>
    <div className='timeBlockTime-icon'>
     {icon}
    </div>
    <div className='timeBlockTime-Title'>
     <p>{title}</p>
    </div>
    <div className='timeBlockTime-subtitle'>
    <p>{subtitle}</p>
    </div>
</div>
  )
}

export default TimeBlockTime