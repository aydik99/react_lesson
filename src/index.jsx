import React, {Component, Fragment} from 'react';
import ReactDOM from 'react-dom';
import Menu from 'components/Menu';
import Content from 'components/Content';
import Login from 'components/Login';
import 'bootstrap/dist/css/bootstrap.css';
import {Button} from 'reactstrap';
import Header from 'components/Header';
import Counter from 'components/Counter';

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
    handleCounterChange = (counter) => {
        console.log('new value', counter);
    }

    handleSubmitForm = (name, email) => {
        alert('Ваше имя: '+ name+". Ваш email: "+ email);
    }

    render() {
        return (
            <Fragment>
            <Menu items={menuItems}/>
            <Counter onChange={this.handleCounterChange}/>
            <Content />
            <Login onSubmitForm={this.handleSubmitForm}/>
            </Fragment>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('app'));