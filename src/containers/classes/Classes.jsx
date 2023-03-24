import React, {useReducer, useEffect} from 'react';
import './classes.css';
import {Header, Blocks} from '../../components';
import { useLocation } from 'react-router-dom';

//const [,forceUpdate] = useReducer(x => x + 1, 0);

//const location = useLocation();
/*
useEffect(() => {
 forceUpdate()
}, [location])*/

const Classes = () => {
  const data = [
    {
      displayName: 'INF2021G',
      id: 0
    },
    {
      displayName: 'Praxistraining',
      id: 1
    }
  ];
  return (
    <div className="classes">
      <Header />
      <Blocks data={data} />
    </div>
  )
} 

export default Classes;