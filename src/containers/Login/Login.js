import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Form, Segment, Button, Header, Input, Grid, Loader, Dimmer } from 'semantic-ui-react';
import ErrorMessage from '../../components/ErrorMessage';

import { login, setLoginUsername, setLoginPassword } from './LoginActions';
import { changeView, changeLoginStatus } from '../App/AppActions';

const mapStateToProps = (state) => {
  return {
    usernameField: state.login.usernameField,
    passwordField: state.login.passwordField,
    isPending: state.login.isPending,
    errors: state.login.errors
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    setLoginUsername: (event) => dispatch(setLoginUsername(event.target.value)),
    setLoginPassword: (event) => dispatch(setLoginPassword(event.target.value)),
    login: (username, password) => dispatch(login(username, password)),
    changeView: (view) => dispatch(changeView(view)),
    changeLoginStatus: (isLoggedIn) => dispatch(changeLoginStatus(isLoggedIn)),
  }
}

class Login extends Component {
  submitLogin = async () => {
    const { usernameField, passwordField, login, changeView, changeLoginStatus } = this.props;
    await login(usernameField, passwordField);
    if(!this.props.errors.length) {
      changeLoginStatus(true);
      changeView('home');
    }
  }

  render() {
    const { changeView, setLoginPassword, setLoginUsername, isPending, errors } = this.props;
    return (
      <Segment>
        <Dimmer inverted active={isPending}>
          <Loader>Waiting for server response...</Loader>
        </Dimmer>
        <Form>
          <Header as='h1' dividing textAlign='center'>Wirebird's chat</Header>
          <ErrorMessage errors={errors} />
          <Form.Field>
            <Input
              onChange={setLoginUsername}
              icon='user'
              iconPosition='left'
              type='text'
              placeholder='Username or email address'
              autoComplete='off'>
            </Input>
          </Form.Field>
          <Form.Field>
            <Input
              onChange={setLoginPassword}
              icon='lock'
              iconPosition='left'
              type='password'
              placeholder='Password'>
            </Input>
          </Form.Field>
          <Grid columns={2}>
            <Grid.Column>
              <Button onClick={this.submitLogin} color='teal' fluid>Login</Button>
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