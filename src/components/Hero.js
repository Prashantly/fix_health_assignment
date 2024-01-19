import React from 'react'
import styles from "../assets/stylesheets/hero.module.css"
import Modal from './Modal'

const Hero = () => {
    return (
        <>
            <header className={styles.header}>
                <div className={styles.content}>
                    <h1><span>Get Quick</span><br />Medical Services</h1>
                    <p>
                        In today's fast-paced world, access to prompt and efficient medical
                        services is of paramount importance. When faced with a medical
                        emergency or seeking immediate medical attention, the ability to
                        receive quick medical services can significantly impact the outcome
                        of a situation.
                    </p>
                    <button type="button" data-bs-toggle="modal" data-bs-target="#exampleModal" className="btn">Book Now</button>
                </div>
                <div className={styles.image}>
                    <span className={styles.image__bg}></span>
                    <img src="header.png" alt="header_img" />
                    <div className={`${styles.image__content} ${styles.image__content__1}`}>
                        <span><i className="ri-user-3-line"></i></span>
                        <div className="details">
                            <h4>1520+</h4>
                            <p>Active Clients</p>
                        </div>
                    </div>
                    <div className={`${styles.image__content} ${styles.image__content__2}`}>
                        <ul>
                            <li>
                                <span><i className="ri-check-line"></i></span>
                                Get 20% off on every 1st month
                            </li>
                            <li>
                                <span><i className="ri-check-line"></i></span>
                                Expert Doctors
                            </li>
                        </ul>
                    </div>
                </div>
            </header>
            <div>
                <Modal />
            </div>
        </>
    )
}

export default Hero