import React from 'react'
import classes from './Suscribe.module.css'
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
                        <button>
                            <span>
                                Start Now
                            </span>
                        </button>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Suscribe


