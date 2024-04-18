'use client';
import React, { useEffect, useState } from 'react';
import styles from './Questions.module.scss';
import questions from "../../questions.js";

export default function Questions() {
    const [filter, setFilter] = useState("all");
    const [filteredQuestions, setFilteredQuestions] = useState([]);

    const getRandomEmoji = () => {
        const emojis = ["😊", "🎉", "🤔", "👍", "😄", "🎨"];
        return emojis[Math.floor(Math.random() * emojis.length)];
    };

    const getQuestionsWithSmiles = () => {
        return questions.map((el) => {
            const elCopy = { ...el };
            elCopy.text = el.text + " " + getRandomEmoji();
            return elCopy;
        });
    };

    useEffect(() => {
        const filtered = getQuestionsWithSmiles().filter(question => {
            if (filter === "all") {
                return true;
            } else {
                return question.tags.includes(filter);
            }
        });
        setFilteredQuestions(filtered);
    }, [filter]);

    const handleFilterChange = (e) => {
        setFilter(e.target.value);
    };

    return (
        <div className={styles.container}>
            <h2 className={styles.title}>Вопросы для собеседования</h2>
            <div className={styles.filterContainer}>
                <label htmlFor="filter">Фильтр по тегам:</label>
                <select id="filter" value={filter} onChange={handleFilterChange}>
                    <option value="all">Все теги</option>
                    <option value="JS">JS</option>
                    <option value="CSS">CSS</option>
                    <option value="Basics">Basics</option>
                    <option value="OOP">OOP</option>
                    <option value="Git">Git</option>
                    <option value="Database">Database</option>
                    <option value="PHP">PHP</option>
                </select>
            </div>
            <div className={styles.list}>
                {filteredQuestions.map((question, index) => (
                    <div className={styles.ac} key={index}>
                        <div className={styles.faqList}>
                            <div className={styles.accord}>
                                <div className={styles.question}>
                                    <div className={styles.large}>
                                        <span>{index + 1}. {question.text}</span>
                                    </div>
                                    <div className={styles.tags}>
                                        {question.tags.map((tag, tagIndex) => (
                                            <span key={tagIndex}>{tag}</span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}