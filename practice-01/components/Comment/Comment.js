'use client'
import styles from './Comment.module.scss'; // Подключаем стили
import React, { useState, useEffect } from 'react';


export default function Comment() {
    const [comments, setComments] = useState([]);
    const [text, setText] = useState("");

    useEffect(() => {
        const loadedComments = JSON.parse(localStorage.getItem('comments'));
        setComments(loadedComments || []);
    }, []);

    const addNewComment = (e) => {
        e.preventDefault();

        const newComment = {
            text,
            createdAt: new Date().toISOString(),
        };

        const updatedComments = [...comments, newComment];
        setComments(updatedComments);
        setText('');

        localStorage.setItem('comments', JSON.stringify(updatedComments));
    };

    return (
        <div className={styles.container}>
            <h2 className={styles.title}>Добавить комментарий</h2> {/* Надпись "Добавить комментарий" */}
            <div className={styles.comments}>
                {comments && comments.map((comment, index) => (
                    <div key={index} className={styles.comment}>
                        <p>{comment.text}</p>
                        <span>{comment.createdAt}</span>
                    </div>
                ))}
            </div>
            <form onSubmit={addNewComment}>
                <textarea
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                    className={styles.textarea}
                    placeholder="Введите ваш комментарий"
                ></textarea>
                <button type="submit" className={styles.button}>Добавить комментарий</button> {/* Кнопка "Добавить комментарий" */}
            </form>
        </div>
    );
}