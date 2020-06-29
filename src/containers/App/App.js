import React, { Component } from 'react';
import { connect } from 'react-redux';
import './App.css';
import Login from '../Login/Login';
import Register from '../Register/Register';

import { changeView } from './AppActions';

const mapStateToProps = (state) => {
  return {
    view: state.app.view
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    changeView: (view) => dispatch(changeView(view))
  }
}

class App extends Component {
  componentDidMount() {
    const token = localStorage.getItem('token');
    console.log(token);
    /* Call myChats(), if success then view = home. */
  }

  render() {
    const { view } = this.props;
    if(view === 'home') {
      return <h1>Hello</h1>;
    } else {
      if(view === 'login') {
        return <Login />;
      }
      if(view === 'register') {
        return <Register />;
      }
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
