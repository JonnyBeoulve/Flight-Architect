import React, { Fragment}  from 'react';

import classes from './FlightLaunchOptions.css';

const FlightLaunchOptions = (props) => (
    <Fragment>
        {(props.selectedOption)
            ? <div className={classes.LaunchOption}><p>{props.optionDetail}</p></div>
            : null}
    </Fragment>
)

export default FlightLaunchOptions;