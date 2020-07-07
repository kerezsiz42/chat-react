import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Grid, Modal, Button, Input, Form, Icon } from 'semantic-ui-react';
import ErrorMessage from './ErrorMessage';

import { changeModalView, changeView, logout } from '../actions';

const mapStateToProps = (state) => {
  return {
    modalView: state.modalView,
    errors: state.errors
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    changeModalView: (view) => dispatch(changeModalView(view)),
    changeView: (view) => dispatch(changeView(view)),
    logout: () => dispatch(logout())
  }
}

class LogoutModal extends Component {
  handleLogout = () => {
    this.props.logout();
    this.props.changeModalView('');
    this.props.changeView('login');
  }

  render() {
    const { modalView, changeModalView, errors } = this.props;
    if(modalView === 'logout') {
      return <Modal size='tiny' open>
        <Modal.Header as='h1'>Logout</Modal.Header>
        <Modal.Content>
          <p>Do you really want to log out?</p>
          <Form>
            <ErrorMessage errors={errors} />
            <Grid columns={2}>
              <Grid.Column>
                <Button type='submit' onClick={this.handleLogout} color='yellow' fluid>
                  <Icon name='checkmark' />Yes
                </Button>
              </Grid.Column>
              <Grid.Column>
                <Button type='button' onClick={() => changeModalView('')} color='teal' floated='right' fluid>
                  <Icon name='remove' />No
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

export default connect(mapStateToProps, mapDispatchToProps)(LogoutModal);