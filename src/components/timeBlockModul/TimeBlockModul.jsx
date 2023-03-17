import React from 'react'

const TimeBlockModul = (Icon, Title, Subtitle) => (
  
    <div className='timeBlockModul'>
    <div className='timeBlockModul-icon'>
     
     <p>Modul</p>
    </div>
    <div className='timeBlockModul-Title'>
     <p>{Title}</p>
    </div>
    <div className='timeBlockModul-subtitle'>
    <p>{Subtitle}</p>
    </div>
</div>
  );

export default TimeBlockModul