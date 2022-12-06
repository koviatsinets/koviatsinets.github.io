import React from 'react'
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './redux/store'
import './App.scss';
// import logo from './logo.svg';

import { PagesRouter } from './routes/PagesRouter';
import { HeaderPanel } from './components/HeaderPanel/HeaderPanel'
import { NavBar } from './components/NavBar/NavBar'
import { Footer } from './components/Footer/Footer'

function App() {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <header className='Header'>
          <HeaderPanel />
          <NavBar />
        </header>
        <main className='Main'>
          <PagesRouter />
        </main>
        <Footer />
      </Provider>
    </BrowserRouter>
  );
}

export default App;
