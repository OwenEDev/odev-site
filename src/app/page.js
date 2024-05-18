import styles from "./page.module.css";
import Background from "./background";
import NavBar from "./navbar";

export default function Home() {
  return (
    <main className={styles.main}>
      <Background />
      <NavBar />
      <div className="content"></div>
    </main>
  );
}
