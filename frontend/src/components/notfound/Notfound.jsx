import React from 'react'
import styles from './NotFound.module.scss'
import {Link} from "react-router";

const Notfound = () => {
    return (
        <div className={styles.container}>
            <h1>Notfound</h1>
            <Link to="/">Go Home</Link>
        </div>
    )
}
export default Notfound
