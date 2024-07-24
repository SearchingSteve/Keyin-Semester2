import React, { useState, useEffect } from 'react';

function RandomAdvice() {
  const [advice, setAdvice] = useState('');

  useEffect(() => {
    fetch('https://api.adviceslip.com/advice')
      .then(response => response.json())
      .then(data => setAdvice(data.slip.advice))
      .catch(error => console.error('Error fetching advice:', error));
  }, []);

  return (
    <div>
      <h2>Random Advice</h2>
      <p>{advice}</p>
    </div>
  );
}

export default RandomAdvice;
