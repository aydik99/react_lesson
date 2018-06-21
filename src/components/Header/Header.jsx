import "./Header.css";
import React, { Component } from "react";
import classNames from "classNames";

export default class Menu extends Component {
  render() {
    const { size } = this.props;
    const className = classNames("header", {
      "header--small": size === "small",
      "header--big": size === "big"
    });
    return <div className={className} />;
  }
}
