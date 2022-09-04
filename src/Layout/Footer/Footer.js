import React from 'react'
import classes from './Footer.module.css'
import { ReactComponent as Boldo } from '../../assets/images/boldo.svg'

const Footer = () => {
  return (
    <div className={classes.footer}>
      <div className={classes.footerMain}>
        <div>

          <div className={classes.footerContent}>
            <div className={classes.footerLogo}>
              <Boldo />
              <h1>Boldo</h1>
            </div>
            <p className={classes.footerDescription}>
              Social media validation business
              model canvas graphical user interface
              launch party creative
              facebook iPad twitter.</p>
            <p className={classes.footerDescription}>
              All rights reserved.</p>
          </div>
        </div>
        <div className={classes.footerContentRight}>

          <div className={classes.footerContentRightText}>
            <h3 className={classes.footerHeading}>
              Landings</h3>

            <h4 className={classes.footerLinks}>Home</h4>
            <h4 className={classes.footerLinks}>Products</h4>
            <h4 className={classes.footerLinks}>Services</h4>
          </div>
          <div className={classes.footerContentRightText} >
            <h3 className={classes.footerHeading}>
              Landings</h3>

            <h4 className={classes.footerLinks}>Home</h4>
            <h4 className={classes.footerLinks}>Products</h4>
            <h4 className={classes.footerLinks}>Services</h4>
          </div>
          <div className={classes.footerContentRightText} >
            <h3 className={classes.footerHeading}>
              Landings</h3>

            <h4 className={classes.footerLinks}>Home</h4>
            <h4 className={classes.footerLinks}>Products</h4>
            <h4 className={classes.footerLinks}>Services</h4>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
