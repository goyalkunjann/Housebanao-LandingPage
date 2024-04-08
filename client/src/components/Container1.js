import React, { useState } from 'react';
import Houseimage from '../assets/Houseimage.jpeg';
import styles from './Container1.module.css';

const Container1 = () => {
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        location: ''
    });

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            const response = await fetch('http://localhost:3001/appointments', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            });

            if (response.ok) {
                const result = await response.json();
                alert(`Appointment booked successfully: ${JSON.stringify(result.appointment)}`);
                setFormData({
                    name: '',
                    phone: '',
                    location: ''
                });
            } else {
                alert("Failed to book appointment");
            }
        } catch (error) {
            console.error('Error booking appointment:', error);
            alert("Error sending data to server");
        }
    };

    return (
        <div className={styles.container1}>
            <div className={styles.leftContainer1} style={{backgroundImage: `url(${Houseimage})`}}>
                <div className={styles.content}>
                    <h1 className={styles.contentTitle1}>Construct your</h1>
                    <h1 className={styles.contentTitle2}>Dream Home</h1>
                    <p>Hassle-free Interiors and Construction from start<br /> to&nbsp;finish.</p>
                    <button className={styles.button1}>Start your construction</button>
                    <br />
                    <p className={styles.popular}>Popular:</p>
                    <button className={styles.button2}>Interior Designing</button>
                    <button className={styles.button2}>End to End Construction</button>
                </div>
            </div>
            <div className={styles.rightContainer1}> 
                <form onSubmit={handleSubmit} className={styles.contentA}>
                    <h1>Book a free</h1>
                    <h1>appointment</h1>
                    <input type="text" name="name" placeholder="Name" value={formData.name} onChange={handleChange} />
                    <input type="tel" name="phone" placeholder="Mobile Number" value={formData.phone} onChange={handleChange} />
                    <input type="text" name="location" placeholder="Location of your plot" value={formData.location} onChange={handleChange} />
                    <button type="submit">Book Now</button>
                </form>
            </div>
        </div>
    );
}

export default Container1;
