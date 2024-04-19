'use client';

import React from 'react';
import Image from "next/image";
import styles from "./page.module.scss";
import Questions from '../components/Questions';
import RandomQuestionsList from '../components/RandomQuestionsList';
import JokeNotice from '../components/JokeNotice';
import QuestionNotice from '../components/QuestionNotice';
import RandomQuestions from '../components/RandomQuestions';
import RandomQuestionsFrequency from '../components/RandomQuestionsFrequency';
import Comment from '../components/Comment/Comment';
import SwitchTheme from "../components/SwitchTheme";
import Random5Questions from "@/components/Top5dieFive";
import QuestionOfTheDay from "@/components/QuestionOfDay";
import Timer from "@/components/Timer";

export default function Home() {
  return (
    <main className={styles.main}>
      <Questions />
      <QuestionOfTheDay />
      <RandomQuestions />
      <RandomQuestionsList />
      <RandomQuestionsFrequency />
      <JokeNotice />
      <QuestionNotice />
      <SwitchTheme />
      <Random5Questions />
      <Timer />
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
