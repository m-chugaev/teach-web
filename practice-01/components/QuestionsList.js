'use client'
import { useState } from 'react';

export default function Home() {
    const [questions, setQuestions] = useState([]);
    const [history, setHistory] = useState([]);

    const generateQuestions = () => {
        const questionsList = [
            "Когда произошла Великая Французская революция?",
            "Кто был первым президентом США?",
            "В каком году был подписан Декларация независимости США?",
            "Какое событие считается началом Первой мировой войны?",
            "Как называлась первая космическая станция?",
            "Кто открыл Америку для европейцев?",
            "Когда была основана Организация Объединенных Наций?",
            "Какое событие считается началом Второй мировой войны?",
            "Какой период в истории называется Средневековьем?",
            "Кто был первым человеком в космосе?"
        ];

        const randomQuestions = [];
        const updatedHistory = [...history];

        while (randomQuestions.length < 5) {
            const randomIndex = Math.floor(Math.random() * questionsList.length);
            if (!randomQuestions.includes(questionsList[randomIndex])) {
                randomQuestions.push(questionsList[randomIndex]);
            }
        }

        setQuestions(randomQuestions);

        updatedHistory.push(randomQuestions);
        if (updatedHistory.length > 10) {
            updatedHistory.shift();
        }
        setHistory(updatedHistory);
    };

    return (
        <div>
            <h1>Случайные вопросы</h1>
            <button onClick={generateQuestions}>Сгенерировать вопросы</button>
            <div>
                {questions.map((question, index) => (
                    <p key={index}>{question}</p>
                ))}
            </div>
            <div>
                <h2>История:</h2>
                <ol>
                    {history.map((item, index) => (
                        <li key={index}>
                            {new Date().toLocaleString()} - {JSON.stringify(item)}
                        </li>
                    ))}
                </ol>
            </div>
        </div>
    );
}
