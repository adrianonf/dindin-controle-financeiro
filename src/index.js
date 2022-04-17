import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import MainRoutes from './routes';
import { BrowserRouter } from 'react-router-dom';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);


root.render(
  <React.StrictMode>
    <BrowserRouter>
      <MainRoutes />
    </BrowserRouter>
  </React.StrictMode>  
);


