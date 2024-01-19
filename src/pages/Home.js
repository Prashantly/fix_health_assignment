import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import styles from "../assets/stylesheets/home.module.css"
import Testimonials from '../components/Testimonials'

const Home = () => {
    return (
        <div className={styles.container}>
            <Navbar />
            <Hero />
            <div className={styles.section}>
                <Testimonials />
            </div>
        </div>
    )
}

export default Home