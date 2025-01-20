import React from 'react';
//import './Question.css'; // Add this line to import the CSS file

const Question = ({ data, onAnswer }) => {
  const handleClick = (index) => {
    onAnswer(index + 1); // Adjust the score based on answer index
  };

  return (
    <div className="question-container">
      <h2>{data.question}</h2>
      {data.options.map((option, index) => (
        <button key={index} onClick={() => handleClick(index)}>
          {option}
        </button>
      ))}
    </div>
  );
};

export default Question;
