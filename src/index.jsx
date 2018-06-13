import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import Menu from './Menu.jsx';
import Content from './Content.jsx';
import Login from './Login.jsx';
import 'bootstrap/dist/css/bootstrap.css';
import {Button} from 'reactstrap';

const menuItems = [
    {
        link: '#',
        title: 'Home'
    },
    {
        link: '#',
        title: 'About'
    }
]
class App extends Component {
    render() {
        

        return (
            <div>
            
      
            <Menu items={menuItems}/>
            <Content />
            <Login />
            </div>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('app'));