import styles from "./page.module.css";
import { scroller } from "react-scroll";

export default function NavBar() {
  const scrollToPage = (page) => {
    scroller.scrollTo(page, {
      duration: 800,
      smooth: "easeInOutQuart",
      offset: -30,
    });
  };
  return (
    <div className={`${styles.glassNavBar}`}>
      <nav>
        <ul className={styles.navList}>
          <li className={styles.navItem}>
            <a href="#" onClick={() => scrollToPage("portfolio")}>
              Portfolio
            </a>
          </li>
          <li className={styles.navItem}>
            <a href="#" onClick={() => scrollToPage("about")}>
              About
            </a>
          </li>
          <li className={styles.navItem}>
            <a href="#" onClick={() => scrollToPage("contact")}>
              Contact
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
}
