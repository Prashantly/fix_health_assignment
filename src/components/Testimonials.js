import { reviews } from '../reviews';
import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';
// import Swiper and modules styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { useEffect } from 'react';
import styles from "../assets/stylesheets/testimonials.module.css"


const Testimonials = () => {

    useEffect(() => {
        const swiper = new Swiper('.swiper', {
            // configure Swiper to use modules
            modules: [Navigation, Pagination],
            grabCursor: true,
            spaceBetween: 30,
            pagination: {
                el: '.js-testimonials-pagination',
                clickable: true
            },
            breakpoints: {
                767: {
                    slidesPerView: 2,
                }
            }
        });

        return () => {
            swiper.destroy()
        }
    })

    return (
        <div className={styles.containerTest}>
            <div className={styles.sectionHeader}>
                <h2 className={styles.title}>Patient Recovery Stories</h2>
                <h5 className={styles.subTitle}>See what our patients have to say about their experience with us.</h5>
            </div>
            <div className='testimonials-content'>
                <div className="swiper testimonials-slider js-testimonials-slider testimonials">
                    <div className={`${styles.swiperWrapper} swiper-wrapper`}>
                        {
                            reviews.map((review) => (
                                <div key={review.id} className={`swiper-slide ${styles.testimonialsItem}`}>
                                    <div className={styles.testimonialsItemInfo}>
                                        <img className={styles.testimonialsItemImage} src={review.profile} alt={review.name} />
                                        <div className="text-box">
                                            <h3 className={styles.testimonialsItemName}>
                                                {review.name}
                                            </h3>
                                            <span className={`${styles.testimonialsItemJob} me-2`}>Age: {review.age},</span>
                                            <span className={styles.testimonialsItemJob}>{review.profession}</span>
                                        </div>
                                    </div>
                                    <p>{review.text}.</p>
                                    <div className={styles.testimonialsItemRating}>
                                        <i className='fa fa-star'></i>
                                        <i className='fa fa-star'></i>
                                        <i className='fa fa-star'></i>
                                        <i className='fa fa-star'></i>
                                        <i className='fa fa-star'></i>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                    <div className={`swiper-pagination js-testimonials-pagination`}></div>
                </div>
            </div>
        </div >
    )
}

export default Testimonials