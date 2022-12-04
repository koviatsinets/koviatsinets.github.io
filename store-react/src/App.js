import React from 'react'
import { BrowserRouter } from 'react-router-dom';

// import logo from './logo.svg';
import './App.css';

import { PagesLinks } from './components/PagesLinks/PagesLinks'
import { PagesRouter } from './routes/PagesRouter';

function App() {
  return (
    <BrowserRouter>
      <PagesLinks />
      <PagesRouter />
    </BrowserRouter>
  );
}

export default App;
