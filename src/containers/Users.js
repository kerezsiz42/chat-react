import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Dimmer, Sidebar, Item } from 'semantic-ui-react';

import AddressBar from '../components/AddressBar';
import SideMenu from '../components/SideMenu';
import CreateButton from '../components/CreateButton';
import AddUserModal from '../components/AddUserModal';


const mapStateToProps = (state) => {
  return {
    currentChat: state.currentChat
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
  }
}

class Users extends Component {
  render () {
    const { currentChat } = this.props;
    return <Dimmer.Dimmable className='app' blurring dimmed={false}>
      <Dimmer />
      <AddressBar />
      <Sidebar.Pushable className='my-main'>
        <SideMenu/>
        <Sidebar.Pusher dimmed={false} style={{display: 'flex', flexDirection: 'column'}}>
          <div className='my-content'>
            <b>These users are currently part of this chat room. Please use the create button to add another user.</b>
            <Item.Group divided>
              {currentChat.members.map(user => {
                return <Item key={user._id}>
                  <Item.Content>
                    <Item.Header>{user.username}</Item.Header>
                    <Item.Description>{user._id}</Item.Description>
                  </Item.Content>
                </Item>
              })}
            </Item.Group>
          </div>
          <AddUserModal />
          <CreateButton />
        </Sidebar.Pusher>
      </Sidebar.Pushable>
    </Dimmer.Dimmable>;
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Users);