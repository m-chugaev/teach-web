"use client"
import { useState } from 'react';
import questions from '@/questions';

export default function Home() {
    const [questionsList, setQuestionsList] = useState([]);
    const [history, setHistory] = useState([]);
  
    const generateRandomQuestions = () => {
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
      <div>
        <h1>Random Questions with History</h1>
        <button onClick={generateRandomQuestions}>Generate Random Questions</button>
        <div>
          {questionsList.length > 0 && (
            <ol>
              {questionsList.map((question, index) => (
                <li key={index}>{question.text}</li>
              ))}
            </ol>
          )}
        </div>
        <div>
          <h2>History</h2>
          <ol>
            {history.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ol>
        </div>
      </div>
    );
  }