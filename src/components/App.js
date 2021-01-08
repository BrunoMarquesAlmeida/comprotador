import { HashRouter, Route, Switch } from "react-router-dom";
import React from "react";
import routes from "../routes";
import { Modal } from "react-bootstrap";

import Auth0ProviderWithHistory from "./Common/OAuth0/auth0-provider-with-history";

import LoginModal from "./LoginModal";
import Header from "./Header";
import Footer from "./Footer";
import Home from "./Home";
import NotFound from "./NotFound";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showLogin: false,
    };
  }

  handleLoginShow = () => {
    this.setState({
      showLogin: true,
    });
  };

  handleLoginClose = () => {
    this.setState({
      showLogin: false,
    });
  };

  render() {
    return (
      <HashRouter>
        <Auth0ProviderWithHistory>
          <div>
            <Modal show={this.state.showLogin} onHide={this.handleLoginClose}>
              <LoginModal handleLoginClose={this.handleLoginClose} />
            </Modal>
            <Header
              handleLoginShow={this.handleLoginShow}
              handleLoginClose={this.handleLoginClose}
            />
            <Switch>
              <Route path="/" exact component={Home} />
              {routes.map(({ path, Component }, key) => (
                <Route
                  exact
                  path={path}
                  key={key}
                  render={(props) => (
                    <Component
                      {...props}
                      handleLoginShow={this.handleLoginShow}
                      handleLoginClose={this.handleLoginClose}
                    />
                  )}
                />
              ))}
              <Route component={NotFound} />
            </Switch>
            <Footer
              handleLoginShow={this.handleLoginShow}
              handleLoginClose={this.handleLoginClose}
            />
          </div>
        </Auth0ProviderWithHistory>
      </HashRouter>
    );
  }
}

export default App;
