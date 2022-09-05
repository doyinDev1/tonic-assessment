import React from 'react'
import classes from './Footer.module.css'
import { ReactComponent as Boldo } from '../../assets/images/boldo.svg'
import CustomButton from '../../components/Buttons/CustomButton'
const Footer = () => {
  return (
    <section className={classes.Footer}>
      <div className={classes.FooterMain}>
        <div className={classes.FooterMainChild}>
          <div className={classes.FooterLogo}>
            <Boldo />
            <h1>Boldo</h1>
          </div>
          <p>Social media validation business model canvas graphical user interface launch party creative facebook iPad twitter.</p>
          <h2>All rights reserved.</h2>
        </div>
        <div className={classes.FooterMainChild}>
          <h1>Landings</h1>
          <p>Home</p>
          <p>Products</p>
          <p>Services</p>
        </div>
        <div className={classes.FooterMainChild}>
          <h1>Company</h1>
          <p>Home</p>
          <div className={classes.FooterHiring}>

            <p>Careers</p>
            <CustomButton title='Hiring!'
              customButtonStyling={customButtonStyling}
              titleStyles={titleStyles}
            />
          </div>
          <p>Services</p>
        </div>
        <div className={classes.FooterMainChild}>
          <h1>Resources</h1>
          <p>Blog</p>
          <p>Products</p>
          <p>Services</p>
        </div>
      </div>
    </section>
  )
}

export default Footer

const customButtonStyling = {
  display: 'flex',
  alignItems: 'flex-start',
  padding: '1px 14px',
  border: '2px solid var(--color-green)',
  borderRadius: '120px',
  backgroundColor: 'var(--color-green)',
  cursor: 'pointer',
  width: 'max-content',

}

const titleStyles = {
  color: 'var(--color-darkBlue)',
  fontFamily: 'Open Sans',
  fontStyle: 'normal',
  fontWeight: '700',
  fontSize: '13px',
  lineHeight: '28px',
}
