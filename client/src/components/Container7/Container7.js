import React from 'react';
import styles from "./Container7.module.css";
import Lightingdesign from '../../assets/Lightingdesign.png';
import Interiordesign from '../../assets/Interiordesign.png';
import Outdoordesign from '../../assets/Outdoordesign.png';

const Container7 = () => {
    return (
        <div className={styles.container}>
            <h1 className={styles.heading}>Our Services</h1>
            <div className={styles["services-row"]}>
                <div className={styles.service}>
                    <img src={Lightingdesign} alt="Lighting Design" />
                    <div className={styles["service-desc"]}>
                        <h3>Budget - Premium - Luxury</h3>
                        <p>Comprehensive interior design & Construction services tailored to diverse budgets, guaranteeing excellence and creative solutions for every client.</p>
                    </div>
                </div>
                <div className={styles.service}>
                    <img src={Interiordesign} alt="Interior Design" />
                    <div className={styles["service-desc"]}>
                        <h3>Interior Designing & Construction</h3>
                        <p>From concept to completion, we oversee every detail to bring your vision to life efficiently.</p>
                    </div>
                </div>
                <div className={styles.service}>
                    <img src={Outdoordesign} alt="Outdoor Design" />
                    <div className={styles["service-desc"]}>
                        <h3>Professionals - Corporates - MSMEs</h3>
                        <p>Celebrate the changing seasons with our seasonal outdoor decor services.</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Container7;
