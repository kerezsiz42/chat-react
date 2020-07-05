import React from 'react';
import { connect } from 'react-redux';
import { Button } from 'semantic-ui-react'

import { changeHomeView, toggleMenuStatus } from '../containers/Home/HomeActions';

const mapStateToProps = (state) => {
  return {
    view: state.home.view,
    currentChat: state.home.currentChat,
    isMenuOn: state.home.isMenuOn
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    changeHomeView: (view) => dispatch(changeHomeView(view)),
    toggleMenuStatus: () => dispatch(toggleMenuStatus())
  }
}

const AddressBar = ({ view, currentChat, changeHomeView, toggleMenuStatus, isMenuOn }) => {
  switch(view) {
    case 'conversations':
      return <header>
          <h2 style={{margin: 0}}>Conversations</h2>
          <div>
            <Button onClick={toggleMenuStatus} icon={isMenuOn ? 'close' : 'bars'} size='big' basic/>
          </div>
      </header>;
    case 'users':
      return <header>
          <h2 style={{margin: 0}}>Search Users</h2>
          <div>
            <Button onClick={() => changeHomeView('messages')} icon='angle left' size='big' basic />
          </div>
      </header>;
    case 'messages':
      return <header>
          <h2 style={{margin: 0}}>{currentChat ? currentChat.chatName : 'No message found'}</h2>
          <div>
            <Button onClick={() => changeHomeView('conversations')} icon='angle left' size='big' basic />
            <Button onClick={toggleMenuStatus} icon={isMenuOn ? 'close' : 'bars'} size='big' basic/>
          </div>
      </header>;
    default:
      return <></>;
  } 
}

export default connect(mapStateToProps, mapDispatchToProps)(AddressBar);