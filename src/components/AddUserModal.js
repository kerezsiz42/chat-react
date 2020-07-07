import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Search, Modal, Button, Form, Icon, Popup } from 'semantic-ui-react';
import ErrorMessage from './ErrorMessage';

import { changeModalView, createChat, myChats } from '../actions';

const mapStateToProps = (state) => {
  return {
    modalView: state.modalView,
    errors: state.errors
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    changeModalView: (view) => dispatch(changeModalView(view)),
    createChat: (chatName) => dispatch(createChat(chatName)),
    myChats: () => dispatch(myChats())
  }
}

class AddUserModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchTerm: '',
      results: []
    }
  }

  changeSearchTerm = (e) => {
    this.setState({ chatName: e.target.value })
  }

  handleSearchUser = async () => {
    
  }

  render() {
    const { modalView, changeModalView, errors } = this.props;
    if(modalView === 'add-user') {
      return <Modal size='tiny' open>
        <Modal.Header as='h1'>Add user
          <Button type='button' onClick={() => changeModalView('')} floated='right' color='yellow'>
            <Icon name='remove' />Cancel
          </Button>
        </Modal.Header>
        <Modal.Content>
          <p>Type a username to search for and click on it if you want to add to this chat room</p>
          <Form>
            <ErrorMessage errors={errors} />
            <Form.Field>
              <Search loading={false} onChange={this.changeSearchTerm} fluid results={['hello', 'whats up?']}/>
            </Form.Field>
          </Form>
        </Modal.Content>
      </Modal>
    } else {
      return <></>;
    }
  }
} 

export default connect(mapStateToProps, mapDispatchToProps)(AddUserModal);