import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Form, Segment, Button, Header, Input, Grid, Loader, Dimmer } from 'semantic-ui-react';

import { setUsernameField, setPasswordField } from '../Register/RegisterActions';
import { login } from './LoginActions';
import { changeView } from '../App/AppActions';

const mapStateToProps = (state) => {
  return {
    usernameField: state.register.usernameField,
    passwordField: state.register.passwordField,
    isPending: state.login.isPending,
    error: state.login.error
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    setUsernameField: (event) => dispatch(setUsernameField(event.target.value)),
    setPasswordField: (event) => dispatch(setPasswordField(event.target.value)),
    login: (username, password) => dispatch(login(username, password)),
    changeView: (view) => dispatch(changeView(view))
  }
}

class Login extends Component {
  loginProcess = async () => {
    try {
      const { usernameField, passwordField, login, changeView } = this.props;
      await login(usernameField, passwordField);
      const token = localStorage.getItem('token');
      if(token !== null) {
        changeView('home');
      }
    } catch {

    }
  }

  render() {
    const { changeView, setPasswordField, setUsernameField, isPending, error } = this.props;
    return (
      <Segment>
        <Dimmer inverted active={isPending}>
          <Loader>Waiting for server response...</Loader>
        </Dimmer>
        <Form>
          <Header as='h1' dividing textAlign='center'>Wirebird's chat</Header>
          <Form.Field>
            <Input
              onChange={setUsernameField}
              icon='user'
              iconPosition='left'
              type='text'
              placeholder='Username or email address'
              autoComplete='off'>
            </Input>
          </Form.Field>
          <Form.Field>
            <Input
              onChange={setPasswordField}
              icon='lock'
              iconPosition='left'
              type='password'
              placeholder='Password'>
            </Input>
          </Form.Field>
          <Grid columns={2}>
            <Grid.Column>
              <Button onClick={this.loginProcess} color='teal' fluid>Login</Button>
            </Grid.Column>
            <Grid.Column>
              <Button onClick={() => changeView('register')} fluid>Register</Button>
            </Grid.Column>
          </Grid>
        </Form>
      </Segment>
    );
  }  
}
  

export default connect(mapStateToProps, mapDispatchToProps)(Login);