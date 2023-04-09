import {  BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import React from 'react';
import Main from './components/Main';

import './styles/app.scss';


const App = () => {
  return (
    <Router>
      <Routes>
        <Route path='*' element={<Main />} />
      </Routes>
    </Router>
  );
}

export default App;
