"use client";
import { useState, useEffect } from "react";
import styles from "./SwitchTheme.module.scss";

export default function SwitchTheme() {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
      setTheme(savedTheme);
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
  };

  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  return (
    <div className={styles.container}>
      <button onClick={toggleTheme} className={styles.themeSwitcher}>
        {theme === "light" ? "Dark Theme" : "Light Theme"}
      </button>
    </div>
  );
}
