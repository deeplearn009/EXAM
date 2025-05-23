import React from 'react'
import styles from './Blog.module.scss'

const Blog = () => {
    return (
        <div className={styles.container}>
            <div className={styles.content}>
                <div className={styles.title}>
                    <h1>Latest Blog</h1>
                    <p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature</p>
                </div>
                <div className={styles.cards}>
                    <div className={styles.card}>
                        <div className={styles.top}>
                            <span>By: admin</span>
                            <span>24 april 2021</span>
                        </div>
                        <h3>Aenean Vulputate Lorem</h3>
                        <p>Lorem ipsum dolor sit amet, consecteturl adipisl elit,
                            sed do eiusmod tempor incidio ut labore et dolore magna aliqua.</p>
                        <div className={styles.image}>
                            <img src="https://htmldemo.net/pronia/pronia/assets/images/blog/medium-size/1-1-310x220.jpg" alt=""/>
                        </div>
                    </div>
                    <div className={styles.card}>
                        <div className={styles.top}>
                            <span>By: admin</span>
                            <span>24 april 2021</span>
                        </div>
                        <h3>Aenean Vulputate Lorem</h3>
                        <p>Lorem ipsum dolor sit amet, consecteturl adipisl elit,
                            sed do eiusmod tempor incidio ut labore et dolore magna aliqua.</p>
                        <div className={styles.image}>
                            <img src="https://htmldemo.net/pronia/pronia/assets/images/blog/medium-size/1-2-310x220.jpg" alt=""/>
                        </div>
                    </div>
                    <div className={styles.card}>
                        <div className={styles.top}>
                            <span>By: admin</span>
                            <span>24 april 2021</span>
                        </div>
                        <h3>Aenean Vulputate Lorem</h3>
                        <p>Lorem ipsum dolor sit amet, consecteturl adipisl elit,
                            sed do eiusmod tempor incidio ut labore et dolore magna aliqua.</p>
                        <div className={styles.image}>
                            <img src="https://htmldemo.net/pronia/pronia/assets/images/blog/medium-size/1-3-310x220.jpg" alt=""/>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}
export default Blog
