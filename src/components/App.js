import { HashRouter, Route } from "react-router-dom";
import React from "react";

import Header from "./Header";
import Footer from "./Footer";
import Home from "./Home";
import Category from "./Category";

class App extends React.Component {
  render() {
    return (
      <div>
        <HashRouter>
          <div>
            <Header />
            <Route path="/" exact component={Home} />
            <Route
              exact
              path="/categoria/:categoria/:subCategoria/:subCategoria2"
              component={Category}
            />
            <Route
              exact
              path="/categoria/:categoria/:subCategoria"
              component={Category}
            />
            <Route exact path="/categoria/:categoria/" component={Category} />
            <Footer />
          </div>
        </HashRouter>
      </div>
    );
  }
}

export default App;
