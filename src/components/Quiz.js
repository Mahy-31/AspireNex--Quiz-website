// src/components/Quiz.js
import React, { useState } from 'react';
import '../styles/Quiz.css';

const Quiz = ({ quiz }) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState('');
  const [score, setScore] = useState(0);

  const handleAnswerSubmit = () => {
    if (selectedOption === quiz[currentQuestionIndex].answer) {
      setScore(score + 1);
    }
    setSelectedOption('');
    setCurrentQuestionIndex(currentQuestionIndex + 1);
  };

  return (
    <div className='quiz'>
      <div className='content'>
        <h1>Take Quiz</h1>
        <div className='qs'>
          {currentQuestionIndex < quiz.length ? (
            <div>
              <p>{quiz[currentQuestionIndex].question}</p>
              <ul>
                {quiz[currentQuestionIndex].options.map((option, index) => (
                  <li key={index}>
                    <label>
                      <input
                        type="radio"
                        name="option"
                        value={option}
                        checked={selectedOption === option}
                        onChange={(e) => setSelectedOption(e.target.value)}
                      />
                      {option}
                    </label>
                  </li>
                ))}
              </ul>
              <button onClick={handleAnswerSubmit}>Submit Answer</button>
            </div>
          ) : (
            <div>
              <h2>Your score: {score} / {quiz.length}</h2>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Quiz;
