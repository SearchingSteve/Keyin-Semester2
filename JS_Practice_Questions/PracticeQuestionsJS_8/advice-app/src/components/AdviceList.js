import React, { useState, useEffect } from 'react';

function AdviceList() {
  const [advices, setAdvices] = useState([]);
  const [number, setNumber] = useState(5);

  useEffect(() => {
    const fetchAdvices = async () => {
      const newAdvices = [];
      for (let i = 0; i < number; i++) {
        const response = await fetch(`https://api.adviceslip.com/advice?${Math.random()}`);
        const data = await response.json();
        newAdvices.push(data.slip.advice);
      }
      setAdvices(newAdvices);
    };

    fetchAdvices().catch(error => console.error('Error fetching advices:', error));
  }, [number]);

  return (
    <div>
      <h2>Advice List</h2>
      <label>
        Number of advices:
        <input
          type="number"
          value={number}
          onChange={(e) => setNumber(e.target.value)}
          min="1"
        />
      </label>
      <ul>
        {advices.map((advice, index) => (
          <li key={index}>{advice}</li>
        ))}
      </ul>
    </div>
  );
}

export default AdviceList;
