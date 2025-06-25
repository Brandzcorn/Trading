import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

// Make sure you have an index.html with <div id="root"></div>
const rootElement = document.getElementById('root');
const root = ReactDOM.createRoot(rootElement);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);