'use client'
// LanguageSwitcher.js

import { useState, useEffect } from 'react';
import questions_en from '@/questions_en';
import questions_ru from '@/questions_ru';

const LanguageSwitcher = () => {
  const [currentLanguage, setCurrentLanguage] = useState('ru'); // Изначально русский язык
  // Обработчик клика по переключателю языка
  const handleLanguageChange = () => {
    const newLanguage = currentLanguage === 'ru' ? 'en' : 'ru';
    setCurrentLanguage(newLanguage);
    window.location.reload(); // Перезагрузка страницы
    // Сохранение языка в localStorage или установка cookie
    localStorage.setItem('selectedLanguage', newLanguage);
    window.location.reload();

  };
  const selectedQuestions = currentLanguage === 'en' ? questions_en : questions_ru;

  // Проверка сохраненного языка при загрузке страницы
  useEffect(() => {
    const savedLanguage = localStorage.getItem('selectedLanguage');
    if (savedLanguage) {
      setCurrentLanguage(savedLanguage);
    }
  }, []);

  return (
    <div>
      <button onClick={handleLanguageChange}>
        {currentLanguage === 'ru' ? 'English' : 'Русский'}
      </button>
      <ul>
        {selectedQuestions.map((question) => (
          <li key={question.id}>{question.text}</li>
        ))}
      </ul>
    </div>
  );
};

export default LanguageSwitcher;
