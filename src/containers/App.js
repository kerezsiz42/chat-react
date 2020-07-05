import React, { Component } from 'react';
import { connect } from 'react-redux';

import Login from './Login';
import Register from './Register';
import Conversations from './Conversations';
import Messages from './Messages';
import Users from './Users';

import { changeView } from '../actions';

const mapStateToProps = (state) => {
  return {
    view: state.view
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    changeView: (view) => dispatch(changeView(view)),
  }
}

class App extends Component {
  render() {
    const { view } = this.props;
    switch(view) {
      case 'conversations':
        return <Conversations />;
      case 'messages':
        return <Messages />;
      case 'users':
        return <Users />;
      case 'register':
        return <Register />;
      default:
        return <Login />;
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
