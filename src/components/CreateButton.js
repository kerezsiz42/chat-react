import React from 'react';
import { connect } from 'react-redux';
import { Button } from 'semantic-ui-react';

import { changeModalView } from '../actions';

const mapStateToProps = (state) => {
  return {
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    changeModalView: (view) => dispatch(changeModalView(view)),
  }
}

const CreateButton = ({ changeModalView }) => {
  return <Button onClick={() => changeModalView('create-chat')} className='create-button' icon='add' color='teal' size='massive' circular></Button>;
}

export default connect(mapStateToProps, mapDispatchToProps)(CreateButton);