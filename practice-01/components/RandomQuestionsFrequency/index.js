'use client';

import styles from './RandomQuestions.module.scss';
import questions from "../../questions.js"
import React from 'react';

export default function RandomQuestionsFrequency() {
    const [randomQuestions, setRandomQuestions] = React.useState([]);

    const generateRandomQuestionsFrequency = () => {
        // Подсчет общего количества вопросов с учетом их частоты
        const totalQuestionsCount = questions.reduce((total, question) => total + question.frequency, 0);
        
        // Создание массива для хранения выбранных вопросов
        const selectedQuestions = [];

        // Генерация пяти случайных чисел от 0 до общего количества вопросов
        for (let i = 0; i < 5; i++) {
            const randomNumber = Math.floor(Math.random() * totalQuestionsCount);
            
            // Поиск вопроса, соответствующего сгенерированному числу
            let cumulativeFrequency = 0;
            let selectedQuestion;
            for (const question of questions) {
                cumulativeFrequency += question.frequency;
                if (randomNumber < cumulativeFrequency) {
                    selectedQuestion = question;
                    break;
                }
            }

            // Добавление выбранного вопроса в массив
            selectedQuestions.push(selectedQuestion);
        }

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


