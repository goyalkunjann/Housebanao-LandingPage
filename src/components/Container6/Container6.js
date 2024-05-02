import React, { useState } from 'react';
import styles from './Container6.module.css';
import Popup from "../Popup/Popup"; 

const Container6 = () => {
    const [showPopup, setShowPopup] = useState(false);

    const togglePopup = () => {
        setShowPopup(!showPopup);
    };

    return (
        <div className={styles.Container6}>
            {showPopup && <Popup />}
            <div className={styles.Container6Main}>
                <div className={styles.Container6LeftContainer}>
                    <div className={styles.Container6LeftContainerBox1}>
                        <button onClick={togglePopup}>Start your construction</button>
                    </div>
                    <div className={styles.Container6LeftContainerBox2}>
                        <div className={styles.Container6LeftContainerBox2Data}>
                            <h1>400+</h1>
                            <p>Projects Completed</p>
                        </div>
                        <div className={styles.Container6LeftContainerBox2Data}>
                            <h1>600+</h1>
                            <p>Satisfied Clients</p>
                        </div>
                        <div className={styles.Container6LeftContainerBox2Data}>
                            <h1>100+</h1>
                            <p>Innovative Looks</p>                        
                        </div>
                    </div>
                </div>
                <div className={styles.Container6RightContainer}>
                    <img
                        className={styles.Container6Img}
                        loading="lazy"
                        alt="Our Projects"
                        src="/image-2.png"
                    />
                </div>
            </div>
        </div>
    );
}

export default Container6;
