import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Dimmer, Sidebar } from 'semantic-ui-react';

import { myChats, changeHomeView } from './HomeActions';
import { changeAppView } from '../App/AppActions';
import AddressBar from '../../components/AddressBar';
import CreateButton from '../../components/CreateButton';
import MessageField from '../../components/MessageField';
import Conversations from '../../components/Conversations';
import Users from '../../components/Users';
import Messages from '../../components/Messages';
import SideMenu from '../../components/SideMenu';
import Window from '../../components/Window';

const mapStateToProps = (state) => {
  return {
    chats: state.home.chats,
    isPending: state.home.isPending,
    errors: state.home.errors,
    view: state.home.view,
    currentChat: state.home.currentChat,
    isMenuOn: state.home.isMenuOn
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    myChats: (token) => dispatch(myChats(token)),
    changeAppView: (view) => dispatch(changeAppView(view)),
    changeHomeView: (view) => dispatch(changeHomeView(view)),
  }
}

class Home extends Component {
  async componentDidMount() {
    const { myChats, changeAppView } = this.props;
    const token = localStorage.getItem('token');
    await myChats(token);
    if(this.props.errors.length) {
      changeAppView('login');
    }
    console.log(this.props.chats);
  }

  render() {
    const { isPending, isMenuOn } = this.props;
    return <Dimmer.Dimmable className='app' blurring dimmed={isPending}>
      <Dimmer />
      <AddressBar />
      <Sidebar.Pushable className='main'>
        <SideMenu/>
        <Sidebar.Pusher dimmed={isMenuOn} style={{display: 'flex', flexDirection: 'column'}}>
          <content>
            <Conversations />
            <Users />
            <Messages />
          </content>
          <Window />
          <CreateButton />
          <MessageField />
        </Sidebar.Pusher>
      </Sidebar.Pushable>
    </Dimmer.Dimmable>
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);