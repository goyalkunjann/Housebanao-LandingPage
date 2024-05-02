import React from 'react';
import styles from "./Container2.module.css";
import { FaCalculator, FaUserPlus, FaCreditCard, FaCheck, FaEyeSlash } from 'react-icons/fa';

const Container2 = () => {
  const flashcards = [
    { icon: <FaCalculator size="3em" />, text: "Deliver in 45 days" },
    { icon: <FaUserPlus size="3em" />, text: "500+ happy customers" },
    { icon: <FaCreditCard size="3em" />, text: "Easy EMI options" },
    { icon: <FaCheck size="3em" />, text: "Regular quality checks" },
    { icon: <FaEyeSlash size="3em" />, text: "0 Hidden costs" },
    { icon: <FaCheck size="3em" />, text: "10 years warranty" }
  ];

  // Duplicate the flashcards for seamless scrolling
  const allFlashcards = [...flashcards, ...flashcards];

  return (
    <div className={styles.Container2}>
      <h1>Why choose us?</h1>
      <p>Give your home a new look with these interior design ideas curated for you.</p>
      <div className={styles.Container2BoxData}>
        {allFlashcards.map((card, index) => (
          <div key={index} className={styles.Container2Box}>
            <div className={styles.Container2IconBox}>
              {card.icon}
            </div>
            <div className={styles.Container2Data}>{card.text}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Container2;
