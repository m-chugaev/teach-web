'use client';
import styles from './RandomQuestionsFrequency.module.scss';
import questions from "../../questions.js"
import React from 'react';

export default function RandomQuestionsFrequency() {
    const [randomQuestions, setRandomQuestions] = React.useState([]);

    const generateRandomQuestionsFrequency = () => {
        const totalQuestionsCount = questions.reduce((total, question) => total + (question.frequency ?? 100), 0);
        const selectedQuestions = [];

        for (let i = 0; i < 5; i++) {
            const randomNumber = Math.floor(Math.random() * totalQuestionsCount);

            let cumulativeFrequency = 0;
            let selectedQuestion;
            for (const question of questions) {
                cumulativeFrequency += (question.frequency ?? 100);
                if (randomNumber < cumulativeFrequency) {
                    selectedQuestion = question;
                    break;
                }
            }

            selectedQuestions.push(selectedQuestion);
        }

        setRandomQuestions(selectedQuestions);
    }

    return (
        <div className={styles.wrapper}>
            <div className={styles.container}>
                <div className={styles.header}>Рандомные вопросы с частотой</div>
                <button type="button" onClick={generateRandomQuestionsFrequency} className={styles.button}>Сгенерировать рандомные вопросы</button>
                <ol className={styles.list}>
                    {randomQuestions.map(function(question, index) {
                        if (question && question.text) {
                            return <li key={index} className={styles.item}>{question.text}</li>; {/* Добавлен класс стиля для элементов списка */}
                        } else {
                            return null;
                        }
                    })}
                </ol>
            </div>
        </div>
    );
}