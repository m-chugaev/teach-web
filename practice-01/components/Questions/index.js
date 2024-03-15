import { useState } from 'react';
import styles from './Questions.module.scss'; 
import questions from "../../questions.js" 
 
export default function Questions() {
    const [filter, setFilter] = useState("");
    

    const handleFilterChange = (e) => {
        setFilter(e.target.value);
    };

    const filteredQuestions = questions.filter(question => {
        return question.category.toLowerCase().includes(filter.toLowerCase());
    });

    return ( 
        <div className={styles.container}> 
            <h2 className={styles.title}>Вопросы для собеседования</h2> 
            
            <div className={styles.filterContainer}>
                <label htmlFor="filter">Фильтр по категории:</label>
                <input 
                    type="text" 
                    id="filter" 
                    value={filter}
                    onChange={handleFilterChange} 
                />
            </div>
            
            <ol className={styles.list}> 
                {filteredQuestions.map(function(question, index) { 
                    return <li key={index}>{question.text}</li>; 
                })} 
            </ol> 
        </div> 
    ); 
}
