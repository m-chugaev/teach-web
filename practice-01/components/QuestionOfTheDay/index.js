'use client'

import React, { useState, useEffect } from 'react';
import questions from '@/questions';

const QuestionOfTheDay = () => {
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [currentQuestion, setCurrentQuestion] = useState('');

    useEffect(() => {
        const storedIndex = localStorage.getItem('questionIndex');
        const storedDate = localStorage.getItem('lastUpdateDate');
        
        if (storedIndex !== null && storedDate !== null) {
            const storedDateTime = new Date(storedDate).getTime();
            const currentDateTime = new Date().getTime();
            
            if (currentDateTime - storedDateTime > (1000 * 60 * 60 * 24)) {
                const newIndex = (parseInt(storedIndex) + 1) % questions.length;
                setCurrentQuestionIndex(newIndex);
                setCurrentQuestion(questions[newIndex]?.text || '');
                localStorage.setItem('questionIndex', newIndex);
                localStorage.setItem('lastUpdateDate', new Date().toISOString());
            } else {
                setCurrentQuestionIndex(parseInt(storedIndex));
                setCurrentQuestion(questions[parseInt(storedIndex)]?.text || '');
            }
        } else {
            setCurrentQuestionIndex(0);
            setCurrentQuestion(questions[0]?.text || '');
            localStorage.setItem('questionIndex', 0);
            localStorage.setItem('lastUpdateDate', new Date().toISOString());
        }
    }, []);

    return (
        <div>
            <h2>Вопрос дня</h2>
            <p>{currentQuestion}</p>
        </div>
    );
};
  
export default QuestionOfTheDay;
