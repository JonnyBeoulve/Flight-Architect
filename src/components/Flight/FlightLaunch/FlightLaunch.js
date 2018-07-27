import React from 'react';
import { fadeIn } from 'react-animations';
import { StyleSheet, css } from 'aphrodite';

import classes from './FlightLaunch.css';
import FlightFormImg from '../../../assets/img/flight-form-img.jpg';
import FlightLaunchOptions from './FlightLaunchOptions/FlightLaunchOptions';

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
// These are the Flight Architect Option selections that the user 
// can choose from. There are currently three per category (package,
// theme, entertainment).
======================================================================*/
const flightOptions = [
    {label: 'Galileo Package', description: '2 hours in LEO. 1 orbit around Earth. 2 person capsule capacity.', type: 'package1'},
    {label: 'Kepler Package', description: '4 hours in LEO. 2 orbits around Earth. 4 person capsule capacity.', type: 'package2'},
    {label: 'Gliese Package', description: '6 hours in LEO. 3 orbit around Earth. 8 person capsule capacity.',  type: 'package3'},
    {label: 'Basic Theme', description: 'Basic capsule interior.',  type: 'theme1'},
    {label: 'Retro Theme', description: 'Colorful 80s-inspired capsule interior.',  type: 'theme2'},
    {label: 'Andromeda Theme', description: 'Spectacular space-inspired capsule interior.',  type: 'theme3'},
    {label: 'Basic Entertainment', description: 'Basic snacks and music.',  type: 'entertainment1'},
    {label: 'Space Jam Entertainment', description: 'Experience a visceral musical presentation.',  type: 'entertainment2'},
    {label: 'Zero G Entertainment', description: 'Play with fun toys in zero gravity.',  type: 'entertainment3'}
];

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
        <h2>GET READY TO LAUNCH</h2>
        <div className={classes.LaunchOptionsList}>
            {flightOptions.map((option, index) => {
                return (
                    <FlightLaunchOptions
                        key={index}
                        selectedOption={props.arcOptions[`${option.type}`]}
                        optionDetail={flightOptions[index].label}
                    /> )
            })}
        </div>
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