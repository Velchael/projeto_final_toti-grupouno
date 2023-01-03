import React from 'react';

import './index.css';

import Apprutas from './Apprutas';
import reportWebVitals from './reportWebVitals';

import { createRoot } from 'react-dom/client';
const container = document.getElementById('root');
const root = createRoot(container);
root.render(<React.StrictMode>
  <Apprutas />
</React.StrictMode>);


reportWebVitals();
