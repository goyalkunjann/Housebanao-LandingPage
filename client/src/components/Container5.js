import styles from "./Container5.module.css";

const Container5 = () => {
  return (
    <div className={styles.Container5}>
           <div className={styles.Container5Main}>
              <div className={styles.Container5LeftContainer}>
                <h1>What we do?</h1>
                <p>We offer comprehensive services that cater to a broad spectrum of needs andclients, ensuring satisfaction across diverse requirements.</p>
              </div>
              <div className={styles.Container5RightContainer}>
                 <img
                 className={styles.Container5Img}
                 loading="lazy"
                 alt=""
                 src="/image.png"
                 />
              </div>
           </div>
    </div>
  );
};

export default Container5;
