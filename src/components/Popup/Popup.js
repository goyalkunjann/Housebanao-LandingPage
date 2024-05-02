import React, { useState } from 'react';
import styles from './Popup.module.css';
import logo from '../../assets/logo@2x.png';

const Popup = () => {
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        location: ''
    });
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState('');
    const [showPopup, setShowPopup] = useState(true);

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        if (!formData.name || !formData.phone || !formData.location) {
            setError('Please fill in all fields.');
            return;
        }

        setIsLoading(true);
        setError('');

        try {
            const response = await fetch('http://localhost:3001/appointments', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData)
            });

            if (!response.ok) {
                const errorDetails = await response.json();
                throw new Error(errorDetails.error || "Failed to book appointment");
            }

            await response.json();
            setFormData({ name: '', phone: '', location: '' }); // Reset form data
            setShowPopup(false); // Close the popup after successful booking
        } catch (error) {
            setError(error.message || "Error sending data to server");
        } finally {
            setIsLoading(false);
        }
    };

    return (
        showPopup && (
            <div className={styles.popup}>
                {/* Close button without any messaging */}
                <button onClick={() => setShowPopup(false)} className={styles.closeButton}>X</button>
                <img src={logo} alt="Logo" className={styles.logo} />
                <h1 className={styles.title}>Book your appointment</h1>
                <h3 className={styles.subtitle}>Get free consultation</h3>
                <form onSubmit={handleSubmit}>
                    <div className={styles.inputHolder}>
                        <input type="text" name="name" placeholder="Name" value={formData.name} onChange={handleChange} className={styles.input} />
                        <input type="text" name="phone" placeholder="Phone Number" value={formData.phone} onChange={handleChange} className={styles.input} />
                        <input type="text" name="location" placeholder="Location Of your plot" value={formData.location} onChange={handleChange} className={styles.input} />
                    </div>
                    <div className={styles.terms}>
                        <input type="checkbox" id="terms" className={styles.checkbox} />
                        <label htmlFor="terms" className={styles.termsLabel}>I agree to the <a href="/terms-and-conditions" className={styles.termsLink}>Terms and Conditions</a></label>
                    </div>
                    {error && <p className={styles.error}>{error}</p>}
                    <button type="submit" className={styles.submitButton} disabled={isLoading}>
                        {isLoading ? 'Booking...' : 'Book Now'}
                    </button>
                </form>
            </div>
        )
    );
};

export default Popup;
