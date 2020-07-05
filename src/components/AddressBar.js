import React from 'react';
import { connect } from 'react-redux';
import { Button } from 'semantic-ui-react'

import { changeView, toggleMenuStatus } from '../actions';

const mapStateToProps = (state) => {
  return {
    errors: state.errors,
    isPending: state.isPending,
    view: state.view,
    currentChat: state.currentChat,
    isMenuOn: state.isMenuOn
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    toggleMenuStatus: () => dispatch(toggleMenuStatus()),
    changeView: (view) => dispatch(changeView(view))
  }
}

const AddressBar = ({ view, currentChat, changeView, toggleMenuStatus, isMenuOn }) => {
  switch(view) {
    case 'conversations':
      return <div className='address-bar'>
        <h2 style={{margin: 0}}>Conversations</h2>
        <div>
          <Button onClick={toggleMenuStatus} icon={isMenuOn ? 'close' : 'bars'} size='big' basic/>
        </div>
      </div>;
    case 'users':
      return <div className='address-bar'>
        <h2 style={{margin: 0}}>Search Users</h2>
        <div>
          <Button onClick={() => changeView('messages')} icon='angle left' size='big' basic />
        </div>
      </div>;
    case 'messages':
      return <div className='address-bar'>
        <h2 style={{margin: 0}}>{currentChat ? currentChat.chatName : 'No message found'}</h2>
        <div>
          <Button onClick={() => changeView('conversations')} icon='angle left' size='big' basic/>
          <Button onClick={toggleMenuStatus} icon={isMenuOn ? 'close' : 'bars'} size='big' basic/>
        </div>
      </div>;
    default:
      return <></>;
  } 
}

export default connect(mapStateToProps, mapDispatchToProps)(AddressBar);