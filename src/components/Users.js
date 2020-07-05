import React from 'react';
import { connect } from 'react-redux';
import {  } from 'semantic-ui-react'

import { changeHomeView } from '../containers/Home/HomeActions';

const mapStateToProps = (state) => {
  return {
    view: state.home.view,
    currentChat: state.home.currentChat
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    changeHomeView: (view) => dispatch(changeHomeView(view))
  }
}

const Users = ({ view, currentChat, changeHomeView }) => {
  if(view === 'users') {
    return <></>;
  } else {
    return <></>;
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Users);