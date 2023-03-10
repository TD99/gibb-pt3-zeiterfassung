import React from 'react'
import './timeBlocks.css'
import {TimeBlockTime, TimeBlockActivity, TimeBlockModul} from '../../components/';

const timeBlockActivityData = [
 {
   Icon: 'Icon',
   Title: 'title',
   Subtitle: 'Subtitle'
 }
];

const TimeBlocks = () => {
  return (
    <div className='timeblocks'>
      <TimeBlockActivity Icon />
      {/*<TimeBlockTime />
  <TimeBlockModul />*/}
    </div>
  )
}

export default TimeBlocks