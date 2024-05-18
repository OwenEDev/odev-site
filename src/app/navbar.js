import { useEffect, useState } from "react";
import styles from "./page.module.css";

export default function NavBar() {
  const [isSticky, setIsSticky] = useState(false);

  const onScroll = () => {
    setIsSticky(window.scrollY > 2);
  };
  useEffect(() => {
    window.addEventListener("scroll", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  });
  return (
    <>
      <div
        className={`${styles.placeHolder} ${isSticky ? "visible" : ""}`}
      ></div>
      <div className={`${styles.glassNavBar} ${isSticky ? styles.sticky : ""}`}>
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
    </>
  );
}
