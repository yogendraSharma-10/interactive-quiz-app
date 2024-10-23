import axios from 'axios';
import localQuizData from '../data/quizQuestions'; // Fallback local data

/**
 * @file This service handles all API interactions related to fetching quiz questions
 * and potentially other quiz-related operations like submitting scores or fetching categories.
 * It supports fetching from an external API endpoint or falling back to local mock data.
 * This design allows for easy transition between development with mock data and
 * production with a live backend service (e.g., a dedicated Quiz Microservice
 * or a Content Management System within the larger interconnected system).
 */

// Base URL for the Quiz API.
// This environment variable should be configured in your .env file.
// Example: REACT_APP_QUIZ_API_BASE_URL = 'https://api.my-learning-platform.com/quiz-service/v1'
// This could be part of a larger 'Learning Platform' or 'Content Service' microservice
// that also serves the AI-Powered Content Summarizer or Collaborative Code Editor.
const QUIZ_API_BASE_URL = process.env.REACT_APP_QUIZ_API_BASE_URL;

// Axios instance for consistent configuration (e.g., headers, error handling)
const quizApiClient = axios.create({
  baseURL: QUIZ_API_BASE_URL,
  timeout: 10000, // 10 seconds timeout for all requests
  headers: {
    'Content-Type': 'application/