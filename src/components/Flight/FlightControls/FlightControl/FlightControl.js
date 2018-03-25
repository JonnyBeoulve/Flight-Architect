import React from 'react';
import ReactTooltip from 'react-tooltip'

import classes from './FlightControl.css';

/*======================================================================
// This will render each Flight Control option.
======================================================================*/
const flightControl = (props) => (
    <div className={classes.FlightControl}>
        <div className={classes.Label}>{props.label}</div>
        <div className={classes.DescriptionCircle} data-tip={props.description}></div>
        <ReactTooltip type="light" effect="solid" />
        <button className={classes.Select} onClick={props.selected}>Select</button>
    </div>
);

export default flightControl;