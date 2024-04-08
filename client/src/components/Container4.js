import React from 'react';
import styles from './Container4.module.css';

const Container4 = () => {
    return (
        <div className={styles.container4}>
            <h1><b>Our 6 steps process</b></h1>
            <h3 className={styles.processHeading}>Our house construction steps are simple and easy to understand</h3>
            <div className={styles.steps}>
                <div className={styles.step}>
                    <div className={styles.stepCircle}>1</div>
                    <div className={styles.label}>Understand the requirement in detail</div>
                </div>
                <div className={styles.stepLine}></div>
                <div className={styles.step}>
                    <div className={styles.stepCircle}>2</div>
                    <div className={styles.label}>Provide designs at lightning fast speed</div>
                </div>
                <div className={styles.stepLine}></div>
                <div className={styles.step}>
                    <div className={styles.stepCircle}>3</div>
                    <div className={styles.label}>Estimate cost suitable to your budget</div>
                </div>
                <div className={styles.stepLine}></div>
                <div className={styles.step}>
                    <div className={styles.stepCircle}>4</div>
                    <div className={styles.label}>Close 3D designs</div>
                </div>
                <div className={styles.stepLine}></div>
                <div className={styles.step}>
                    <div className={styles.stepCircle}>5</div>
                    <div className={styles.label}>Manage seamless execution of project</div>
                </div>
                <div className={styles.stepLine}></div>
                <div className={styles.step}>
                    <div className={styles.stepCircle}>6</div>
                    <div className={styles.label}>On-Time delivery</div>
                </div>
            </div>
        </div>
    );
}

export default Container4;
