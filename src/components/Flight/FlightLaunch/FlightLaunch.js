import React from 'react';
import { fadeIn } from 'react-animations';
import { StyleSheet, css } from 'aphrodite';

import classes from './FlightLaunch.css';
import FlightFormImg from '../../../img/flight-form-img.jpg';

/*======================================================== 
// Animated styles using Aphrodite and React Animations.
========================================================*/
const styles = StyleSheet.create({
    fadeIn: {
        animationName: fadeIn,
        animationDuration: '0.5s'
    }
})

/*======================================================================
// This will house the Flight Launch div which is a form that allows
// users to contact Flight to schedule a tour. In a future update,
// all selections made by the user before contact will be included
// in the contact e-mail.
======================================================================*/
const FlightLaunch = (props) => (
    <div className={[classes.FlightLaunch, css(styles.fadeIn)].join(' ')}>
        <p className={classes.FlightLaunchClose} onClick={() => props.handleClose()}>x</p>
        <img src={FlightFormImg} alt="Flight Architect Logo"></img>
        <h2>Get Ready To Launch</h2>
        <div className="ContactForm">
            <form onSubmit={() => props.handleContact()} className="form">
                <div className="FormItem">
                    <input type="text" className="FormInput" placeholder="Name" id="name" required></input>
                </div>
                <div className="FormItem">
                    <input type="email" className="FormInput" placeholder="Email" id="email" required></input>
                </div>
                <div className="FormButton">
                    <button className="FormBtn">CONTACT HQ</button>
                </div>
            </form>
        </div>
    </div>
);

export default FlightLaunch;