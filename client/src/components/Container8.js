// Container8.js
import React from 'react';
import { FaInstagram, FaFacebook, FaTwitter, FaLinkedin} from 'react-icons/fa';


import styles from './Container8.module.css'; 

import logo from '../assets/logo@2x.png';
const Container8 = () => {
    return (
        <footer className={styles.footer}>
            <div className={styles.column}>
                <div className={styles.logoContainer}>
                    <img src={logo} alt="Logo" className={styles.logo} /> 
                </div>
                <p className={styles.footerDescription}>
                    House Banao: Your premier destination for luxury and modern interior design and construction.
                </p>
                <div className={`${styles.socialIcons} ${styles.iconColor}`}>
    <a href='' className={styles.socialIcon}>
        <FaFacebook />
    </a>
    <a href='' className={styles.socialIcon}>
        <FaTwitter />
    </a>
    <a href='' className={styles.socialIcon}>
        <FaLinkedin />
    </a>
    <a href='' className={styles.socialIcon}>
        <FaInstagram />
    </a>
</div>

            </div>
            <div className={styles.column}>
                <div className={styles.columnHeading}>
                    <h6 className={styles.heading}>Quick Links</h6>
                </div>
                <ul className={styles.serviceList}>
                    <li>Reviews</li>
                    <li>Careers</li>
                    <li>Pricing</li>
                    <li>Press Inquiries</li>
                </ul>
            </div>
            <div className={styles.column}>
                <div className={styles.columnHeading}>
                    <h6 className={styles.heading}>Our Services</h6>
                </div>
                <ul className={styles.serviceList}>
                    <li>Interior Design</li>
                    <li>End to End Construction</li>
                    <li>House Design</li>
                    <li>Office Design</li>
                </ul>
            </div>
            <div className={styles.column}>
                <div className={styles.columnHeading}>
                    <h6 className={styles.heading}>Contact Us</h6>
                </div>
                <ul className={styles.serviceList}>
                    <li>invest@housebanao.com</li>
                    <li>747B, 7th floor, JMD Megapolis, Sector 48, Gurgaon, Haryana 122018</li>
                </ul>
            </div>
        </footer>
    );
}

export default Container8;
