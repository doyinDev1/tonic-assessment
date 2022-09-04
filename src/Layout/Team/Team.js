import React from 'react'
import classes from './Team.module.css'
import michaelscott from '../../assets/images/michael.png'
import dwight from '../../assets/images/dwight.png'
import pam from '../../assets/images/pam.png'


const Team = () => {
    return (
        <section className={classes.TeamMain}>
            <div className={classes.Team}>
                <div className={classes.TeamTop}>
                    <p>Our team</p>
                    <h1>The people behind the work</h1>
                    <h2>Conversion angel investor
                        entrepreneur
                        first mover advantage.
                        Handshake infographic mass market
                        crowdfunding iteration.
                        Traction stock user experience
                        deployment
                        beta innovator incubator focus. </h2>
                </div>
            </div>
            <div className={classes.TeamMembers}>
                <div className={classes.TeamMembers}>
                    <div className={classes.TeamProfile}>

                        <img
                            src={michaelscott}
                            alt="micheal"
                        />
                        <h1>Michael Scott</h1>
                        <p>General Manager</p>
                    </div>
                </div>
                <div className={classes.TeamMembers}>
                    <div className={classes.TeamProfile}>

                        <img
                            src={michaelscott}
                            alt="micheal"
                        />
                        <h1>Michael Scott</h1>
                        <p>General Manager</p>
                    </div>
                </div>
                <div className={classes.TeamMembers}>
                    <div className={classes.TeamProfile}>

                        <img
                            src={michaelscott}
                            alt="micheal"
                        />
                        <h1>Michael Scott</h1>
                        <p>General Manager</p>
                    </div>
                </div>
            </div>
            <div className={classes.TeamMemberOther}>
                <div className={classes.TeamMemberOtherContent}>
                    <div className={classes.TeamMemberBottom}>
                        <div className={classes.TeamMemberBottomLeft}>
                            <img
                                src={dwight}
                                alt='dwight'
                            />
                        </div>
                        <div className={classes.TeamMemberBottomRight}>
                            <h1>Dwight Schrute</h1>
                            <p>General Manager</p>
                        </div>
                    </div>
                </div>
                <div className={classes.TeamMemberOtherContent}>
                <div className={classes.TeamMemberBottom}>
                        <div className={classes.TeamMemberBottomLeft}>
                            <img
                                src={pam}
                                alt='pam'
                            />
                        </div>
                        <div className={classes.TeamMemberBottomRight}>
                            <h1>Pam Beetsley</h1>
                            <p>Receptionist</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className={classes.TeamMemberOther}>
                <div className={classes.TeamMemberOtherContent}>
                    <div className={classes.TeamMemberBottom}>
                        <div className={classes.TeamMemberBottomLeft}>
                            <img
                                src={pam}
                                alt='pam'
                            />
                        </div>
                        <div className={classes.TeamMemberBottomRight}>
                            <h1>Pam Beetsley</h1>
                            <p>General Manager</p>
                        </div>
                    </div>
                </div>
                <div className={classes.TeamMemberOtherContent}>
                <div className={classes.TeamMemberBottom}>
                        <div className={classes.TeamMemberBottomLeft}>
                            <img
                                src={pam}
                                alt='pam'
                            />
                        </div>
                        <div className={classes.TeamMemberBottomRight}>
                            <h1>Pam Beetsley</h1>
                            <p>General Manager</p>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    )
}

export default Team
