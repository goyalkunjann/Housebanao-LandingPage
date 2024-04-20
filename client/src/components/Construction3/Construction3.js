// Construction3.js
import React from 'react';
import styles from './Construction3.module.css';
import picture1 from '../../assets/picture1.jpg';
import picture2 from '../../assets/picture2.jpg';
import picture3 from '../../assets/picture3.jpg';
import picture4 from '../../assets/picture4.jpg';
import picture5 from '../../assets/picture5.jpg';
import picture6 from '../../assets/picture6.jpg';

const Construction3 = () => {
    const flashcards = [
        { imgSrc: picture1 },
        { imgSrc: picture2 },
        { imgSrc: picture3 },
        { imgSrc: picture4 },
        { imgSrc: picture5 },
        { imgSrc: picture6 }
    ];

    return (
        <div className={styles.container3}>
            <h1>Inspiration for Home Interior Designs</h1>
            <p>Give your home a new look with these interior design ideas curated for you.</p>
            <div className={styles.gallery}>
                {flashcards.map((card, index) => (
                    <img key={index} src={card.imgSrc} alt={`Interior design ${index + 1}`}
                         className={`${index === 0 || index === 5 ? styles.large : styles.small}`}
                    />
                ))}
            </div>
        </div>
    );
};

export default Construction3;
