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
        <div>
            <form onSubmit={handleSubmit}>
                <input type="number" name="count" placeholder="Кол-во чисел"></input>
                <button type="submit">Сгенерировать</button>
            </form>
            <ol>
                {randomQuestions.map(function(question, index) {
                    return <li key={index}>{question.text}</li>;
                })}
            </ol>
        </div>
    );
}