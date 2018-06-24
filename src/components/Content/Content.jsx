
import React, { Component } from "react";
import Login from "components/Login";
import Counter from "components/Counter";

export default class Content extends Component {
  handleSubmitForm = (name, email) => {
    alert("Ваше имя: " + name + ". Ваш email: " + email);
  };

  handleCounterChange = counter => {
    console.log("new value", counter);
  };

  render() {
    return (
      <div>
        <Login onSubmitForm={this.handleSubmitForm} />
        <Counter onChange={this.handleCounterChange} />
        <p>
          This library contains React Bootstrap 4 components that favor
          composition and control. The library does not depend on jQuery or
          Bootstrap javascript. However, https://popper.js.org/ via
          https://github.com/souporserious/react-popper is relied upon for
          advanced positioning of content like Tooltips, Popovers, and
          auto-flipping Dropdowns. There are a few core concepts to understand
          in order to make the most out of this library. 1) Your content is
          expected to be composed via props.children rather than using named
          props to pass in Components.
        </p>
      </div>
    );
  }
}

import React, {Component} from 'react';

export default class Content extends Component
{
    render()
    {
        return (
            <div>
                <p>This library contains React Bootstrap 4 components that favor composition and control. The library does not depend on jQuery or Bootstrap javascript. However, https://popper.js.org/ via https://github.com/souporserious/react-popper is relied upon for advanced positioning of content like Tooltips, Popovers, and auto-flipping Dropdowns.

There are a few core concepts to understand in order to make the most out of this library.

1) Your content is expected to be composed via props.children rather than using named props to pass in Components.</p>
            </div>
        )
    }
}

