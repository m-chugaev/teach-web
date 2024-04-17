"use client"
import styles from './RandomQuestionsList.module.scss';
import { useState } from 'react';
import questions from '@/questions';

export default function RandomQuestionsList() {
    const [questionsList, setQuestionsList] = useState([]);
    const [history, setHistory] = useState([]);
    const [showMessage, setShowMessage] = useState(true);

    const generateRandomQuestions = () => {
        setShowMessage(false);
        const randomQuestions = [];
        while (randomQuestions.length < 5) {
            const randomIndex = Math.floor(Math.random() * questions.length);
            if (!randomQuestions.includes(questions[randomIndex])) {
                randomQuestions.push(questions[randomIndex]);
            }
        }
  
        setQuestionsList(randomQuestions);
        updateHistory(randomQuestions);
    };
  
    const updateHistory = (newQuestions) => {
        const currentDate = new Date().toLocaleString();
        const historyItem = `${currentDate} - ${JSON.stringify(newQuestions.map(question => question.text))}`;
  
        const updatedHistory = [historyItem, ...history.slice(0, 9)];
        setHistory(updatedHistory);
    };
  
    return (
        <div className={styles.container}>
            <h1 className={styles.title}>Рандомные вопросы с историей</h1>
            <button onClick={generateRandomQuestions} className={styles.button}>Сгенерировать рандомные вопросы</button>
            <div className={styles.list}>
                {questionsList.length > 0 && (
                    <ol>
                        {questionsList.map((question, index) => (
                            <li key={index}>{question.text}</li>
                        ))}
                    </ol>
                )}
            </div>
            <div className={styles.history}>
                <h2>History</h2>
                <ol>
                    {history.map((item, index) => (
                        <li key={index}>{item}</li>
                    ))}
                </ol>
            </div>
            {showMessage && <p>Тыкни кнопочку выше чтобы появилась история :() </p>}
        </div>
    );
}