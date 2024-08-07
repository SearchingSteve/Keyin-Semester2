import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navigation from './Navigation';
import Home from './Home';
import RandomAdvice from './RandomAdvice';
import AdviceList from './AdviceList';

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
