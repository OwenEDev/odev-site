"use client";
import styles from "./page.module.css";
import Background from "./background";
import NavBar from "./navbar";
import { useEffect, useRef } from "react";

export default function Home() {
  return (
    <main className={styles.main}>
      <Background />
      <NavBar />
      <div className={styles.navSpace} />
      <div className="content">
        <div className={styles.glassPage} name="portfolio"></div>
        <div className={styles.glassPage} name="about"></div>
        <div className={styles.glassPage} name="contact"></div>
      </div>
    </main>
  );
}
