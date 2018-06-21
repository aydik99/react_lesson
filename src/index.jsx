import React, { Component, Fragment } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Button } from "reactstrap";

import "bootstrap/dist/css/bootstrap.css";

import Menu from "components/Menu";
import Content from "components/Content";
import Header from "components/Header";
import Comments from "components/Comments";
import Users from "components/Users";
import About from "components/About";

const menuItems = [
  {
    link: "/",
    title: "Home"
  },
  {
    link: "About",
    title: "About"
  },
  {
    link: "Comments",
    title: "Comments"
  },
  {
    link: "Users",
    title: "Users"
  }
];

class App extends Component {
  render() {
    return (
      <Fragment>
        <Menu items={menuItems} />

        <Router>
          <Switch>
            <Route exact path="/" component={Content} />
            <Route path="/Comments" component={Comments} />
            <Route path="/Users" component={Users} />
            <Route path="/About" component={About} />
          </Switch>
        </Router>
      </Fragment>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("app"));
