'use client'
// components/JokeNotice.js
import styles from './JokeNotice.module.scss';
import React, { useState, useEffect } from 'react';

const jokes = [
  'Почему программисты так не любят пляж? Потому что в нем есть много багов!',
  'Какой JavaScript-фреймворк самый быстрый? Ответ: React, потому что он всегда в состоянии!',
  'Что говорит один HTML-элемент другому? "Ты выглядишь как div!"',
  'Как программисты проводят выходные? В своем коде!',
  'Знаете ли вы, почему не можем использовать фоновую музыку в коде? Потому что код постоянно находится в цикле!'
];

const JokeNotice = () => {
  const [showNotice, setShowNotice] = useState(true);
  const joke = jokes[Math.floor(Math.random() * jokes.length)];

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowNotice(false);
    }, 5000); // Уведомление исчезнет через 5 секунд

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={styles.notice} style={{ display: showNotice ? 'block' : 'none' }}>
      {joke}
    </div>
  );
};

export default JokeNotice;