import React from 'react'

const TimeBlockTime = (Number, title, subtitle, background) => (
  
    <div color={background} className='timeBlocktime'>
    <div className='timeBlockTime-icon'>
     <p>{Number}</p>

    </div>
    <div className='timeBlockTime-Title'>
     <p>{title}</p>
    </div>
    <div className='timeBlockTime-subtitle'>
    <p>{subtitle}</p>
    </div>
</div>
  );


export default TimeBlockTime