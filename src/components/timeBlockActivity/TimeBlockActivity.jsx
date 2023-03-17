import React from 'react'
import './timeBlockActivity.css'
import {FaBell} from 'react-icons/fa';

const TimeBlockActivity = (Icon, Title, Subtitle) => (
  
    <div className='timeBlockActivity'>
        <div className='timeBlockActivity-icon'>
         {/*{this.Icon}*/}
         <FaBell icon="fa-solid fa-bell" size={80} color="white" />
         
        </div>
        <div className='timeBlockActivity-Title'>
         {/*<p>{this.Title}</p>*/}
         <h2>Pause</h2>
         
        </div>
        <div className='timeBlockActivity-subtitle'>
        {/*<p>{this.Subtitle}</p>*/}
        <p>Jetzt</p>
        </div>
    </div>
  );


export default TimeBlockActivity