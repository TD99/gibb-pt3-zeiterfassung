import React from 'react'
import './timeBlockActivity.css'
const TimeBlockActivity = (Icon, Title, Subtitle) => (
  
    <div className='timeBlockActivity'>
        <div className='timeBlockActivity-icon'>
         {/*{this.Icon}*/}
         <p>Activity</p>
         
        </div>
        <div className='timeBlockActivity-Title'>
         {/*<p>{this.Title}</p>*/}
         
        </div>
        <div className='timeBlockActivity-subtitle'>
        {/*<p>{this.Subtitle}</p>*/}
        </div>
    </div>
  );


export default TimeBlockActivity