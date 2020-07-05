import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Item, Button } from 'semantic-ui-react'

import { changeHomeView, changeCurrentChat } from '../containers/Home/HomeActions';

const mapStateToProps = (state) => {
  return {
    view: state.home.view,
    chats: state.home.chats
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    changeHomeView: (view) => dispatch(changeHomeView(view)),
    changeCurrentChat: (chat) => dispatch(changeCurrentChat(chat))
  }
}

class Conversations extends Component {
  
  loadMessages(chat) {
    const { changeCurrentChat, changeHomeView } = this.props;
    changeCurrentChat(chat);
    changeHomeView('messages');
  }

  render() {
    const { view, chats } = this.props;
    if(view === 'conversations') {
      return <Item.Group divided>
        {chats.map(chat => {
          return <Item as={Button} key={chat._id} onClick={() => this.loadMessages(chat)}>
            <Item.Content>
              <Item.Header>{chat.chatName}</Item.Header>
              <Item.Description>{chat.time}</Item.Description>
            </Item.Content>
          </Item>
        })}
      </Item.Group>;
    } else {
      return <></>;
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Conversations);