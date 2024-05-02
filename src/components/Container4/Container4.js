import React from 'react';
import styles from './Container4.module.css';

const Container4 = () => {
    const steps = [
        { number: "1", label: "Understand the requirement in detail" },
        { number: "2", label: "Provide designs at lightning fast speed" },
        { number: "3", label: "Estimate cost suitable to your budget" },
        { number: "4", label: "Close 3D designs" },
        { number: "5", label: "Manage seamless execution of project" },
        { number: "6", label: "On-Time delivery" }
    ];

    return (
        <div className={styles.container4}>
            <h1>Our 6 steps process</h1>
            <h3 className={styles.processHeading}>Our house construction steps are simple and easy to understand</h3>
            <div className={styles.steps}>
                {steps.map((step, index) => (
                    <>
                        <div key={index} className={styles.step}>
                            <div className={styles.stepCircle}>{step.number}</div>
                            <div className={styles.label}>{step.label}</div>
                        </div>
                        {index < steps.length - 1 && <div className={styles.stepLine}></div>}
                    </>
                ))}
            </div>
        </div>
    );
}

export default Container4;
