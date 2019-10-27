import React from "react";
import IndexPage from "./index";
import { Switch, Route, Router } from "./../util/router.js";
import { Redirect } from "react-router-dom";
import Footer from "./../components/Footer";
import "./../util/analytics.js"; 

function App(props) {
  return (
    <Router>
      <>
        <Switch>
          <Route exact path="/codon" component={IndexPage} />
          <Redirect from="*" to="/codon" />
          {/* <Route
            component={({ location }) => {
              return (
                <div
                  style={{
                    padding: "50px",
                    width: "100%",
                    textAlign: "center"
                  }}
                >
                  The page <code>{location.pathname}</code> could not be found.
                </div>
              );
            }}
          /> */}
        </Switch>

        {/* <Footer
          color="light"
          size="normal"
          logo="https://uploads.divjoy.com/logo.svg"
          copyright="© 2019 Codon"
        /> */}
        {/* <Footer
          color="light"
          size="normal"
          logo={Logo}
          copyright="© 2019 Codon"
        /> */}
      </>
    </Router>
  );
}

export default App;
