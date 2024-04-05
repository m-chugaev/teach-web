'use client';

import { useEffect, useState } from 'react';

export default function Timer() {
  const [time, setTime] = useState(3);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    if (isRunning) {
      const timer = setInterval(() => {
        setTime(prevTime => prevTime - 1);
      }, 1000);

      return () => clearInterval(timer);
    }
  }, [isRunning]);

  useEffect(() => {
    if (time === 0) {
      alert('Таймер закончился');
      const resetTimer = window.confirm('Хотите сбросить таймер к 5 минутам?');
      if (resetTimer) {
        setTime(300);
        setIsRunning(false);
      }
    }
  }, [time]);

  const handleToggle = () => {
    setIsRunning(prevIsRunning => !prevIsRunning);
  };
  const resetTime = () => {
    setTime(300);
    setIsRunning(false);
  };

  return (
    <div style={{ position: 'fixed', right: '3%', top: '50%', transform: 'translate(50%, -50%)' }}>
      <h2>{Math.floor(time / 60)}:{(time % 60).toString().padStart(2, '0')}</h2>
      <button onClick={handleToggle}>{isRunning ? '⛔️' : '▶️'}</button>
      <button onClick={resetTime}>🔄</button>
    </div>
  );
};