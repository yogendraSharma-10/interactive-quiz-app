import React, { useState, useEffect, useCallback } from 'react';
import QuizScreen from './components/QuizScreen';
import ScoreDisplay from './components/ScoreDisplay';
import { fetchQuestions } from './services/quizApi'; // Service to fetch quiz questions
import './App.css';

/**
 * Defines the available quiz categories for user selection.
 * These IDs typically correspond to an external API (e.g., Open Trivia Database).
 */
const QUIZ_CATEGORIES = [
  { id: 'any', name: 'Any Category' },
  { id: '9', name: 'General Knowledge' },
  { id: '10', name: 'Entertainment: Books' },
  { id: '11', name: 'Entertainment: Film' },
  { id: '12', name: 'Entertainment: Music' },
  { id: '14', name: 'Entertainment: Television' },
  { id: '15', name: 'Entertainment: Video Games' },
  { id: '17', name: 'Science & Nature' },
  { id: '18', name: 'Science: Computers' },
  { id: '19', name: 'Science: Mathematics' },
  { id: '21', name: 'Sports' },
  { id: '22', name: 'Geography' },
  { id: '23', name: 'History' },
  { id: '24', name: 'Politics' },
  { id: '27', name: 'Animals' },
  { id: '28', name: 'Vehicles' },
];

/**
 * Defines the available quiz difficulties for user selection.
 */
const QUIZ_DIFFICULTIES = [
  { id: 'any', name: 'Any Difficulty' },
  