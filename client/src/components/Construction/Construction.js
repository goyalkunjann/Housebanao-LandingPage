import React, { useRef } from 'react';
import styles from './Construction.module.css';
import flashcard1 from '../../assets/flashcard1.jpg';
import flashcard2 from '../../assets/flashcard2.jpg';
import flashcard3 from '../../assets/flashcard3.jpg';
import flashcard4 from '../../assets/flashcard4.jpg';

const Construction = () => {
  const flashcards = [
    { imgSrc: flashcard1, title: "Modular Kitchen", description: "Functional kitchen with modern design." },
    { imgSrc: flashcard2, title: "Full Home Interior", description: "Latest interior solutions for your home." },
    { imgSrc: flashcard3, title: "End to End Construction", description: "Latest home solutions." },
    { imgSrc: flashcard4, title: "Luxury Interiors", description: "Latest home solutions." },
  ];

  const containerRef = useRef(null);

  const scroll = (direction) => {
    if (containerRef.current) {
      const { scrollLeft, clientWidth } = containerRef.current;
      const scrollTo = direction === 'left' ? scrollLeft - clientWidth : scrollLeft + clientWidth;
      containerRef.current.scrollTo({ left: scrollTo, behavior: 'smooth' });
    }
  };

  return (
    <div className={styles.container}>
      <h1>One-stop shop for all construction and interiors</h1>
      <p>Be it end-to-end construction, interior or modular solutions, we have it all for your home or <br></br>office. With a wide range of furniture & decor, we have your back from start to finish.</p>
      <div className={styles.arrowButton + " " + styles.left} onClick={() => scroll('left')}>&lt;</div>
      <div className={styles.arrowButton + " " + styles.right} onClick={() => scroll('right')}>&gt;</div>
      <div ref={containerRef} className={styles.flashcardContainer}>
        {flashcards.map((card, index) => (
          <div key={index} className={styles.flashcard}>
            <div className={styles.imageContainer} style={{ backgroundImage: `url(${card.imgSrc})` }}>
            </div>
            <div className={styles.textContainer}>
              <h3 className={styles.flashcardTitle}>{card.title}</h3>
              <p className={styles.flashcardDescription}>{card.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Construction;
