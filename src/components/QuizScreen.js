import React, { useState, useEffect, useCallback } from 'react';
import QuestionCard from './QuestionCard';
import ScoreDisplay from './ScoreDisplay';
import { fetchQuestions } from '../services/quizApi'; // Assuming this service exists

// Define a type for a question object for better readability and future type checking (if using TypeScript)
/**
 * @typedef {object} Question
 * @property {string} id - Unique identifier for the question.
 * @property {string} questionText - The text of the question.
 * @property {Array<{answerText: string, isCorrect: boolean}>} answerOptions - An array of answer options.
 */

/**
 * QuizScreen component manages the overall quiz flow.
 * It handles fetching questions, displaying them one by one,
 * processing user answers, tracking the score, and showing the final results.
 *
 * @param {object} props - The component props.
 * @param {string} [props.category='general'] - The category of questions to fetch (e.g., 'react', 'javascript', 'general').
 * @param {function} [props.onQuizEnd] - Optional callback function invoked when the quiz concludes,
 *                                       receiving the final score and total questions.
 * @param {function} [props.onRestartRequest] - Optional callback function invoked when the user requests to restart the quiz.
 */
const QuizScreen = ({ category = 'general', onQuizEnd, onRestartRequest }) => {
  /** @type {[Question[], React.Dispatch<React.SetStateAction<Question[]>>]} */
  const [questions, setQuestions] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  /**
   * Fetches quiz questions from the API based on the selected category.
   * This function is memoized using `useCallback` to prevent unnecessary re-creations
   * and ensure `useEffect` only re-runs when `category` changes.
   */
  const loadQuestions = useCallback(async () => {
    setLoading(true);
    setError(null); // Clear any previous errors
    setQuestions([]); // Clear previous questions
    setCurrentQuestionIndex(0); // Reset question index
    setScore(0); // Reset score
    setShowScore(false); // Hide score display

    try {
      // Simulate a network delay for better UX during development/testing
      // await new Promise(resolve => setTimeout(resolve, 500));
      const fetchedQuestions = await fetchQuestions(category);
      if (fetchedQuestions && fetchedQuestions.length > 0) {
        setQuestions(fetchedQuestions);
      } else {
        setError(`No questions found for category: "${category}".`);
      }
      setLoading(false);
    } catch (err) {
      console.error('Failed to fetch quiz questions:', err);
      setError('Failed to load questions. Please check your network or try again later.');
      setLoading(false);
    }
  }, [category]); // Dependency on category to refetch if category changes

  // Effect hook to load questions when the component mounts or `loadQuestions` changes (due to `category` change)
  useEffect(() => {
    loadQuestions();
  }, [loadQuestions]);

  /**
   * Handles the user's answer selection for the current question.
   * Updates the score and advances to the next question or the score screen.
   *
   * @param {boolean} isCorrect - True if the selected answer is correct, false otherwise.
   */
  const handleAnswerOptionClick = (isCorrect) => {
    // Update score immediately based on the current answer
    const newScore = isCorrect ? score + 1 : score;
    setScore(newScore);

    const nextQuestionIndex = currentQuestionIndex + 1;

    if (nextQuestionIndex < questions.length) {
      setCurrentQuestionIndex(nextQuestionIndex);
    } else {
      // All questions answered, show the score
      setShowScore(true);
      // Notify parent component about the quiz end with the final score
      if (onQuizEnd) {
        onQuizEnd(newScore, questions.length);
      }
    }
  };

  /**
   * Resets the quiz state to allow the user to start over.
   * This will re-fetch questions for a fresh start.
   */
  const handleRestartQuiz = () => {
    // Reset all relevant state variables
    setCurrentQuestionIndex(0);
    setScore(0);
    setShowScore(false);
    setError(null); // Clear any previous errors
    // Re-fetch questions to ensure a fresh set or order if applicable
    loadQuestions();
    // Notify parent component that a restart is requested
    if (onRestartRequest) {
      onRestartRequest();
    }
  };

  // --- Render Logic ---

  if (loading) {
    return (
      <div className="quiz-screen quiz-screen--loading" aria-live="polite">
        <p>Loading questions for "{category}"...</p>
        {/* A simple CSS spinner for visual feedback */}
        <div className="spinner" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="quiz-screen quiz-screen--error" role="alert">
        <p className="error-message">{error}</p>
        <button onClick={handleRestartQuiz} className="btn btn-primary">
          Try Again
        </button>
        {/* Potentially add a button to go back to category selection if `onRestartRequest` handles it */}
      </div>
    );
  }

  if (questions.length === 0 && !loading && !error) {
    // This case should ideally be caught by the error state if `fetchQuestions` returns empty
    // but serves as a fallback or explicit message if the API returns an empty array without error.
    return (
      <div className="quiz-screen quiz-screen--no-questions">
        <p>No questions available for the selected category: "{category}".</p>
        <button onClick={handleRestartQuiz} className="btn btn-primary">
          Try Another Category
        </button>
      </div>
    );
  }

  return (
    <div className="quiz-screen">
      {showScore ? (
        <ScoreDisplay
          score={score}
          totalQuestions={questions.length}
          onRestartQuiz={handleRestartQuiz}
        />
      ) : (
        <QuestionCard
          question={questions[currentQuestionIndex]}
          questionNumber={currentQuestionIndex + 1}
          totalQuestions={questions.length}
          onAnswerClick={handleAnswerOptionClick}
        />
      )}
    </div>
  );
};

export default QuizScreen;