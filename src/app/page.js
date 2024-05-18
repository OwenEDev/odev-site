import Image from "next/image";
import styles from "./page.module.css";
import Background from "./background";

export default function Home() {
  return (
    <main className={styles.main}>
      <h1>hi</h1>
      <Background />
    </main>
  );
}
