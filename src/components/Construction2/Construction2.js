// Construction2.js
import React from 'react';
import styles from './Construction2.module.css';
import picture1 from '../../assets/picture1.jpg';
import picture2 from '../../assets/picture2.jpg';
import picture3 from '../../assets/picture3.jpg';
import picture4 from '../../assets/picture4.jpg';
import picture5 from '../../assets/picture5.jpg';
import picture6 from '../../assets/picture6.jpg';

const Construction2 = () => {
    return (
        <div className={styles.container3}>
            <h1>Our Gallery</h1>
            <div className={styles.roomHeader}>
                <span className={styles.roomTitle}>Living Room</span>
                <span className={styles.roomTitle}>Bedroom</span>
                <span className={styles.roomTitle}>Bathroom</span>
                <span className={styles.roomTitle}>Kitchen</span>
            </div>
            <div className={styles.gallery}>
                { [picture1, picture2, picture3, picture4, picture5, picture6].map((imgSrc, index) => (
                    <img key={index} src={imgSrc} alt={`Interior design ${index + 1}`}
                         className={`${index === 0 || index === 5 ? styles.large : styles.small}`}
                    />
                ))}
            </div>
        </div>
    );
};

export default Construction2;
