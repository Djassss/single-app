import {  BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import React from 'react';
import Main from './components/Main';
import Game from './components/Game';
import Header from './components/Header';


import './styles/app.scss';
import './styles/main.scss';
import './styles/game.scss';
import './styles/header.scss';

const App = () => {
  return (
    <Router>
      <Routes>
        {/* <Route path='*' element={<Main />} /> */}
        <Route path='*' element={<Game />} />
      </Routes>
    </Router>
  );
}

export default App;
