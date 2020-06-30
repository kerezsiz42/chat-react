import React, { Component } from 'react';
import { connect } from 'react-redux';

import { myChats } from './HomeActions';
import { changeView, changeLoginStatus } from '../App/AppActions';
import './Home.css';

const mapStateToProps = (state) => {
  return {
    chats: state.home.chats,
    isPending: state.home.isPending,
    errors: state.home.errors
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    myChats: (token) => dispatch(myChats(token)),
    changeView: (view) => dispatch(changeView(view)),
    changeLoginStatus: (isLoggedIn) => dispatch(changeLoginStatus(isLoggedIn))
  }
}

class Home extends Component {
  async componentDidMount() {
    const { myChats, changeView } = this.props;
    const token = localStorage.getItem('token');
    await myChats(token);
    if(!this.props.errors.length) {
      changeLoginStatus(true);
    } else {
      changeView('login');
    }
  }

  render() {
    return (
      <>
        <header>
          <h2>Conversations</h2>
        </header>
        <main>
          
        </main>
      </>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);