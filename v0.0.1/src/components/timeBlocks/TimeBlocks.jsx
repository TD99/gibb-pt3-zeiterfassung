import React from 'react'
import './timeBlocks.css'
import TimeBlockModul from '../../components/timeBlockModul/TimeBlockModul';
import TimeBlockActivity from '../timeBlockActivity/TimeBlockActivity';
import TimeBlockTime from '../timeBlockTime/TimeBlockTime';
/*const timeBlockActivityData = [
 {
   Icon: 'Icon',
   Title: 'title',
   Subtitle: 'Subtitle'
 }
];*/
                //Green    REd      Blue
const colors = ["#378D60","#8D3737","#328098" ];



const TimeBlocks = () => {
  return (
    <div className='timeBlocks'>
      <TimeBlockActivity  Title="Pause" Subtitle="Jetzt" Background={colors[2]}/>
      <TimeBlockTime Number="10" Title="Minuten übrig" Subtitle="12:45-13:15" />
  <TimeBlockModul Title="M254" Subtitle="Kurt Järmann" />   
  
  
  </div>
  )
}

export default TimeBlocks