import React, { useState } from 'react';
import styles from './Container1.module.css'; 
import Houseimage from '../../assets/Houseimage.jpeg';
import WhatsAppIcon from '../../assets/whatsapp.png';
import PhoneIcon from '../../assets/phone.png';
import ChatIcon from '../../assets/chat.png';
import Popup from "../Popup/Popup"; 

const Container1 = () => {
    const [showPopup, setShowPopup] = useState(false);

    const togglePopup = () => {
        setShowPopup(!showPopup);
    };

    return (
        <div className={styles.container1}>
            {showPopup && <Popup />}
            <div className={styles.leftContainer1} style={{ backgroundImage: `url(${Houseimage})` }}>
                <div className={styles.content}>
                    <h1 className={styles.contentTitle1}>Construct your</h1>
                    <h1 className={styles.contentTitle2}>Dream Home</h1>
                    <p>Hassle-free Interiors and Construction from start to finish.</p>
                    <button className={styles.button1} onClick={togglePopup}>Start your construction</button>
                    <br />
                    <p className={styles.popular}>Popular:</p>
                    <button className={styles.button2}>Interior Designing</button>
                    <button className={styles.button2}>End to End Construction</button>
                </div>
            </div>
            <div className={styles.iconsPage}>
                <div className={styles.iconGroup}>
                    <img src={WhatsAppIcon} alt="WhatsApp" className={styles.whatsappIcon} />
                    <img src={PhoneIcon} alt="Phone Call" className={styles.phoneIcon} />
                </div>
                <img src={ChatIcon} alt="Chat" className={styles.chatIcon} />
            </div>
        </div>
    );
};

export default Container1;
