import React from 'react';
import styles from './Construction5.module.css';
import output1 from '../../assets/output1.png';
import output2 from '../../assets/output2.png';
import output3 from '../../assets/output3.png';

const Construction5 = () => {
    const flashcards = [
        { imgSrc: output1, text: "Modern 4BHK penthouse, Bangalore" },
        { imgSrc: output2, text: "Contemporary 3BHK penthouse, Delhi" },
        { imgSrc: output3, text: "Elegant 2BHK flat, Noida" }
    ];

    return (
        <div className={styles.container}>
            <h1 className={styles.h1}>Get a glimpse of Housebanao homes</h1>
            <div className={styles.flashcardsContainer}>
                {flashcards.map((card, index) => (
                    <div key={index} className={styles.flashcard}>
                        <img src={card.imgSrc} alt={`Housebanao home ${index + 1}`} />
                        <p className={styles.cardText}>{card.text}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Construction5;
