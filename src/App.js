import React from 'react'
import { BrowserRouter } from 'react-router-dom';
import './App.scss';
// import logo from './logo.svg';

import { PagesRouter } from './routes/PagesRouter';
import { HeaderPanel } from './components/HeaderPanel/HeaderPanel'
import { NavBar } from './components/NavBar/NavBar'
import { Footer } from './components/Footer/Footer'

function App() {
  return (
    <BrowserRouter>
      <header className='Header'>
        <HeaderPanel />
        <NavBar />
      </header>
      <main className='Main'>
        <PagesRouter />
      </main>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
