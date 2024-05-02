import React from 'react';
import styles from './Container9.module.css'; 
import calculatorr from '../../assets/calculatorr.jpeg';
import homescreen from '../../assets/homescreen.jpg';

const Container9 = () => {
    return (
        <div className={styles.container9}>
            <h1 className={styles.title}>Estimate Price Calculator</h1>
            <h3 className={styles.subtitle}>Calculate the approximate cost of constructing and designing your home</h3>
            <div className={styles.box}>
                <div className={styles.boxItem}>
                    <img src={homescreen} alt="Home Construction" className={styles.logo} />
                    <img src={calculatorr} alt="Home Interior Designing" className={styles.logo2} />
                    <h1 className={styles.boxTitle}>Full Home Construction</h1>
                    <h3 className={styles.boxSubtitle}>Get an approximate costing for your full home construction</h3>
                    <button className={styles.button}>Calculate</button>
                </div>
                <div className={styles.boxItem}>
                    <img src={homescreen} alt="Home Construction" className={styles.logo} />
                    <img src={calculatorr} alt="Home Interior Designing" className={styles.logo2} />
                    <h1 className={styles.boxTitle}>Full Home Interior Designing</h1>
                    <h3 className={styles.boxSubtitle}>Get an approximate costing for your full home interior designing</h3>
                    <button className={styles.button}>Calculate</button>
                </div>
            </div>
        </div>
    );
};

export default Container9;
