import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Header.module.css';
import image from '../../images/Logo.png';
const Header = () => {
    return (
        <div className={styles.container}>
            <Link to="/">
            <img src={image} alt="" />
            </Link>
            <div className={styles.categories}>
                <Link to='/shop'>Store</Link>
                <Link>Sales</Link>
                <Link>About Us</Link>
                <Link>Cart</Link>
                <Link>Profile</Link>
            </div>
        </div>
    );
};

export default Header;