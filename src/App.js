import React, { useState } from 'react';
import Quiz from './components/Quiz';
import Result from './components/Result';
import './App.css';

const App = () => {
  const [score, setScore] = useState(null);

  return (
    <div className="App">
      <h1>EQ Quiz</h1>
      {score === null ? (
        <Quiz setScore={setScore} />
      ) : (
        <Result score={score} />
      )}
    </div>
  );
};

export default App;
