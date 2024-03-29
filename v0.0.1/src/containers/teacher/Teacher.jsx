import React, {useReducer, useEffect} from 'react';
import './teacher.css';
import {Header, Blocks} from '../../components';
import { useLocation } from 'react-router-dom';

//const [,forceUpdate] = useReducer(x => x + 1, 0);

//const location = useLocation();
/*
useEffect(() => {
 forceUpdate()
}, [location])*/

const Teacher = () => {
  const data = [
    {
      displayName: 'INF2021G'
    },
    {
      displayName: 'Praxistraining'
    }
  ];
  return (
    <div className="teacher">
      <Header />
      <Blocks data={data} />
    </div>
  )
} 

export default Teacher;