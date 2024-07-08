import React from 'react';
import bg from '../assets/quizhome.jpg';
import '../styles/Home.css';

const Home = () => {
  return (
    <div className='home' style={{background: `url(${bg})`}}>
            <h1>Create your own quizzes!</h1>
    </div>
  )
}

export default Home