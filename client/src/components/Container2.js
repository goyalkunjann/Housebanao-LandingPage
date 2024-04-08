import styles from "./Container2.module.css";
import { FaCalculator, FaUserPlus, FaCreditCard, FaStarCheck, FaEyeSlash, FaCheck } from 'react-icons/fa';

const Container2 = () => {
  return (
    <div className={styles.Container2}>
           <div className={styles.Container2BoxHeading}>
            <h1>Why choose us?</h1>
           </div>
        <div className={styles.Container2BoxData}>
          <div className={styles.Container2Box}>
            <div className={styles.Container2Icon}>
             <div className={styles.Container2IconBox1}>
             <FaCalculator size="3em" />
             </div>
            </div>
            <div className={styles.Container2Data}>
              <p>Deliver in 45 days</p>
            </div>
          </div>
          <div className={styles.Container2Box}>
            <div className={styles.Container2Icon}>
            <div className={styles.Container2IconBox2}>
            <FaUserPlus size="3em" />
            </div>
            </div>
            <div className={styles.Container2Data}>
            <p>500+ happy customer</p>
            </div>
          </div>
          <div className={styles.Container2Box}>
            <div className={styles.Container2Icon}>
            <div className={styles.Container2IconBox3}>
            <FaCreditCard size="3em" />
            </div>
            </div>
            <div className={styles.Container2Data}>
            <p>Easy EMI options</p>
            </div>
          </div>
          <div className={styles.Container2Box}>
            <div className={styles.Container2Icon}>
            <div className={styles.Container2IconBox4}>
             <FaCheck size="3em" />
            </div>
            </div>
            <div className={styles.Container2Data}>
            <p>Regular quality checks</p>
            </div>
          </div>
          <div className={styles.Container2Box}>
            <div className={styles.Container2Icon}>
            <div className={styles.Container2IconBox5}>
            <FaEyeSlash size="3em" />
            </div>
            </div>
            <div className={styles.Container2Data}>
            <p>0 Hidden costs</p>
            </div>
          </div>
          <div className={styles.Container2Box}>
            <div className={styles.Container2Icon}>
            <div className={styles.Container2IconBox6}>
            <FaCheck size="3em" />
            </div>
            </div>
            <div className={styles.Container2Data}>
            <p>10 years warranty</p>
            </div>
          </div>
          </div>
    </div>
  );
};

export default Container2;
