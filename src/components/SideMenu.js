import React from 'react';
import { connect } from 'react-redux';
import { Sidebar, Menu, Icon } from 'semantic-ui-react'

import { changeHomeView } from '../containers/Home/HomeActions';
import { logout } from '../containers/App/AppActions';

const mapStateToProps = (state) => {
  return {
    view: state.home.view,
    isMenuOn: state.home.isMenuOn
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    changeHomeView: (view) => dispatch(changeHomeView(view)),
    logout: () => dispatch(logout())
  }
}

const SideMenu = ({ view, isMenuOn, logout }) => {
  switch(view) {
    case 'conversations':
      return <Sidebar as={Menu}
        animation='overlay'
        inverted
        vertical
        visible={isMenuOn}
        direction='right'
        size='large'
      >
        <Menu.Item as='a'>
          <Icon name='exclamation triangle' />
          Delete this account
        </Menu.Item>
        <Menu.Item onClick={logout} as='a'>
          <Icon name='sign-out' />
          Logout
        </Menu.Item>
      </Sidebar>
    case 'messages':
      return <Sidebar as={Menu}
        animation='overlay'
        inverted
        vertical
        visible={isMenuOn}
        direction='right'
        size='large'
      >
        <Menu.Item as='a'>
          <Icon name='add user' />
          Add user
        </Menu.Item>
        <Menu.Item as='a'>
          <Icon name='edit' />
          Rename chat
        </Menu.Item>
        <Menu.Item as='a'>
          <Icon name='delete user' />
          Leave chat
        </Menu.Item>
      </Sidebar>
    default:
      return <></>;
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SideMenu);