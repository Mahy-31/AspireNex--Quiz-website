// src/App.js
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import QuizBuilder from './components/quizBuilder';
import Quiz from './components/Quiz';
import Navbar from './components/Navbar';
import Home from './components/Home';

const App = () => {
  const [quiz, setQuiz] = useState([]);

  const handleQuizSubmit = (createdQuiz) => {
    setQuiz(createdQuiz);
  };

  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/quizbuilder" element={<QuizBuilder onQuizSubmit={handleQuizSubmit} />} />
          <Route path="/quiz" element={<Quiz quiz={quiz} />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
