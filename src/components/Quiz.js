import React, { useState } from 'react';
import Question from './Question';

const questions = [
  {
    question: "How often do you feel overwhelmed by your emotions?",
    options: ["Never", "Rarely", "Sometimes", "Often"],
  },
  {
    question: "How well do you understand why you feel the way you do?",
    options: ["Not at all", "A little", "Somewhat", "Very well"],
  },
  {
    question: "How easily do you express your emotions to others?",
    options: ["Not at all", "With difficulty", "Somewhat easily", "Very easily"],
  },
  {
    question: "How often do you feel empathy towards others?",
    options: ["Never", "Rarely", "Sometimes", "Often"],
  },
  {
    question: "How do you handle stressful situations?",
    options: ["Very poorly", "Poorly", "Moderately well", "Very well"],
  },
  {
    question: "How often do you seek feedback from others to improve yourself?",
    options: ["Never", "Rarely", "Sometimes", "Often"],
  },
  {
    question: "How well do you manage your time and priorities?",
    options: ["Very poorly", "Poorly", "Moderately well", "Very well"],
  },
  {
    question: "How often do you set personal goals and strive to achieve them?",
    options: ["Never", "Rarely", "Sometimes", "Often"],
  },
  {
    question: "How well do you recognize and understand other people's emotions?",
    options: ["Not at all", "A little", "Somewhat", "Very well"],
  },
  {
    question: "How often do you find yourself thinking about your emotions?",
    options: ["Never", "Rarely", "Sometimes", "Often"],
  },
  {
    question: "How well do you handle criticism?",
    options: ["Very poorly", "Poorly", "Moderately well", "Very well"],
  },
  {
    question: "How often do you find it easy to calm yourself down when you are upset?",
    options: ["Never", "Rarely", "Sometimes", "Often"],
  },
  {
    question: "How often do you find it easy to motivate yourself?",
    options: ["Never", "Rarely", "Sometimes", "Often"],
  },
  {
    question: "How well do you handle conflicts with others?",
    options: ["Very poorly", "Poorly", "Moderately well", "Very well"],
  },
  {
    question: "How often do you reflect on your actions to learn from them?",
    options: ["Never", "Rarely", "Sometimes", "Often"],
  },
];

const Quiz = ({ setScore }) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState([]);

  const handleAnswer = (answer) => {
    setAnswers([...answers, answer]);
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      calculateScore();
    }
  };

  const calculateScore = () => {
    const total = answers.reduce((acc, answer) => acc + answer, 0);
    setScore(total);
  };

  return (
    <div>
      {currentQuestion < questions.length && (
        <Question
          data={questions[currentQuestion]}
          onAnswer={handleAnswer}
        />
      )}
    </div>
  );
};

export default Quiz;
