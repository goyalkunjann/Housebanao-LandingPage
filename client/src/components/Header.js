import React from 'react';
import styles from './Header.module.css'; // Changed import statement
import logo from '../assets/logo@2x.png';

const Header = () => {
    return (
        <header>
            <div className={styles.logo}> {/* Use styles.logo for CSS module */}
                <img src={logo} alt="Logo" />
            </div>
            <nav>
                <ul>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">Contact Us</a></li>
                    <li><a href="#">About Us</a></li>
                    <li><a href="#">Connect</a></li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;
