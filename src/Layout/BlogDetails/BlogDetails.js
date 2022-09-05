import React from 'react'
import classes from './BlogDetail.module.css'

const BlogDetails = () => {
    return (
        <section className={classes.BlogDetail}>
            <div className={classes.BlogTop}>
                <p>Our Blog</p>
            </div>
            <div className={classes.BlogTop}>
                <h1>Value proposition accelerator product management venture</h1>
            </div>
            <div className={classes.BlogTop}>
                <hr />
            </div>
            <div className={classes.BlogPointsTop}>
                <h1>We are <span>commited.</span></h1>
                <p>Conversion angel investor entrepreneur first
                    mover advantage. Handshake infographic mass
                    market crowdfunding iteration. </p>
            </div>
            <div className={classes.BlogPointsTop}>
                <h1>We are <span>responsible.</span></h1>
                <p>Mass market iPhone buzz conversion analytics
                    stock iteration responsive web design user experience
                    business plan handshake. Return on investment seed
                    round MVP backing supply chain.  </p>
            </div>
            <div className={classes.BlogPointsTop}>
                <h1>We aim for <span>progress.</span></h1>
                <p>Bootstrapping rockstar first mover advantage
                    business model canvas alpha deployment launch
                    party beta facebook metrics gamification
                    growth hacking customer focus. </p>
            </div>
        </section>
    )
}

export default BlogDetails
