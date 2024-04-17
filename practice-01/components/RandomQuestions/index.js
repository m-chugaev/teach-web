'use client';

import styles from './RandomQuestions.module.scss';
import questions from "../../questions.js"
import React from 'react';

export default function RandomQuestions() {
    const [randomQuestions, setRandomQuestions] = React.useState([]);

    const handleSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const count = formData.get('count');

        const randomQuestions = questions
            .sort(() => Math.random() - 0.5)
            .slice(0, count);
        
        setRandomQuestions(randomQuestions);
    }

    return (
        <div className={styles.container}>
            <div className={styles.wrapper}>
                <h2 className={styles.title}>Генератор определённого количества вопросов</h2>
                <form onSubmit={handleSubmit} className={styles.form}>
                    <input type="number" name="count" placeholder="Кол-во вопросов" className={styles.input}></input>
                    <button type="submit" className={styles.button}>Сгенерировать</button>
                </form>
            </div>
            {randomQuestions.length > 0 && (
                <div className={styles.result}>
                    <h3>Сгенерированные вопросы:</h3>
                    <ol>
                        {randomQuestions.map((question, index) => (
                            <li key={index}>{question.text}</li>
                        ))}
                    </ol>
                </div>
            )}
        </div>
    );
}