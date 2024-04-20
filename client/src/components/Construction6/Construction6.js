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

    const [logos, setLogos] = useState(initialLogos);

    useEffect(() => {
        const interval = setInterval(() => {
            setLogos(logos => {
                const first = logos.shift(); // Remove the first logo
                return [...logos, first]; // Add it to the end
            });
        }, 5000); // Adjust time to control animation speed

        return () => clearInterval(interval); // Cleanup the interval on component unmount
    }, []);

    return (
        <div className={styles.construction6}>
            <h1>Our Trusted partners</h1>
            <p>Great collaborations that produce great designs</p>
            <div className={styles.logoSlider}>
                {logos.map((logo, index) => (
                    <img key={index} src={logo.imgsrc} alt={logo.alt} style={{flex: '0 0 auto'}} />
                ))}
            </div>
        </div>
    );
}

export default Construction6;
