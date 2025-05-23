import React from 'react'
import styles from './Banner.module.scss'

const IconBanner = () => {
    return (
        <div className={styles.container}>
            <div className={styles.content}>
                <div className={styles.ico}>
                    <img src="https://htmldemo.net/pronia/pronia/assets/images/brand/1-1.png" alt=""/>
                </div>
                <div className={styles.ico}>
                    <img src="https://htmldemo.net/pronia/pronia/assets/images/brand/1-2.png" alt=""/>
                </div>
                <div className={styles.ico}>
                    <img src="https://htmldemo.net/pronia/pronia/assets/images/brand/1-3.png" alt=""/>
                </div>
                <div className={styles.ico}>
                    <img src="https://htmldemo.net/pronia/pronia/assets/images/brand/1-4.png" alt=""/>
                </div>
                <div className={styles.ico}>
                    <img src="https://htmldemo.net/pronia/pronia/assets/images/brand/1-5.png" alt=""/>
                </div>
            </div>
        </div>
    )
}
export default IconBanner
