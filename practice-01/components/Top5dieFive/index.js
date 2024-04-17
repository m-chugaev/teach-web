'use client';

import styles from './Five.module.scss';
import questions from "../../questions.js"
import React, { useState } from 'react';

export default function Random5Questions() {
    const [count, setCount] = useState(5);
    const [randomQuestions, setRandomQuestions] = useState([]);
    const [remainingQuestions, setRemainingQuestions] = useState([...questions]); // Копия исходного массива вопросов
    const [showQuestions, setShowQuestions] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        generateRandomQuestions();
        setShowQuestions(true);
    }

    const handleReset = () => {
        setShowQuestions(false);
        setRandomQuestions([]);
        setRemainingQuestions([...questions]); // Восстанавливаем копию исходного массива
    }

    const generateRandomQuestions = () => {
        if (remainingQuestions.length < count) {
            setRandomQuestions(remainingQuestions);
            setRemainingQuestions([]);
        } else {
            const selectedQuestions = [];
            for (let i = 0; i < count; i++) {
                const randomIndex = Math.floor(Math.random() * remainingQuestions.length);
                const randomQuestion = remainingQuestions[randomIndex];
                selectedQuestions.push(randomQuestion);
                remainingQuestions.splice(randomIndex, 1);
            }
            setRandomQuestions(selectedQuestions);
        }
    }

    return (
        <div className={styles.wrapper}>
            <h2 className={styles.title}>Рандомные вопросы</h2>
            <form className={styles.container} onSubmit={handleSubmit}>
                <button className={styles.button_1} type="submit">Сгенерировать</button>
                <button className={styles.button_2} type="button" onClick={handleReset}>Сбросить</button>
            </form>
            {showQuestions && (
                <ol>
                    {randomQuestions.map((question, index) => (
                        <li key={index}>{question.text}</li>
                    ))}
                </ol>
            )}
        </div>
    );
}
