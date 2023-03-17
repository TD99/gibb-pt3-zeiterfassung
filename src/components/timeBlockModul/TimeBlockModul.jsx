import React from 'react'
import './timeBlockModul.css'
import {FaSchool} from 'react-icons/fa';

const TimeBlockModul = (Icon, Title, Subtitle) => (
  
    <div className='timeBlockModul'>
    <div className='timeBlockModul-icon'>
    <FaSchool icon="fa-solid fa-school" color='#DDDEE3' size={80}/>
     
    </div>
    <div className='timeBlockModul-Title'>
     <h2>Modul 254</h2>
    </div>
    <div className='timeBlockModul-subtitle'>
    <p>Kurt Jährmann</p>
    </div>
</div>
  );

export default TimeBlockModul