import React from 'react';
import styles from "../assets/stylesheets/navbar.module.css";
import Modal from './Modal';

const Navbar = () => {
    return (
        <>
            <nav>
                <div className={styles.navLogo}>MEDIBuddy</div>
                <ul className={styles.nav__links}>
                    <li className={styles.link}>Home</li>
                    <li className={styles.link}>About Us</li>
                    <li className={styles.link}>Courses</li>
                    <li className={styles.link}>Pages</li>
                    <li className={styles.link}>Blog</li>
                    <li className={styles.link}>Contact</li>
                </ul>
                <button type="button" data-bs-toggle="modal" data-bs-target="#exampleModal" className="btn">Book Now</button>
            </nav>
            <div>
                <Modal />
            </div>
        </>
    );
}

export default Navbar;
