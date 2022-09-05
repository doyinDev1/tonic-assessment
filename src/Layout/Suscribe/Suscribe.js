import React from 'react'
import classes from './Suscribe.module.css'
import CustomButton from '../../components/Buttons/CustomButton'
const Suscribe = () => {
    return (
        <section className={classes.Suscribe}>
            <div className={classes.SuscribeBody}>
                <div className={classes.SuscribeCard}>
                    <div className={classes.SuscribeOverlay}>
                        <h1>An enterprise template to ramp up your company website</h1>
                    </div>
                    <div className={classes.SuscribeOverlayBottom}>
                        <input type='text' placeholder="Your email Address" />
                        <CustomButton title='Start Now'
                            customButtonStyling={customButtonStyling}
                            titleStyles={titleStyles}
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Suscribe



const customButtonStyling = {
    display: 'flex',
    alignItems: 'flex-start',
    padding: '16px 56px',
    border: '2px solid var(--color-darkBlue)',
    borderRadius: '56px',
    backgroundColor: 'var(--color-green)',
    cursor: 'pointer',
    width: 'max-content',

}

const titleStyles = {
    color: 'var(--color-darkBlue)',
    fontFamily: 'Open Sans',
    fontStyle: 'normal',
    fontWeight: '700',
    fontSize: '20px',
    lineHeight: '28px',
}