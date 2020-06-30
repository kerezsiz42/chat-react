import React, { Component } from 'react';
import { connect } from 'react-redux';
import './App.css';
import Login from '../Login/Login';
import Register from '../Register/Register';

import { changeView, changeLoginStatus } from './AppActions';
import Home from '../Home/Home';

const mapStateToProps = (state) => {
  return {
    view: state.app.view,
    isLoggedIn: state.app.isLoggedIn
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    changeView: (view) => dispatch(changeView(view)),
    changeLoginStatus: (isLoggedIn) => dispatch(changeLoginStatus(isLoggedIn))
  }
}

class App extends Component {
  componentDidMount() {
    const { changeView } = this.props;
    const token = localStorage.getItem('token');
    if(token) {
      changeView('home');
    }
  }

  render() {
    const { view } = this.props;
    switch(view) {
      case 'login':
        return <Login />;
      case 'register':
        return <Register />;
      default:
        return <Home />;
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
