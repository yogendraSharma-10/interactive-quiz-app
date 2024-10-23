import React from 'react';
import PropTypes from 'prop-types';
import '../App.css'; // Assuming App.css contains general styles or specific styles for components

/**
 * QuestionCard Component
 *
 * Displays a single quiz question, its multiple-choice options, and handles user interaction.
 * Provides visual feedback for selected answers and correct/incorrect answers based on props.
 *
 * @param {object} props - The component's properties.
 * @param {string} props.question - The text of the quiz question.
 * @param {string[]} props.options - An array of possible answer options.
 * @param {string} props.correctAnswer - The correct answer for the question.
 * @param {function(string): void} props.onAnswerSelected - Callback function triggered when an answer option is clicked.
 * @param {string | null} props.selectedAnswer - The answer currently selected by the user, or null if none.
 * @param {boolean} props.showFeedback - A flag to indicate whether to display correct/incorrect feedback.
 * @param {number} props.questionNumber - The current question's index (1-based) for display.
 * @param {number} props.totalQuestions - The total number of questions in the quiz.
 */
const QuestionCard = ({
  question,
  options,
  correctAnswer,
  onAnswerSelected,
  selectedAnswer,
  showFeedback,
  questionNumber,
  totalQuestions,
}) => {
  /**
   * Determines the CSS class for an answer option based on its state.
   *
   * @param {string} option - The current answer option being evaluated.
   * @returns {string} The CSS class string for the option button.
   */
  const getOptionClassName = (option) => {
    let className = 'quiz-option-button';

    // If feedback is shown, highlight correct/incorrect answers
    if (showFeedback) {
      if (option === correctAnswer) {
        className += ' correct-answer'; // Always highlight the correct answer
      } else if (option === selectedAnswer && option !== correctAnswer) {
        className += ' incorrect-answer'; // Highlight user's incorrect choice
      }
    } else if (option === selectedAnswer) {
      // If no feedback yet, just highlight the user's selection
      className += ' selected-answer';
    }

    return className;
  };

  return (
    <div className="question-card">
      <p className="question-number">
        Question {questionNumber} of {totalQuestions}
      </p>
      <h2 className="question-text">{question}</h2>
      <div className="options-container">
        {options.map((option, index) => (
          <button
            key={index}
            className={getOptionClassName(option)}
            onClick={() => onAnswerSelected(option)}
            disabled={!!selectedAnswer && !showFeedback} // Disable after selection, re-enable if feedback is not yet shown (e.g., for review)
            aria-pressed={option === selectedAnswer}
            aria-label={`Option ${index + 1}: ${option}`}
          >
            {option}
          </button>
        ))}
      </div>
    </div>
  );
};

QuestionCard.propTypes = {
  question: PropTypes.string.isRequired,
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  correctAnswer: PropTypes.string.isRequired,
  onAnswerSelected: PropTypes.func.isRequired,
  selectedAnswer: PropTypes.string, // Can be null if no answer is selected
  showFeedback: PropTypes.bool.isRequired,
  questionNumber: PropTypes.number.isRequired,
  totalQuestions: PropTypes.number.isRequired,
};

QuestionCard.defaultProps = {
  selectedAnswer: null,
};

export default QuestionCard;