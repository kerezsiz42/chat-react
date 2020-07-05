import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Form, Segment, Button, Header, Input, Grid } from 'semantic-ui-react';
import ErrorMessage from '../../components/ErrorMessage';

import { login, setLoginUsername, setLoginPassword } from './LoginActions';
import { changeAppView } from '../App/AppActions';

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
    changeAppView: (view) => dispatch(changeAppView(view))
  }
}

class Login extends Component {
  submitLogin = async () => {
    const { usernameField, passwordField, login, changeAppView} = this.props;
    await login(usernameField, passwordField);
    if(!this.props.errors.length) {
      changeAppView('home');
    }
  }

  render() {
    const { changeAppView, setLoginPassword, setLoginUsername, isPending, errors } = this.props;
    return <div className='app'>
      <Segment loading={isPending}>
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
              <Button type='submit' onClick={this.submitLogin} color='teal' fluid>Login</Button>
            </Grid.Column>
            <Grid.Column>
              <Button type='button' onClick={() => changeAppView('register')} fluid>Register</Button>
            </Grid.Column>
          </Grid>
        </Form>
      </Segment>
    </div>
  }  
}
  

export default connect(mapStateToProps, mapDispatchToProps)(Login);