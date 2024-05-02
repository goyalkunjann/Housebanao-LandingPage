import React from 'react';
import styles from './Construction4.module.css';
import house from '../../assets/house.png';

const Construction4 = () => {
    return (
        <div className={styles.container4}>
            <div className={styles.titleContainer}>
                <h1>Estimate Price Calculator</h1>
                <p>Calculate the approximate cost of constructing and designing your home</p>
            </div>
            <div className={styles.sectionContainer}>
                <div className={styles.container1}>
                    <div className={styles.imageSection}>
                        <img src={house} alt="Home construction visual" />
                    </div>
                    <div className={styles.infoSection}>
                        <h2>Full Home Construction</h2>
                        <p>Get an approximate costing for your full home construction.</p>
                        <button>Calculate</button>
                    </div>
                </div>
                <div className={styles.container1}>
                    <div className={styles.imageSection}>
                        <img src={house} alt="Interior design visual" />
                    </div>
                    <div className={styles.infoSection}>
                        <h2>Full Home Interior Designing</h2>
                        <p>Get an approximate costing for your full home interior designing.</p>
                        <button>Calculate</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Construction4;
