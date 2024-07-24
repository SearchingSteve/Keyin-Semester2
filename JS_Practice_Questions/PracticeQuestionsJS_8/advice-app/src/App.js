import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navigation from './components/Navigation.js';
import Home from './components/Home.js';
import RandomAdvice from './components/RandomAdvice.js';
import AdviceList from './components/AdviceList.js';

function App() {
  return (
    <Router>
      <div>
        <Navigation />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/random-advice" element={<RandomAdvice />} />
          <Route path="/advice-list" element={<AdviceList />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
