import React, { useState } from 'react'
import classes from './Hero.module.css'
import Offcanvas from 'react-bootstrap/Offcanvas';
import { ReactComponent as Hamburger } from '../../assets/images/hamburger.svg'

import { ReactComponent as Boldo } from '../../assets/images/boldo.svg'
const Hero = () => {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <section>
            <div className={classes.Hero}>
                <div className={classes.HeroTop}>
                    <div className={classes.HeroTopChild}>
                        <div className={classes.HeroLogo}>
                            <Boldo />
                            <h1>Boldo</h1>
                        </div>
                    </div>
                    <div className={classes.HeroTopChild}>
                        <div className={classes.HeroLeft}>
                            <ul className={classes.HeroNav}>
                                <li className={classes.HeroNavChild}>Product</li>
                                <li className={classes.HeroNavChild}>Services</li>
                                <li className={classes.HeroNavChild}>About</li>
                                <li className={classes.HeroNavChild}>
                                    <button className={classes.buttonStyle}>
                                        <span>Log In</span>
                                    </button>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className={classes.HeroTopChildHamburger}>
                        <Hamburger onClick={handleShow} className={classes.HeroTopChildHamburger} />

                    </div>

                </div>
                <div className={classes.About}>
                    <p className={classes.AboutText}>About</p>
                </div>
                <div className={classes.AboutHeroTop}>
                    <div className={classes.AboutHeroTopChild}>
                        <h1 className={classes.AboutAbout}>We love to make great
                            <br />
                            things,
                            things that matter.
                        </h1>
                    </div>
                    <div className={classes.AboutHeroTopChild}>
                        <p className={classes.AboutParagraph}>
                            Funding handshake buyer business-to-business
                            metrics iPad partnership. First mover advantage innovator
                            success deployment non-disclosure.
                        </p>
                    </div>
                </div>
            </div>
            <div className={classes.AboutHeroBottom}>
                <p className={classes.AboutNumbers}>Our Numbers</p>
                <div className={classes.AboutNumbersText}>
                    <div className={classes.AboutNumbersTextChild}></div>
                    <h1 className={classes.AboutNumbersTextChild}>Handshake infographic mass market crowdfunding iteration.</h1>
                    <div className={classes.AboutNumbersTextChild}></div>
                </div>
                <div className={classes.AboutFeatures}>
                    <div className={classes.AboutFeaturesText}>
                        <h1>120m</h1>
                        <p>Cool feature title</p>
                    </div>
                    <div className={classes.AboutFeaturesText}>
                        <h1>10.000</h1>
                        <p>Cool feature title</p>
                    </div>
                    <div className={classes.AboutFeaturesText}>
                        <h1>240</h1>
                        <p>Cool feature title</p>
                    </div>
                </div>
            </div>
            <div>
                {/* // off canvas for mobile devices */}
                <Offcanvas show={show} onHide={handleClose}>
                    <Offcanvas.Header closeButton>
                        <Offcanvas.Title>
                            <div className={classes.HeroLogo}>
                                <Boldo />
                                <h1>Boldo</h1>
                            </div>
                        </Offcanvas.Title>
                    </Offcanvas.Header>
                    <Offcanvas.Body>
                        <ul className={`${classes.HeroNav} ${classes.NavOverlay}`}>
                            <li className={classes.HeroHamburger}>Product</li>
                            <li className={classes.HeroHamburger}>Services</li>
                            <li className={classes.HeroHamburger}>About</li>
                            <li className={classes.HeroHamburger}>
                                <button className={classes.buttonStyle}>
                                    <span>Log In</span>
                                </button>
                            </li>
                        </ul>
                    </Offcanvas.Body>
                </Offcanvas>
            </div>
        </section>
    )
}

export default Hero
