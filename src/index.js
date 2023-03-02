import { App } from 'App';
import React from 'react';
import ReactDOM from 'react-dom/client';

import './index.css';

console.log('Creating DOM');

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
