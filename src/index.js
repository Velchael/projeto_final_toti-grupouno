import React from 'react';

import './index.css';
import App from './App';
import Apprutas from './Apprutas';
import reportWebVitals from './reportWebVitals';

import { createRoot } from 'react-dom/client';
const container = document.getElementById('root');
const root = createRoot(container);
root.render(<React.StrictMode>
  <Apprutas />
  <App />
</React.StrictMode>);


reportWebVitals();
