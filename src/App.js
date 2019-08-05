import React, { Component } from "react";

import FlightArchitect from "./containers/FlightArchitect/FlightArchitect";
import Layout from "./components/Layout/Layout";

/*======================================================================
// This will handle the rendering of the Flight Architect page.
======================================================================*/
class App extends Component {
  render() {
    return (
      <div>
        <Layout>
          <FlightArchitect />
        </Layout>
      </div>
    );
  }
}

export default App;
