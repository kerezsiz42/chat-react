import React from 'react';
import { connect } from 'react-redux';
import { Button } from 'semantic-ui-react';

import { changeModalView } from '../actions';

const mapStateToProps = (state) => {
  return {
    view: state.view
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    changeModalView: (view) => dispatch(changeModalView(view)),
  }
}

const CreateButton = ({ changeModalView, view }) => {
  switch(view) {
    case 'conversations':
      return <Button onClick={() => changeModalView('create-chat')} className='create-button' icon='add' color='teal' size='massive' circular></Button>;
    case 'users':
      return <Button onClick={() => changeModalView('add-user')} className='create-button' icon='add' color='teal' size='massive' circular></Button>;
    default:
      return <></>;
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CreateButton);