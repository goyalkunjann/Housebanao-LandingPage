import Header from '../components/Header/Header';

import styles from "./About.module.css";

const About = () => {
  return (
    <div className={styles.home}>
      <Header />
      <div className={styles.secondaryButton}>
        <button className={styles.buttonPrimary}>
          <div className={styles.button}>Button</div>
        </button>
      </div>
    </div>
  );
};

export default About;
