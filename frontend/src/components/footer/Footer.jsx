import React from 'react'
import styles from './Footer.module.scss'
import {FaHeart} from "react-icons/fa6";

const Footer = () => {
    return (
        <div className={styles.container}>
            <p>© 2021 Pronia Made with <FaHeart color={"red"}/> by HasThemes</p>
        </div>
    )
}
export default Footer
