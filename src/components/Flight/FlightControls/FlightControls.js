import React from 'react';

import classes from './FlightControls.css';
import FlightControl from './FlightControl/FlightControl';

/*======================================================================
// These are the Flight Architect Option selections that the user 
// can make. Initially we will have three for testing, and more will
// be added later.
======================================================================*/
const controls = [
    {label: 'Package1', type: 'package1'},
    {label: 'Package2', type: 'package2'},
    {label: 'Package3', type: 'package3'},
    {label: 'Theme1', type: 'theme1'},
    {label: 'Theme2', type: 'theme2'},
    {label: 'Theme3', type: 'theme3'},
    {label: 'Theme4', type: 'theme4'},
    {label: 'Entertainment1', type: 'entertainment1'},
    {label: 'Entertainment2', type: 'entertainment2'},
    {label: 'Entertainment3', type: 'entertainment3'},
    {label: 'Entertainment4', type: 'entertainment4'}
];

/*======================================================================
// This will house the Flight Controls div which will contain several
// options.
======================================================================*/
const flightControls = (props) => (
    <div className={classes.FlightControls}>
        <p>Current Price: <strong>{props.price}</strong></p>
        {controls.map(ctrl => (
            <FlightControl selected={() => props.optionSelected(ctrl.type)} key={ctrl.label} label={ctrl.label} />
        ))}
        <p>Note: Option preview is in alpha. A visually attractive design will be added in a later build.</p>
    </div>
);

export default flightControls;