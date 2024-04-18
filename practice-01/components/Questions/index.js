'use client';

import { useEffect, useState } from 'react';
import styles from './Questions.module.scss';
import questions from "../../questions.js";

export default function Questions() {
    const [filter, setFilter] = useState("all"); 
    const [newQuestions, setNewQuestions] = useState([]);
    const [listOfPages, setListOfPages] = useState([[]]);
    const [pageNumber, setPageNumber] = useState(0);
    let ListOfPages;
    const [newQuestion, setNewQuestion] = useState("");

    useEffect(() => {
        const storedQuestions = JSON.parse(localStorage.getItem('questions')) || [];
        setNewQuestions(storedQuestions);
    }, []);

    useEffect(() => {
        const filtered = getAllQuestions().filter(question => {
            if (filter === "all") {
                return true;
            } else {
                return question.tags.includes(filter);
            }
        });

        let counter = 0;
        ListOfPages = [[]];

        for(let i=0; i<filtered.length; i++){
            if(i !== 0 && i%10 === 0){
                ListOfPages.push([filtered[i]])
                counter++;
            }
            else{
                ListOfPages[counter].push(filtered[i]);
            }
        }
        setListOfPages(ListOfPages)
    }, [filter, newQuestions]);


    const getAllQuestions = (e) => {
        return [...questions, ...newQuestions];
    };

    const handleFilterChange = (e) => {
        setFilter(e.target.value);
    };

    const handleNewQuestionChange = (e) => {
        setNewQuestion(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (newQuestion.trim() !== "") {
            const updatedQuestions = [
                ...newQuestions,
                { text: newQuestion, tags: ["New"] }
            ];
            localStorage.setItem('questions', JSON.stringify(updatedQuestions));
            setNewQuestion("");
            setNewQuestions(updatedQuestions);
        }
    };


    function increment(){
        if(pageNumber+1 > listOfPages.length-1) setPageNumber(listOfPages.length-1);
        else setPageNumber(pageNumber+1);
    }
    function decrement(){
        if(pageNumber-1 < 0) setPageNumber(0);
        else setPageNumber(pageNumber-1);
    }


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
            <div className={styles.list} style={{height: "700px"}}>
                {listOfPages.map((page, index)=>{
                    if(index === pageNumber)
                    return page.map(function(question, index) {
                        return (
                            <div className={styles.ac} key={index}>
                                <div className={styles.faqList}>
                                    <div className={styles.accord}>
                                        <div className={styles.question}>
                                            <div className={styles.large}>
                                                <span>{index+1}. {question.text}</span>
                                            </div>
                                            <div className={styles.tags}>
                                                {question.tags.map(function (tag, index) {
                                                    return (
                                                        <span key={index}>
                                                        {tag}
                                                    </span>
                                                    );
                                                })}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        );
                    })
                })}
            </div>


            <div style={{display: "flex", alignItems: "center", justifyContent: "center", gap: "30%", margin: "40px auto 200px auto", maxWidth: "800px"}}>
                <button onClick={decrement} id={"button_decr"}>Предыдущая</button>
                <div>{`${pageNumber+1}/${listOfPages.length}`}</div>
                <button onClick={increment} id={"button_incr"}>Следующая</button>
            </div>


            <form onSubmit={handleSubmit}>
                <input 
                    type="text" 
                    value={newQuestion} 
                    onChange={handleNewQuestionChange} 
                    placeholder="Введите новый вопрос" 
                />
                <button type="submit">Добавить вопрос</button>
            </form>
        </div>
    );
}

