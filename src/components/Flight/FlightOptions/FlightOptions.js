import React, { Component } from "react";
import PropTypes from "prop-types";
import { slideInLeft } from "react-animations";
import { StyleSheet, css } from "aphrodite";

import classes from "./FlightOptions.css";

/*======================================================== 
// Animated styles using Aphrodite and React Animations.
========================================================*/
const styles = StyleSheet.create({
  slideInLeft: {
    animationName: slideInLeft,
    animationDuration: "1s"
  }
});

/*======================================================================
// As the user selects various flight options, this will employ 
// css to switch visible elements on the page that denote the
// options. There are three packages, three themes, and three
// entertainment options. Each corresponds to a tier, and the user
// must select a package -> theme -> entertainment before contacting
// Flight.
======================================================================*/
class FlightOptions extends Component {
  render() {
    let option = null;

    switch (this.props.type) {
      case "package1":
        option = (
          <div className={css(styles.slideInLeft)}>
            <div className={classes.Center}>
              <div className={classes.Package1Spaceship}>
                <div className={classes.Window} />
              </div>
              <div className={classes.Tail} />
              <div className={classes.Leftwing} />
              <div className={classes.Rightwing} />
              <div className={classes.Exhaust} />
              <div className={classes.Tail} />
            </div>
          </div>
        );
        break;
      case "package2":
        option = (
          <div className={css(styles.slideInLeft)}>
            <div className={classes.Center}>
              <div className={classes.Package2Spaceship}>
                <div className={classes.Window} />
              </div>
              <div className={classes.Tail} />
              <div className={classes.Leftwing} />
              <div className={classes.Rightwing} />
              <div className={classes.Exhaust} />
              <div className={classes.Tail} />
            </div>
          </div>
        );
        break;
      case "package3":
        option = (
          <div className={css(styles.slideInLeft)}>
            <div className={classes.Center}>
              <div className={classes.Package3Spaceship}>
                <div className={classes.Window} />
              </div>
              <div className={classes.Tail} />
              <div className={classes.Leftwing} />
              <div className={classes.Rightwing} />
              <div className={classes.Exhaust} />
              <div className={classes.Tail} />
            </div>
          </div>
        );
        break;
      case "theme1":
        option = <div className={classes.Theme1} />;
        break;
      case "theme2":
        option = <div className={classes.Theme2} />;
        break;
      case "theme3":
        option = <div className={classes.Theme3} />;
        break;
      case "entertainment1":
        option = (
          <div className={classes.Entertainment1}>Basic Entertainment</div>
        );
        break;
      case "entertainment2":
        option = (
          <div className={classes.Entertainment2}>Space Jam Entertainment</div>
        );
        break;
      case "entertainment3":
        option = (
          <div className={classes.Entertainment3}>Zero G Entertainment</div>
        );
        break;
      default:
        option = null;
    }

    return option;
  }
}

FlightOptions.propTypes = {
  type: PropTypes.string.isRequired
};

export default FlightOptions;
