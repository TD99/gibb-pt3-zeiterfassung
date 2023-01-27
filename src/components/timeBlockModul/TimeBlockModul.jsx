import React from 'react'

const TimeBlockModul = (icon, title, subtitle) => {
  return (
    <div className='timeBlockModul'>
    <div className='timeBlockModul-icon'>
     {icon}
    </div>
    <div className='timeBlockModul-Title'>
     <p>{title}</p>
    </div>
    <div className='timeBlockModul-subtitle'>
    <p>{subtitle}</p>
    </div>
</div>
  )
}

export default TimeBlockModul