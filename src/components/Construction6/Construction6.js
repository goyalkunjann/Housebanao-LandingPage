// Construction6.js
import React, { useEffect, useState } from 'react';
import styles from './Construction6.module.css';
import Bosch from '../../assets/Bosch.png';
import Dorset from '../../assets/dorset.png';
import AsianPaints from '../../assets/asianpaints.png';
import Hettich from '../../assets/Hettich.png';
import Siemens from '../../assets/Siemens.png';

const Construction6 = () => {
    const initialLogos = [
        { imgsrc: Bosch, alt: "Bosch" },
        { imgsrc: Dorset, alt: "Dorset" },
        { imgsrc: AsianPaints, alt: "Asian Paints" },
        { imgsrc: Hettich, alt: "Hettich" },
        { imgsrc: Siemens, alt: "Siemens" }
    ];
    // Duplicate the logos for a seamless looping effect
    const [logos, setLogos] = useState([...initialLogos, ...initialLogos]);

    useEffect(() => {
        const interval = setInterval(() => {
            setLogos(currentLogos => {
                const first = currentLogos.shift(); // Remove the first logo
                return [...currentLogos, first]; // Add it back to the end
            });
        }, 5000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className={styles.construction6}>
            <h1>Our Trusted Partners</h1>
            <p>Great collaborations that produce great designs</p>
            <div className={styles.logoSlider}>
                {logos.map((logo, index) => (
                    <img key={index} src={logo.imgsrc} alt={logo.alt} />
                ))}
            </div>
        </div>
    );
}

export default Construction6;
