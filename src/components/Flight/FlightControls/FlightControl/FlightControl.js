import React from 'react';
import ReactTooltip from 'react-tooltip'

import classes from './FlightControl.css';

/*======================================================================
// This will render each Flight Control option which includes a name,
// tooltip description, and select button. Initially, theme and
// entertainment buttons will be disabled until previous tiers of
// option are selected.
======================================================================*/
const FlightControl = (props) => (
    <div className={classes.FlightControl}>
        <div className={classes.Label}>{props.label}</div>
        <div className={classes.DescriptionCircle} data-tip={props.description}></div>
        <ReactTooltip type="light" effect="solid" />
        <button disabled={!props.isDisabled} className={classes.Select} onClick={props.selected}>Select</button>
    </div>
);

export default FlightControl;