import './Menu.css';
import React, { Component } from 'react';
import { NavLink, withRouter } from 'react-router-dom';
import classNames from 'classnames';

class Menu extends Component {
  render() {
    const { items, location } = this.props;
    console.log(this.props);
    return (
      <div className='menu'>
        <ul>
          {items.map(item => (
            
            <li className={classNames({ active: location.pathname === item.link })}>
              <NavLink to={item.link}>{item.title}</NavLink>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default withRouter(Menu);