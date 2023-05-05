import React from 'react'
import { ReactPropTypes } from 'react';
import './timeData.css'
const TimeData = (props) => {
  
  return (
    <div className='timedata'>
      <table className='mainRow'>
        <tbody>
      <tr >
        <th><h3>Datum</h3></th>
        <th><h3>Kurs</h3></th>
        <th><h3>Zeiterfassung</h3></th>
      </tr>
      {/*{
        props.datas.map(data => {
          return (
            <tr key={data.course}>
              <td>{data.date}</td>
              <td>{data.course}</td>
              <td>{data.timestamp}</td>
            </tr>
          )
        })
      }*/}

    
       
     
    
      </tbody>
      </table>
      
      
      </div>
    
  )
};
export default TimeData;

