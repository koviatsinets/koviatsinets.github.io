import React from 'react'
import { BrowserRouter } from 'react-router-dom';

// import logo from './logo.svg';
import './App.scss';


import { PagesRouter } from './routes/PagesRouter';
import { Header } from './components/Header/Header'
import { Footer } from './components/Footer/Footer'

function App() {
  return (
    <BrowserRouter>
      <Header />
      <main className='Content'>
        <PagesRouter />
      </main>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
