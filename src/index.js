import React from 'react';
import { createRoot } from 'react-dom/client';  // Import createRoot
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.min.css';

// Create a root using createRoot
const root = createRoot(document.getElementById('root'));

// Render your app using the root
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

serviceWorker.unregister();
