import React from 'react';
import styles from './Container6.module.css';

const Container6 = () => {
    return (
        <div className={styles.Container6}>
            <div className={styles.Container6Main}>
                <div className={styles.Container6LeftContainer}>
                    <div className={styles.Container6LeftContainerBox1}>
                        <button>Start your construction</button>
                    </div>
                    <div className={styles.Container6LeftContainerBox2}>
                        <div className={styles.Container6LeftContainerBox2Data}>
                            <div className={styles.Container6LeftContainerBox2DataValue}>
                                <h1>400+</h1>
                            </div>
                            <div className={styles.Container6LeftContainerBox2DataText}>
                                <p>Project Complete</p>
                            </div>
                        </div>
                        <div className={styles.Container6LeftContainerBox2Data}>
                            <div className={styles.Container6LeftContainerBox2DataValue}>
                                <h1>600+</h1>
                            </div>
                            <div className={styles.Container6LeftContainerBox2DataText}>
                                <p>Satisfied Clients</p>
                            </div>
                        </div>
                        <div className={styles.Container6LeftContainerBox2Data}>
                            <div className={styles.Container6LeftContainerBox2DataValue}>
                                <h1>100+</h1>
                            </div>
                            <div className={styles.Container6LeftContainerBox2DataText}>
                                <p>Unique Styles</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={styles.Container6RightContainer}>
                    <img
                        className={styles.Container6Img}
                        loading="lazy"
                        alt=""
                        src="/image-2.png"
                    />
                </div>
            </div>
        </div>
    );
}

export default Container6;
