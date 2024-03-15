import Image from "next/image";
import styles from "./page.module.scss";
import Questions from '../components/Questions';
import Comment from '../components/Comment/Comment';

export default function Home() {
  return (
    <main className={styles.main}>
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
