import React from 'react';
import { connect } from 'react-redux';
import { Sidebar, Menu, Icon, Button } from 'semantic-ui-react'

import { changeModalView } from '../actions';

const mapStateToProps = (state) => {
  return {
    view: state.view,
    isMenuOn: state.isMenuOn,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    changeModalView: (view) => dispatch(changeModalView(view)),
  }
}

const SideMenu = ({ view, isMenuOn, changeModalView }) => {
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
        <Menu.Item onClick={() => changeModalView('logout')} as='a'>
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