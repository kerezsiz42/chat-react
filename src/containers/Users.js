import React from 'react';
import { connect } from 'react-redux';
import { Dimmer, Sidebar } from 'semantic-ui-react';

import AddressBar from '../components/AddressBar';
import SideMenu from '../components/SideMenu';
import CreateButton from '../components/CreateButton';


const mapStateToProps = (state) => {
  return {
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
  }
}

const Users = () => {
  return <Dimmer.Dimmable className='app' blurring dimmed={false}>
    <Dimmer />
    <AddressBar />
    <Sidebar.Pushable className='main'>
      <SideMenu/>
      <Sidebar.Pusher dimmed={false} style={{display: 'flex', flexDirection: 'column'}}>
        <div className='my-content'></div>
        <CreateButton />
      </Sidebar.Pusher>
    </Sidebar.Pushable>
  </Dimmer.Dimmable>;
}

export default connect(mapStateToProps, mapDispatchToProps)(Users);