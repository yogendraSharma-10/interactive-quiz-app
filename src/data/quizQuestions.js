/**
 * @file src/data/quizQuestions.js
 * @description Static data for quiz questions. In a production environment,
 * these would typically be fetched from a backend API (e.g., via src/services/quizApi.js).
 * This file serves as a local mock data source for development and demonstration.
 *
 * Each question object includes:
 * - id: A unique identifier for the question.
 * - category: The category the question belongs to.
 * - question: The text of the question.
 * - options: An array of possible answers.
 * - correctAnswer: The correct answer string.
 * - difficulty: An optional indicator of the question's difficulty.
 */

const quizQuestions = [
  {
    id: 'q1_tech_react',
    category: 'Technology',
    question: 'What is the primary library used for building user interfaces in this application?',
    options: ['Angular', 'Vue.js', 'React', 'Svelte'],
    correctAnswer: 'React',
    difficulty: 'easy',
  },
  {
    id: 'q2_tech_js',
    category: 'Technology',
    question: 'Which JavaScript keyword is used to declare a constant variable?',
    options: ['var', 'let', 'const', 'static'],
    correctAnswer: 'const',
    difficulty: 'easy',
  },
  {
    id: 'q3_history_ww2',
    category: 'History',
    question: 'When did World War II officially end?',
    options: ['1942', '1945', '1950', '1939'],
    correctAnswer: '1945',
    difficulty: 'medium',
  },
  {
    id: 'q4_science_chem',
    category: 'Science',
    question: 'What is the chemical symbol for water?',
    options: ['O2', 'H2O', 'CO2', 'NaCl'],
    correctAnswer: 'H2O',
    difficulty: 'easy',
  },
  {
    id: 'q5_geography_capital',
    category: 'Geography',
    question: 'What is the capital city of Australia?',
    options: ['Sydney', 'Melbourne', 'Canberra', 'Perth'],
    correctAnswer: 'Canberra',
    difficulty: 'medium',
  },
  {
    id: 'q6_programming_oop',
    category: 'Programming',
    question: 'Which of the following is NOT an OOP principle?',
    options: ['Encapsulation', 'Inheritance', 'Polymorphism', 'Duplication'],
    correctAnswer: 'Duplication',
    difficulty: 'medium',
  },
  {
    id: 'q7_literature_author',
    category: 'Literature',
    question: 'Who wrote "To Kill a Mockingbird"?',
    options: ['F. Scott Fitzgerald', 'Harper Lee', 'Ernest Hemingway', 'Mark Twain'],
    correctAnswer: 'Harper Lee',
    difficulty: 'easy',
  },
  {
    id: 'q8_film_director',
    category: 'Film',
    question: 'Which director is known for films like "Pulp Fiction" and "Kill Bill"?',
    options: ['Steven Spielberg', 'Martin Scorsese', 'Quentin Tarantino', 'Christopher Nolan'],
    correctAnswer: 'Quentin Tarantino',
    difficulty: 'easy',
  },
  {
    id: 'q9_music_genre',
    category: 'Music',
    question: 'Which musical genre originated in the late 1960s and early 1970s, characterized by heavy guitar riffs and powerful vocals?',
    options: ['Jazz', 'Blues', 'Heavy Metal', 'Country'],
    correctAnswer: 'Heavy Metal',
    difficulty: 'medium',
  },
  {
    id: 'q10_sports_olympics',
    category: 'Sports',
    question: 'How often are the Summer Olympic Games held?',
    options: ['Every 2 years', 'Every 3 years', 'Every 4 years', 'Every 5 years'],
    correctAnswer: 'Every 4 years',
    difficulty: 'easy',
  },
  {
    id: 'q11_tech_frontend',
    category: 'Technology',
    question: 'Which of these is a CSS preprocessor?',
    options: ['TypeScript', 'Babel', 'Sass', 'Webpack'],
    correctAnswer: 'Sass',
    difficulty: 'medium',
  },
  {
    id: 'q12_programming_data_structure',
    category: 'Programming',
    question: 'What data structure uses LIFO (Last In, First Out) principle?',
    options: ['Queue', 'Stack', 'Array', 'Linked List'],
    correctAnswer: 'Stack',
    difficulty: 'medium',
  },
  {
    id: 'q13_science_physics',
    category: 'Science',
    question: 'What is the force that pulls objects towards the center of the Earth?',
    options: ['Magnetism', 'Friction', 'Gravity', 'Tension'],
    correctAnswer: 'Gravity',
    difficulty: 'easy',
  },
  {
    id: 'q14_history_ancient',
    category: 'History',
    question: 'Which ancient civilization built the pyramids of Giza?',
    options: ['Roman', 'Greek', 'Egyptian', 'Mayan'],
    correctAnswer: 'Egyptian',
    difficulty: 'easy',
  },
  {
    id: 'q15_geography_continent',
    category: 'Geography',
    question: 'Which continent is the Amazon Rainforest primarily located in?',
    options: ['Africa', 'Asia', 'South America', 'North America'],
    correctAnswer: 'South America',
    difficulty: 'easy',
  },
  {
    id: 'q16_programming_web_protocol',
    category: 'Programming',
    question: 'What protocol is commonly used for secure communication over a computer network?',
    options: ['HTTP', 'FTP', 'SMTP', 'HTTPS'],
    correctAnswer: 'HTTPS',
    difficulty: 'medium',
  },
  {
    id: 'q17_tech_database',
    category: 'Technology',
    question: 'Which of these is a NoSQL database?',
    options: ['MySQL', 'PostgreSQL', 'MongoDB', 'Oracle DB'],
    correctAnswer: 'MongoDB',
    difficulty: 'hard',
  },
  {
    id: 'q18_literature_playwright',
    category: 'Literature',
    question: 'Who is often considered the greatest writer in the English language?',
    options: ['Charles Dickens', 'William Shakespeare', 'Jane Austen', 'George Orwell'],
    correctAnswer: 'William Shakespeare',
    difficulty: 'easy',
  },
  {
    id: 'q19_science_biology',
    category: 'Science',
    question: 'What is the powerhouse of the cell?',
    options: ['Nucleus', 'Mitochondria', 'Ribosome', 'Endoplasmic Reticulum'],
    correctAnswer: 'Mitochondria',
    difficulty: 'easy',
  },
  {
    id: 'q20_programming_version_control',
    category: 'Programming',
    question: 'What is the most widely used version control system?',
    options: ['SVN', 'Mercurial', 'Git', 'Perforce'],
    correctAnswer: 'Git',
    difficulty: 'easy',
  },
];

export default quizQuestions;