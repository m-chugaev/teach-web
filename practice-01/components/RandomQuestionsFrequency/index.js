'use client';

import styles from './RandomQuestions.module.scss';
import questions from "../../questions.js"
import React from 'react';

export default function RandomQuestionsFrequency() {
    const [randomQuestions, setRandomQuestions] = React.useState([]);

    const generateRandomQuestionsFrequency = () => {
        // Генерация случайного числа от 0 до общего количества вопросов
        const randomNumber = Math.floor(Math.random() * questions.length);
        
        // Получение выбранных случайных вопросов
        const selectedQuestions = questions
            .sort(() => Math.random() - 0.5)
            .slice(0, 5);
        
        // Установка выбранных вопросов в состояние
        setRandomQuestions(selectedQuestions);
    }

    return (
        <div>
            <button type="button" onClick={generateRandomQuestionsFrequency}>Рандомный вопрос с частотой</button>
            <ol>
                {randomQuestions.map(function(question, index) {
                     if (question && question.text) {
                        return <li key={index}>{question.text}</li>;
                    } else {
                        return null; // Возвращаем null, если вопрос не определен или отсутствует текст вопроса
                    }
                })}
            </ol>
        </div>
    );
}

