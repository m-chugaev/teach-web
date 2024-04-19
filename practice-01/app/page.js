import Image from "next/image";
import styles from "./page.module.scss";
import Questions from '../components/Questions';
import RandomQuestionsList from '../components/RandomQuestionsList';
import QuestionNotice from '../components/QuestionNotice';
import RandomQuestions from '../components/RandomQuestions';
import RandomQuestionsFrequency from '../components/RandomQuestionsFrequency';
import Comment from '../components/Comment/Comment';
import SwitchTheme from "../components/SwitchTheme";
import Random5Questions from "@/components/Top5dieFive";
import QuestionOfTheDay from "@/components/QuestionOfTheDay";
import Timer from "@/components/Timer"
import LanguageSwitcher from "@/components/LanguageSwitcher";

export default function Home() {
  return (
    <main className={styles.main}>
      <LanguageSwitcher/>
      <Questions />
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
