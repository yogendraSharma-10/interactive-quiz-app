import React from 'react';
import ReactDOM from 'react-dom';
import './index.css'; // Assuming a global index.css for basic styles, or App.css for main app styles
import App from './App';
import reportWebVitals from './reportWebVitals'; // For performance monitoring

/**
 * The main entry point for the React application.
 * This file is responsible for rendering the root `App` component into the DOM.
 */

// Find the root DOM element where the React application will be mounted.
const rootElement = document.getElementById('root');

// Use ReactDOM.render to mount the App component.
// React.StrictMode is a tool for highlighting potential problems in an application.
// It activates additional checks and warnings for its descendants.
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  rootElement
);

// If you're using React 18+, you would use `createRoot` instead:
// import { createRoot } from 'react-dom/client';
// const root = createRoot(rootElement);
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();