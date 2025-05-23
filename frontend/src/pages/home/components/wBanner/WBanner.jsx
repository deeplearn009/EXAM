import React from 'react'
import styles from './WBanner.module.scss'

const WBanner = () => {
    return (
        <div className={styles.container}>
            <div className={styles.content}>
                <div className={styles.left}>
                    <p id={styles.top}>65% off</p>
                    <p id={styles.center}>New Plant</p>
                    <p id={styles.bottom}>Pronia, With 100% Natural, Organic & Plant Shop</p>
                    <button>Discover Now</button>
                </div>
                <div className={styles.right}>
                    <img src="https://htmldemo.net/pronia/pronia/assets/images/slider/inner-img/1-2-524x617.png" alt=""/>
                </div>
            </div>
        </div>
    )
}
export default WBanner
