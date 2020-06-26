import React, { Component } from 'react';
import { connect } from 'react-redux';
import './App.css';
import Login from '../components/Login';
import Register from '../components/Register';

import { setUsernameField } from '../actions';

const mapStateToProps = (state) => {
  return {
    usernameField: state.usernameField
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onUsernameFieldChange: (event) => dispatch(setUsernameField(event.target.value))
  }
}

class App extends Component {
  constructor() {
    super();
    this.state = {
      page: 'guest-login',
      token: ''
    }
  }

  changePage = (page) => {
    this.setState({page});
  }

  

  renderApp() {
    if(this.state.token !== '') {
      return;
    } else {
      if(this.state.page === 'guest-login') {
        return <Login changePage={this.changePage} />;
      }
      if(this.state.page === 'guest-register') {
        return <Register changePage={this.changePage} />;
      }
    }
  }

  render() {
    return (
      <div className="frame">
        { this.renderApp() }
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
