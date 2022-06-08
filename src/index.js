import React from 'react';
import ReactDOM from 'react-dom/client';
import './assets/css/main.css';
import reportWebVitals from './reportWebVitals';
import Routing from './routes';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Routing />);

reportWebVitals();
