import React from 'react';
import { connect } from 'react-redux';
import { Button } from 'semantic-ui-react';

import {  } from '../containers/Home/HomeActions';

const mapStateToProps = (state) => {
  return {
    view: state.home.view
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
  }
}

const CreateButton = ({ view }) => {
  if(view === 'conversations') {
    return <Button className='create-button' icon='add' color='teal' size='massive' circular></Button>;
  } else {
    return <></>;
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CreateButton);