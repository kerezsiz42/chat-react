import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Grid, Modal, Button, Input, Form, Icon } from 'semantic-ui-react';
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

class CreateChatModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      chatName: ''
    }
  }

  changeChatName = (e) => {
    this.setState({ chatName: e.target.value })
  }

  handleCreateChat = async () => {
    await this.props.createChat(this.state.chatName);
    if(!this.props.errors.length) {
      await this.props.myChats();
    }
  }

  render() {
    const { modalView, changeModalView, errors } = this.props;
    if(modalView === 'create-chat') {
      return <Modal size='tiny' open>
        <Modal.Header as='h1'>Create new conversation</Modal.Header>
        <Modal.Content>
          <p>Please type a name for this new chat room.</p>
          <Form>
            <ErrorMessage errors={errors} />
            <Form.Field>
              <Input type='text' onChange={this.changeChatName}></Input>
            </Form.Field>
            <Grid columns={2}>
              <Grid.Column>
                <Button type='submit' onClick={this.handleCreateChat} color='teal' fluid>
                  <Icon name='checkmark' />Submit
                </Button>
              </Grid.Column>
              <Grid.Column>
                <Button type='button' onClick={() => changeModalView('')} color='yellow' floated='right' fluid>
                  <Icon name='remove' />Cancel
                </Button>
              </Grid.Column>
            </Grid>
          </Form>
        </Modal.Content>
      </Modal>
    } else {
      return <></>;
    }
  }
} 

export default connect(mapStateToProps, mapDispatchToProps)(CreateChatModal);