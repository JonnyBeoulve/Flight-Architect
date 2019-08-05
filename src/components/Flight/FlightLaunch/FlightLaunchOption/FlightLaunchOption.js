import React, { Fragment } from "react";
import ReactTooltip from "react-tooltip";

import classes from "./FlightLaunchOption.css";

const FlightLaunchOption = props => (
  <Fragment>
    {props.selectedOption ? (
      <div className={classes.LaunchOption} data-tip={props.optionDescription}>
        <p>{props.optionName}</p>
      </div>
    ) : null}
    <ReactTooltip type="light" effect="solid" />
  </Fragment>
);

export default FlightLaunchOption;
