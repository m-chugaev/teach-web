'use client'
// components/JokeNotice.js
import React from 'react';
import { useState } from 'react';

const jokes = [
  'Почему программисты так не любят пляж? Потому что в нем есть много багов!',
  'Какой JavaScript-фреймворк самый быстрый? Ответ: React, потому что он всегда в состоянии!',
  'Что говорит один HTML-элемент другому? "Ты выглядишь как div!"'
];

const JokeNotice = () => {
  const [showNotice, setShowNotice] = useState(true);
    const joke = jokes[Math.floor(Math.random() * jokes.length)]

  React.useEffect(() => {
    const timer = setTimeout(() => {
      setShowNotice(false);
    }, 5000); // Нотайс исчезнет через 5 секунд

    return () => clearTimeout(timer);
  }, []);

  return (
    <div
      style={{
        position: 'fixed',
        top: '20px',
        right: '20px',
        background: 'Gray',
        color: 'white',
        padding: '10px',
        borderRadius: '5px',
        display: showNotice ? 'block' : 'none',
        zIndex: '10',
      }}
    >
      {joke}
    </div>
  );
};

export default JokeNotice;