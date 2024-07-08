import React, { useState } from 'react';
import '../styles/QuizBuilder.css';

const QuizBuilder = ({ onQuizSubmit }) => {
  const [questions, setQuestions] = useState([]);
  const [currentQuestion, setCurrentQuestion] = useState('');
  const [currentOptions, setCurrentOptions] = useState(['', '', '', '']);
  const [currentAnswer, setCurrentAnswer] = useState('');

  const handleOptionChange = (index, value) => {
    const newOptions = [...currentOptions];
    newOptions[index] = value;
    setCurrentOptions(newOptions);
  };

  const addQuestion = () => {
    if (currentQuestion && currentOptions.every(option => option) && currentAnswer) {
      setQuestions([...questions, { question: currentQuestion, options: currentOptions, answer: currentAnswer }]);
      setCurrentQuestion('');
      setCurrentOptions(['', '', '', '']);
      setCurrentAnswer('');
    }
  };

  const handleSubmit = () => {
    onQuizSubmit(questions);
    setQuestions([]);
  };

  return (
    <div className='quizb'>
      <h1>Create Quiz</h1>
      <input
        className='question'
        type="text"
        placeholder="Question"
        value={currentQuestion}
        onChange={(e) => setCurrentQuestion(e.target.value)}
      />
      <div className='grid-container'>
        {currentOptions.map((option, index) => (
          <div className='ans'>
            <input
              key={index}
              type="text"
              placeholder={`Option ${index + 1}`}
              value={option}
              onChange={(e) => handleOptionChange(index, e.target.value)}
            />
          </div>
        ))}
      </div>
      <input
        type="text"
        placeholder="Correct Answer"
        value={currentAnswer}
        onChange={(e) => setCurrentAnswer(e.target.value)}
      />
      <div className='buttons'>
        <button onClick={addQuestion}>Add Question</button>
        <button onClick={handleSubmit}>Submit Quiz</button>
      </div>
      <div>
        <h2>Questions</h2>
        <div className='crosscheck'>
          <ul>
            {questions.map((q, index) => (
              <li key={index}>
                Q: {q.question}
                <ul>
                  {q.options.map((option, idx) => (
                    <li key={idx}>{option}</li>
                  ))}
                </ul>
                A: {q.answer}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default QuizBuilder;
