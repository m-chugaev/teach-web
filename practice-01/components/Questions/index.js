import styles from './Questions.module.scss';
import questions from "../../questions.js"

export default function Questions() {
    return (
        <div className={styles.container}>
            <h2 className={styles.title}>Вопросы для собеседования</h2>
            <ol className={styles.list}>
                {questions.map(function(question, index) {
                    return <li key={index}>{question.text}</li>;
                })}
            </ol>
        </div>
    );
}