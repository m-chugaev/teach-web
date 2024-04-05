import Image from "next/image";
import styles from "./page.module.scss";
import Questions from '../components/Questions';
import RandomQuestionsList from '../components/RandomQuestionsList';
import JokeNotice from '../components/JokeNotice';
import RandomQuestions from '../components/RandomQuestions';
import RandomQuestionsFrequency from '../components/RandomQuestionsFrequency';
import Comment from '../components/Comment/Comment';
import SwitchTheme from "../components/SwitchTheme";
import Random5Questions from "@/components/Top5dieFive";
import QuestionOfTheDay from "@/components/QuestionOfTheDay";

export default function Home() {
  return (
    <main className={styles.main}>
      <Questions />
      <QuestionOfTheDay />
      <RandomQuestions />
      <RandomQuestionsList />
      <RandomQuestionsFrequency />
      <JokeNotice />
      <SwitchTheme />
      <Random5Questions />
      <Image
        className={styles.icon}
        src="/icons/next.svg"
        width={60}
        height={30}
        alt="Next.js"
        title="Сделано на Next.js"
      />
      <Comment />
    </main>
  );
}
