import React from 'react';
import { connect } from 'react-redux';
import { Form, Segment, Button, Header, Input, Grid, Loader, Dimmer, Message } from 'semantic-ui-react';

import { setUsernameField, setPasswordField, login } from './LoginActions';

const mapStateToProps = (state) => {
  return {
    usernameField: state.login.usernameField,
    passwordField: state.login.passwordField,
    isPending: state.login.isPending,
    token: state.login.token,
    error: state.login.error
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    setUsernameField: (event) => dispatch(setUsernameField(event.target.value)),
    setPasswordField: (event) => dispatch(setPasswordField(event.target.value)),
    login: (username, password) => dispatch(login(username, password))
  }
}

const Login = ({ changeView, setPasswordField, setUsernameField, usernameField, passwordField, login, isPending, error }) => {
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
            <Button onClick={() => login(usernameField, passwordField)} color='teal' fluid>Login</Button>
          </Grid.Column>
          <Grid.Column>
            <Button onClick={() => changeView('register')} fluid>Register</Button>
          </Grid.Column>
        </Grid>
      </Form>
    </Segment>
  );
}
  

export default connect(mapStateToProps, mapDispatchToProps)(Login);