import React from 'react';
//import './Result.css'; // Add this line to import the CSS file

const Result = ({ score }) => {
  let interpretation;
  
  if (score <= 30) {
    interpretation = "Low EQ";
  } else if (score <= 45) {
    interpretation = "Average EQ";
  } else {
    interpretation = "High EQ";
  }

  return (
    <div className="result-container">
      <h2>Your EQ Score: {score}</h2>
      <p>{interpretation}</p>
    </div>
  );
};

export default Result;
