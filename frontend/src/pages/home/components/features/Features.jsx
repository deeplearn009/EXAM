import React from 'react'
import styles from './Features.module.scss'

const Features = () => {
    return (
        <div className={styles.container}>
            <div className={styles.cards}>
                <div className={styles.card}>
                    <div className={styles.logo}>
                        <img src="https://htmldemo.net/pronia/pronia/assets/images/shipping/icon/car.png" alt=""/>
                    </div>
                    <div className={styles.text}>
                        <h3>Free Shipping</h3>
                        <p>Capped at $319 per order</p>
                    </div>
                </div>
                <div className={styles.card}>
                    <div className={styles.logo}>
                        <img src="https://htmldemo.net/pronia/pronia/assets/images/shipping/icon/card.png" alt=""/>
                    </div>
                    <div className={styles.text}>
                        <h3>Safe Payment</h3>
                        <p>With our payment gateway</p>
                    </div>
                </div>
                <div className={styles.card}>
                    <div className={styles.logo}>
                        <img src="https://htmldemo.net/pronia/pronia/assets/images/shipping/icon/service.png" alt=""/>
                    </div>
                    <div className={styles.text}>
                        <h3>Best Services</h3>
                        <p>Friendly & Supper Services</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Features
