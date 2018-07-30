import React from 'react';

import classes from './FlightControls.css';
import FlightControl from './FlightControl/FlightControl';
import { FLIGHT_OPTIONS } from '../../../store/store.js'

/*======================================================================
// This will house the Flight Controls div which will contain several
// options. A disabled prop is passed down from FlightArchitect.js
// which controls selection flow: package -> theme -> entertainment.
======================================================================*/
const FlightControls = (props) => (
    <div className={classes.FlightControls}>
        <p>Estimated Price: $<strong>{props.price}</strong></p>
        <div className={classes.FlightControlsBox}>
            {FLIGHT_OPTIONS.map((option, index) => {
                return (
                <FlightControl 
                    isActive={props.aOptions[`${option.type}`]}
                    isDisabled={props.optionReady[`${index}`]} 
                    selected={() => props.optionSelected(option.type)} 
                    key={option.label} 
                    label={option.label} 
                    description={option.description}
                /> )
            })}
        </div>
        <button className={classes.LaunchButton} disabled={!props.launchReady} onClick={() => props.launch()}>PROCEED TO LAUNCH</button>
    </div>
);

export default FlightControls;