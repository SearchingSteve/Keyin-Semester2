import React, { useState, useEffect } from 'react';

const HappyHolidays = () => {
  const [message, setMessage] = useState("It's December!!!");

  useEffect(() => {
    const timer = setTimeout(() => {
      setMessage("Happy Holidays Hurrah!");
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div>
      <h1>{message}</h1>
    </div>
  );
};

export default HappyHolidays;
