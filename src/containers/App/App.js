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
  render() {
    const { view, changeView } = this.props;
    if(view === 'home') {
      return;
    } else {
      if(view === 'login') {
        return <Login changeView={changeView} />;
      }
      if(view === 'register') {
        return <Register changeView={changeView} />;
      }
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
