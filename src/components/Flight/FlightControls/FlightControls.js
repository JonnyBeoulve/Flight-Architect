import React from 'react';

import classes from './FlightControls.css';
import FlightControl from './FlightControl/FlightControl';

/*======================================================================
// These are the Flight Architect Option selections that the user 
// can choose from. There are currently three per category (package,
// theme, entertainment).
======================================================================*/
const controls = [
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
// This will house the Flight Controls div which will contain several
// options.
======================================================================*/
const flightControls = (props) => (
    <div className={classes.FlightControls}>
        <p>Current Price: $<strong>{props.price}</strong></p>
        <div className={classes.FlightControlsBox}>
            {controls.map(ctrl => (
                <FlightControl selected={() => props.optionSelected(ctrl.type)} key={ctrl.label} label={ctrl.label} description={ctrl.description} />
            ))}
        </div>
        <button className={classes.LaunchButton} disabled={!props.launchReady}>PROCEED TO LAUNCH</button>
    </div>
);

export default flightControls;