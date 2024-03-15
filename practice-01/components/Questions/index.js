import styles from './Questions.module.scss';
import questions from "../../questions.js"

export default function Questions() {
    return (
        <div className={styles.container}>
            <h2 className={styles.title}>Вопросы для собеседования</h2>
            <div className={styles.list}>
                {questions.map(function(question, index) {
                    return <div className={styles.ac} key={index}>
                        <div className={styles.faqList}>
                            <div className={styles.accord}>
                                <div data-w-id="4c10fe5b-3460-50ad-990c-41ff238f36c8" className={styles.question}>
                                    <div className={styles.large}>
                                        <span>{index+1}. {question.text}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>;
                })}
            </div>
        </div>
    );
}