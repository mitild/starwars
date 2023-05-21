import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Router from './Routes/Router';
import { RouterProvider } from 'react-router-dom';
import { ShipsDataProvider } from './Context/ShipsDataProvider'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ShipsDataProvider>
      <RouterProvider router={ Router } />
    </ShipsDataProvider>
  </React.StrictMode>
);

