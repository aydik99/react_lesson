
import React, { Component } from "react";

export default class Counter extends Component {
  constructor(props) {
    super(props);

    this.state = {
      counter: 1
    };

    // this.handlePlusClick = this.handlePlusClick.bind(this);
    // this.handleMinusClick = this.handleMinusClick.bind(this);
  }

  handlePlusClick = e => {
    const { onChange } = this.props;
    const { counter } = this.state;
    this.setState({
      counter: counter + 1
    });

    if (typeof onChange === "function") {
      onChange(counter + 1);
    }

    e.preventDefault();
  };

  handleMinusClick = e => {
    const { onChange } = this.props;
    const { counter } = this.state;
    this.setState({
      counter: counter - 1
    });

    if (typeof onChange === "function") {
      onChange(counter - 1);
    }

    e.preventDefault();
  };

  render() {
    const { counter } = this.state;
    return (
      <div>
        <button onClick={this.handleMinusClick}>-</button>
        {this.state.counter}
        <button onClick={this.handlePlusClick}>+</button>
      </div>
    );
  }

import React, {Component} from 'react';

export default class Counter extends Component {
    constructor(props) {
        super(props);

        this.state = {
            counter: 1,
            
        };

        
        // this.handlePlusClick = this.handlePlusClick.bind(this);
        // this.handleMinusClick = this.handleMinusClick.bind(this);
    }

    handlePlusClick = (e) => {
        const { onChange } = this.props;
        const {counter} = this.state;
        this.setState({
            counter: counter + 1
        }); 

        if(typeof onChange === 'function') {
            onChange(counter + 1);
        }

         e.preventDefault();
     }

     handleMinusClick = (e) => {
        const { onChange } = this.props;
        const {counter} = this.state;
        this.setState({
            counter: counter - 1
        });

        if(typeof onChange === 'function') {
            onChange(counter - 1);
        }

         e.preventDefault();
     }



    render() {
        const {counter} = this.state;
        return (
            <div>
                <button onClick={this.handleMinusClick}>-</button>
                {this.state.counter}
                <button onClick={this.handlePlusClick}>+</button>
               
            </div>
        )
    }

}
