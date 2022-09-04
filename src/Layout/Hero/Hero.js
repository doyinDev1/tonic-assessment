import React from 'react'
import classes from './Hero.module.css'
import { ReactComponent as Boldo } from '../../assets/images/boldo.svg'
import CustomButton from '../../components/Buttons/CustomButton'
import bloghero from '../../assets/images/Bloghero2.png'
const Hero = () => {
    return (
        <section className={classes.Hero}>
            <div className={classes.HeroTop}>
                <div>
                    <div className={classes.HeroLogo}>
                        <Boldo />
                        <h1>Boldo</h1>
                    </div>
                </div>
                <div>

                    <div className={classes.HeroLeft}>
                        <ul className={classes.HeroNav}>
                            <li>Product</li>
                            <li>Services</li>
                            <li>About</li>
                            <li><CustomButton
                                title="Log In"
                                customButtonStyling={customButtonStyling}
                                titleStyles={titleStyles} /></li>
                        </ul>
                    </div>
                </div>

            </div>
          
        </section>
    )
}

export default Hero


const customButtonStyling = {
    display: 'flex',
    alignItems: 'flex-start',
    padding: '8px 40px',
    border: '2px solid var(--color-darkBlue)',
    borderRadius: '24px',
    backgroundColor: 'var(--color-green)',
    cursor: 'pointer',
}

const titleStyles = {
    color: 'var(--color-darkBlue)',
    fontFamily: 'Open Sans',
    fontStyle: 'normal',
    fontWeight: '700',
    fontSize: '16px',
    lineHeight: '24px',
}