import React from 'react';
import { FaInstagram, FaFacebook, FaTwitter, FaLinkedin } from 'react-icons/fa';
import styles from './Container8.module.css';
import logo from '../../assets/logo@2x.png';

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
                <div className={styles.socialIcons}>
                    <a href='https://www.facebook.com/profile.php?id=61557081024259' className={styles.socialIcon} target="_blank" rel="noopener noreferrer"><FaFacebook /></a>
                    <a href='https://www.linkedin.com/company/housebanao/' className={styles.socialIcon} target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
                    <a href='https://www.instagram.com/house_banao/' className={styles.socialIcon} target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
                </div>
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
                    <h6 className={styles.heading}>Resources</h6>
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
                    <h6 className={styles.heading}>Contact Us</h6>
                </div>
                <ul className={styles.serviceList}>
                    <li>support@housebanao.com</li>
                    <li>747B, 7th floor, JMD Megapolis, Sector 48, Gurgaon, Haryana 122018</li>
                </ul>
            </div>
        </footer>
    );
}

export default Container8;
