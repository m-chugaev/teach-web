import Image from "next/image";
import styles from "./page.module.scss";
import Questions from '../components/Questions';
import RandomQuestions from '../components/RandomQuestions';

export default function Home() {
  return (
    <main className={styles.main}>
      <Questions />
      <RandomQuestions />
      <Image
        className={styles.icon}
        src="/icons/next.svg"
        width={60}
        height={30}
        alt="Next.js"
        title="Сделано на Next.js"
      />
    </main>
  );
}
