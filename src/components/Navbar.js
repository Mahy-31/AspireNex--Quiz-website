import React from 'react';
import {Link} from 'react-router-dom';
import "../styles/Navbar.css";

const Navbar = () => {
  return (
    <div className='nav'>
        <Link to="/quizBuilder">Create quiz</Link>
        <Link to="/quiz">Take quiz</Link>
        <Link to="/">Home</Link>
    </div>
  )
}

export default Navbar