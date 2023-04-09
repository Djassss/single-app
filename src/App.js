import {  BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import React from 'react';
import Game from './components/Game';


import './styles/app.scss';
import './styles/game.scss';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path='*' element={<Game />} />
      </Routes>
    </Router>
  );
}

export default App;
