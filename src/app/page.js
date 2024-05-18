import styles from "./page.module.css";
import Background from "./background";

export default function Home() {
  return (
    <main className={styles.main}>
      <Background />
      <div className="content">
        <div className={styles.glassNavBar}></div>
      </div>
    </main>
  );
}
