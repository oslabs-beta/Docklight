import React from 'react';
import App from './App';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import './style.css';
//import { Provider } from 'react-redux';

const container = document.getElementById('root');
const root = createRoot(container);
root.render(
  <BrowserRouter>
    {/* <Provider store={store}> */}
    <App />
    {/* </Provider> */}
  </BrowserRouter>
);