'use client'
import React, { useState, useEffect } from 'react'

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
    <div >
         {comments && comments.map((comment, index) => (
            <div key={index}>
                <p>{comment.text}</p>
                <span>{comment.createdAt}</span>
            </div>
        ))}
        <form onSubmit={addNewComment}>
            <textarea value={text} onChange={(e) => setText(e.target.value)}></textarea>
            <button type="submit">Add Comment</button>
      </form>
    </div>
  );
}
