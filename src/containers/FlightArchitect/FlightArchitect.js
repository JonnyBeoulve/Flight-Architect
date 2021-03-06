import React, { Component, Fragment } from "react";

import Flight from "../../components/Flight/Flight";
import FlightControls from "../../components/Flight/FlightControls/FlightControls";
import FlightLaunch from "../../components/Flight/FlightLaunch/FlightLaunch";
import Footer from "../../components/Layout/Footer/Footer";
import Header from "../../components/Layout/Header/Header";
import { FLIGHT_OPTIONS } from "../../store/store.js";

/*======================================================================
// This container will store the state of which options the user has
// selected, the availability of options as the user works through
// the three tiers of choices, and whether or not launch/checkout
// is available.
======================================================================*/
class FlightArchitect extends Component {
  state = {
    architectOptions: {
      package1: 0,
      package2: 0,
      package3: 0,
      theme1: 0,
      theme2: 0,
      theme3: 0,
      entertainment1: 0,
      entertainment2: 0,
      entertainment3: 0
    },
    previousPrice: {
      package: 0,
      theme: 0,
      entertainment: 0
    },
    totalPrice: 0,
    readyOptions: [true, true, true, false, false, false, false, false, false],
    readyForLaunch: false,
    launchForm: false
  };

  /*======================================================================
    // This will handle the updating of state and pricing when a user
    // selects an option. CategoryType will store the name of the category
    // after removing the suffix number. optionIndex will locate the
    // index of the corresponding option in FLIGHT_OPTIONS to reference
    // the price.  Depending upon the category type, changes will be made
    // to state to alter selectable items and more.
    ======================================================================*/
  selectOptionHandler = type => {
    const categoryType = type.substr(0, type.length - 1);
    const optionIndex = FLIGHT_OPTIONS.findIndex(option => {
      return option.type === type;
    });
    let priceAddition = FLIGHT_OPTIONS[optionIndex].price;
    let priceSubtraction = 0;
    const updatedOptions = {
      ...this.state.architectOptions
    };
    let updatedReadyOptions = {
      ...this.state.readyOptions
    };
    let updatedReadyForLaunch = this.state.readyForLaunch;
    const updatedPrice = {
      ...this.state.previousPrice
    };

    if (categoryType === "package") {
      updatedOptions.package1 = 0;
      updatedOptions.package2 = 0;
      updatedOptions.package3 = 0;
      updatedReadyOptions[3] = true;
      updatedReadyOptions[4] = true;
      updatedReadyOptions[5] = true;
      priceSubtraction = updatedPrice[categoryType];
      updatedPrice.package = priceAddition;
    } else if (categoryType === "theme") {
      updatedOptions.theme1 = 0;
      updatedOptions.theme2 = 0;
      updatedOptions.theme3 = 0;
      updatedReadyOptions[6] = true;
      updatedReadyOptions[7] = true;
      updatedReadyOptions[8] = true;
      priceSubtraction = updatedPrice[categoryType];
      updatedPrice.theme = priceAddition;
    } else if (categoryType === "entertainment") {
      updatedOptions.entertainment1 = 0;
      updatedOptions.entertainment2 = 0;
      updatedOptions.entertainment3 = 0;
      priceSubtraction = updatedPrice[categoryType];
      updatedReadyForLaunch = true;
      updatedPrice.entertainment = priceAddition;
    } else {
      console.log("An error occurred during option handling.");
      return;
    }

    updatedOptions[type] = 1;
    const oldPrice = this.state.totalPrice;
    const newPrice = oldPrice + priceAddition - priceSubtraction;
    this.setState({
      architectOptions: updatedOptions,
      previousPrice: updatedPrice,
      readyOptions: updatedReadyOptions,
      readyForLaunch: updatedReadyForLaunch,
      totalPrice: newPrice
    });
  };

  /*======================================================================
    // This will handle the "Proceed To Launch" button, opening a form
    // for the user to contact Flight.
    ======================================================================*/
  handleLaunch = e => {
    this.setState({
      launchForm: true
    });
  };

  /*======================================================================
    // This will close the Contact HQ modal.
    ======================================================================*/
  handleLaunchClose = e => {
    this.setState({
      launchForm: false
    });
  };

  /*======================================================================
    // This will handle submission of the contact form.
    ======================================================================*/
  handleContactHQ = e => {
    alert("HQ has been contacted with your inquiry. Standby for assessment.");
    this.setState({
      launchForm: false
    });
  };

  render() {
    return (
      <Fragment>
        <Header />
        <Flight architectOptions={this.state.architectOptions} />
        <FlightControls
          aOptions={this.state.architectOptions}
          launch={this.handleLaunch}
          optionReady={this.state.readyOptions}
          optionSelected={this.selectOptionHandler}
          launchReady={this.state.readyForLaunch}
          price={this.state.totalPrice}
        />
        {this.state.launchForm ? (
          <FlightLaunch
            arcOptions={this.state.architectOptions}
            handleClose={this.handleLaunchClose}
            handleContact={this.handleContactHQ}
            price={this.state.totalPrice}
          />
        ) : (
          <div />
        )}
        <Footer />
      </Fragment>
    );
  }
}

export default FlightArchitect;
