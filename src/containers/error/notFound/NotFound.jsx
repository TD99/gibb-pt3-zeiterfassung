import React from 'react'
import './notFound.css';
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div>
        <h1>NotFound</h1>
        <Link to='/'>Home</Link>
    </div>
  )
}

export default NotFound;