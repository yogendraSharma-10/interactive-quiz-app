import React from 'react';
import PropTypes from 'prop-types';
import '../App.css'; // Assuming global styles or a dedicated CSS module

/**
 * @typedef {object} ScoreDisplayProps
 * @property {number} score - The number of correct answers.
 * @property {number} totalQuestions - The total number of questions in the quiz.
 * @property {function} onRestartQuiz - Callback function to restart the quiz.
 */

/**
 * ScoreDisplay Component
 *
 * Displays the user's final score after completing a quiz and provides an option to restart.
 * It also includes a motivational message based on the score and links to other related services.
 *
 * @param {ScoreDisplayProps} props - The properties for the component.
 * @returns {JSX.Element} The rendered score display component.
 */
const ScoreDisplay = ({ score, totalQuestions, onRestartQuiz }) => {
  // Calculate the percentage score
  const percentage = totalQuestions > 0 ? Math.round((score / totalQuestions) * 100) : 0;

  // Determine a motivational message based on the score
  let message = '';
  if (percentage === 100) {
    message = "Perfect score! You're a quiz master!";
  } else if (percentage >= 75) {
    message = "Excellent job! You really know your stuff!";
  } else if (percentage >= 50) {
    message = "Good effort! A little more practice and you'll be a pro!";
  } else {
    message = "Keep practicing! Every quiz is a chance to learn something new!";
  }

  return (
    <div className="score-display-container">
      <h2 className="score-display-title">Quiz Completed!</h2>
      <p className="score-display-score">
        You scored <span className="score-value">{score}</span> out of <span className="total-questions-value">{totalQuestions}</span>!
      </p>
      <p className="score-display-percentage">
        That's <span className="percentage-value">{percentage}%</span>!
      </p>
      <p className="score-display-message">{message}</p>

      <button
        onClick={onRestartQuiz}
        className="btn btn-primary score-display-restart-btn"
        aria-label="Restart Quiz"
      >
        Play Again
      </button>

      {/* Cross-Project Context: Suggest exploring other services */}
      <div className="score-display-explore-more">
        <h3>Explore More!</h3>
        <p>Liked this quiz? Check out our other services:</p>
        <ul>
          <li><a href="/markdown-previewer" target="_blank" rel="noopener noreferrer">Markdown Previewer</a></li>
          <li><a href="/content-summarizer" target="_blank" rel="noopener noreferrer">AI-Powered Content Summarizer</a></li>
          <li><a href="/recipe-planner" target="_blank" rel="noopener noreferrer">Recipe & Meal Planner</a></li>
          <li><a href="/blog" target="_blank" rel="noopener noreferrer">Full-Stack Blog Platform</a></li>
        </ul>
      </div>
    </div>
  );
};

/**
 * Prop Types for ScoreDisplay component.
 * Ensures that the props passed to this component are of the expected type and are required.
 */
ScoreDisplay.propTypes = {
  score: PropTypes.number.isRequired,
  totalQuestions: PropTypes.number.isRequired,
  onRestartQuiz: PropTypes.func.isRequired,
};

export default ScoreDisplay;