import styles from "./Container3.module.css";

const Container3 = () => {
  return (
    <div className={styles.Container3}>
           <div className={styles.Container3BoxHeading}>
            <h1>Cost Estimation Of Constructing A House In</h1>
           </div>
           <div className={styles.Container3BoxData}>
              <div className={styles.Container3BoxDataPlan}>
                <h1>Basic</h1>
              </div>
              <div className={styles.Container3BoxDataPrice}>
                <p>₹ 999 /sqft (Incl. GST)</p>
              </div>
           </div>
           <div className={styles.Container3BoxData}>
              <div className={styles.Container3BoxDataPlan}>
                <h1>Classic</h1>
              </div>
              <div className={styles.Container3BoxDataPrice}>
                <p>₹ 1700 /sqft (Incl. GST)</p>
              </div>
           </div>
           <div className={styles.Container3BoxData}>
              <div className={styles.Container3BoxDataPlan}>
                <h1>Premium</h1>
              </div>
              <div className={styles.Container3BoxDataPrice}>
                <p>₹ 2100 /sqft (Incl. GST)</p>
              </div>
           </div>
           <div className={styles.Container3BoxData}>
              <div className={styles.Container3BoxDataPlan}>
                <h1>Royal</h1>
              </div>
              <div className={styles.Container3BoxDataPrice}>
                <p>₹ 2500 /sqft (Incl. GST)</p>
              </div>
           </div>
           <div className={styles.Container3BoxButton}>
              <button>Book Free Consultation</button>
           </div>
    </div>
  );
};

export default Container3;
