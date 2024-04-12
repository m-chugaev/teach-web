'use client'
import React, {useState} from 'react';
import questions from '@/questions';

const QuestionNotice = () => {
    const [showNotice, setShowNotice] = useState(true);
    const randomIndex = Math.floor(Math.random() * questions.length);
    const question = questions[randomIndex].text;
  
    React.useEffect(() => {
      const timer = setTimeout(() => {
        setShowNotice(false);
      }, 5000);
  
      return () => clearTimeout(timer);
    }, []);
  
    return (
      <div
        style={{
          position: 'fixed',
          top: '80px',
          right: '20px',
          background: 'Gray',
          color: 'white',
          padding: '10px',
          borderRadius: '5px',
          display: showNotice ? 'block' : 'none',
          zIndex: '10',
        }}
      >
        {question}
      </div>
    );
  };
  
  export default QuestionNotice;