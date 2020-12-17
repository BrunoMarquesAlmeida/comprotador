import { HashRouter, Route, Switch } from "react-router-dom";
import React from "react";
import routes from "../routes";

import Header from "./Header";
import Footer from "./Footer";
import Home from "./Home";
import NotFound from "./NotFound";

class App extends React.Component {
  render() {
    return (
      <HashRouter>
        <div>
          <Header />
          <Switch>
            <Route path="/" exact component={Home} />
            {routes.map(({ path, Component }, key) => (
              <Route exact path={path} key={key} component={Component} />
            ))}
            <Route component={NotFound} />
          </Switch>
          <Footer />
        </div>
      </HashRouter>
    );
  }
}

export default App;
