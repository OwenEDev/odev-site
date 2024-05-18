"use client";
import styles from "./page.module.css";
import Background from "./background";
import NavBar from "./navbar";
import { useEffect } from "react";

export default function Home() {
  return (
    <main className={styles.main}>
      <Background />
      <NavBar />
      <div className="content">
        <div className={styles.glassPage}></div>
        <div className={styles.glassPage}></div>
        <div className={styles.glassPage}></div>
      </div>
    </main>
  );
}
