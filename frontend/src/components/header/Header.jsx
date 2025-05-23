import React from 'react'
import styles from './Header.module.scss'
import {Link} from "react-router";
import {CiHeart, CiSearch} from "react-icons/ci";
import { GiHamburgerMenu } from "react-icons/gi";
import {FiUsers} from "react-icons/fi";
import {MdOutlineShoppingCart} from "react-icons/md";

const Header = () => {
    return (
        <div className={styles.container}>
            <header>
                <div className={styles.logo}>
                    <Link to="/"><img src="https://htmldemo.net/pronia/pronia/assets/images/logo/dark.png" alt="logo"/></Link>
                </div>
                <nav>
                    <Link to="/">Home</Link>
                    <Link to="/basket">Basket</Link>
                    <Link to="/wishlist">Wishlist</Link>
                    <Link to="/admin">Admin</Link>
                    <a href="#">About us</a>
                    <a href="#">Pages</a>
                </nav>
                <div className={styles.iconbox}>
                    <CiSearch size={22} style={{cursor: 'pointer'}}/>
                    <CiHeart size={22} style={{cursor: 'pointer'}}/>
                    <FiUsers size={22} style={{cursor: 'pointer'}}/>
                    <Link to='/basket' style={{textDecoration: 'none', color: '#000'}}><MdOutlineShoppingCart size={22} style={{cursor: 'pointer'}}/></Link>
                </div>
                <div className={styles.burger}>
                    <GiHamburgerMenu size={30}/>
                </div>
            </header>
        </div>
    )
}
export default Header
