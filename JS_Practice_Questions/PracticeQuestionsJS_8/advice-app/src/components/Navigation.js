import React from 'react';
import { Link } from 'react-router-dom';

function Navigation() {
  return (
    <nav>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/random-advice">Random Advice</Link></li>
        <li><Link to="/advice-list">Advice List</Link></li>
      </ul>
    </nav>
  );
}

export default Navigation;
