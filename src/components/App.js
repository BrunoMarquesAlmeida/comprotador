import { HashRouter, Route } from "react-router-dom";
import React from "react";
import routes from "../routes";

import Header from "./Header";
import Footer from "./Footer";
import Home from "./Home";

class App extends React.Component {
  render() {
    return (
      <div>
        <HashRouter>
          <div>
            <Header />
            <Route path="/" exact component={Home} />

            {routes.map(({ path, Component }, key) => (
              <Route exact path={path} key={key} component={Component} />
            ))}
            <Footer />
          </div>
        </HashRouter>
      </div>
    );
  }
}

export default App;
