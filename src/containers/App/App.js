import React, { Component } from 'react';
import { connect } from 'react-redux';
import Login from '../Login/Login';
import Register from '../Register/Register';

import { changeAppView } from './AppActions';
import Home from '../Home/Home';

const mapStateToProps = (state) => {
  return {
    view: state.app.view,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    changeAppView: (view) => dispatch(changeAppView(view))
  }
}

class App extends Component {
  componentDidMount() {
    const { changeAppView } = this.props;
    const token = localStorage.getItem('token');
    if(token) {
      changeAppView('home');
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
