import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Dimmer, Sidebar, Item, Button, Loader } from 'semantic-ui-react';

import AddressBar from '../components/AddressBar';
import SideMenu from '../components/SideMenu';
import CreateChatModal from '../components/CreateChatModal';
import CreateButton from '../components/CreateButton';

import { changeView, changeCurrentChat, myChats } from '../actions';
import LogoutModal from '../components/LogoutModal';

const mapStateToProps = (state) => {
  return {
    view: state.view,
    chats: state.chats,
    isPending: state.isPending,
    errors: state.errors
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    changeView: (view) => dispatch(changeView(view)),
    changeCurrentChat: (chat) => dispatch(changeCurrentChat(chat)),
    myChats: () => dispatch(myChats())
  }
}

class Conversations extends Component {
  componentDidMount = async () => {
    await this.props.myChats();
    if(this.props.errors.length) {
      changeView('login');
    }
  }

  loadMessages(chat) {
    const { changeCurrentChat, changeView } = this.props;
    changeCurrentChat(chat);
    changeView('messages');
  }

  render() {
    const { chats, isPending } = this.props;
    return <div className='app'>
      <AddressBar />
      <Sidebar.Pushable className='my-main'>
        <SideMenu/>
        <Sidebar.Pusher dimmed={isPending} style={{display: 'flex', flexDirection: 'column'}}>
          <Dimmer inverted active={isPending}>
            <Loader content='Loading...' />
          </Dimmer>
          <div className='my-content'>
            <Item.Group divided>
              {chats.map(chat => {
                return <Item as={Button} key={chat._id} onClick={() => this.loadMessages(chat)}>
                  <Item.Content>
                    <Item.Header>{chat.chatName}</Item.Header>
                    <Item.Description>{chat.members.map(user => {
                      return user.username + ' ';
                    })}</Item.Description>
                  </Item.Content>
                </Item>
              })}
            </Item.Group>
          </div>
          <LogoutModal />
          <CreateChatModal />
          <CreateButton />
        </Sidebar.Pusher>
      </Sidebar.Pushable>
    </div>;
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Conversations);