import styles from "./page.module.css";

export default function NavBar() {
  return (
    <div className={styles.glassNavBar}>
      <nav>
        <ul className={styles.navList}>
          <li className={styles.navItem}>
            <a href="#">Portfolio</a>
          </li>
          <li className={styles.navItem}>
            <a href="#">About</a>
          </li>
          <li className={styles.navItem}>
            <a href="#">Contact</a>
          </li>
        </ul>
      </nav>
    </div>
  );
}
