import * as React from 'react';
import App from './App';
import { createRoot, Root } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import './style.css';

const container: HTMLElement = document.getElementById('root')!;
const root: Root  = createRoot(container);
root.render(
  <BrowserRouter>
    {/* <Provider store={store}> */}
    <App />
    {/* </Provider> */}
  </BrowserRouter>
);