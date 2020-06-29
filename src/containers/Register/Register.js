import React, {Component} from 'react';
import { connect } from 'react-redux';
import { Form, Segment, Button, Header, Input, Grid, Loader, Dimmer } from 'semantic-ui-react';

import { register, setEmailField, setSecondPasswordField, setPasswordField, setUsernameField} from './RegisterActions';
import { changeView } from '../App/AppActions';

const mapStateToProps = (state) => {
  return {
    usernameField: state.register.usernameField,
    passwordField: state.register.passwordField,
    emailField: state.register.emailField,
    secondPasswordField: state.register.secondPasswordField,
    isPending: state.register.isPending,
    error: state.register.error
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    changeView: (view) => dispatch(changeView(view)),
    setUsernameField: (event) => dispatch(setUsernameField(event.target.value)),
    setPasswordField: (event) => dispatch(setPasswordField(event.target.value)),
    setEmailField: (event) => dispatch(setEmailField(event.target.value)),
    setSecondPasswordField: (event) => dispatch(setSecondPasswordField(event.target.value)),
    register: (username, email, password) => dispatch(register(username, email, password))
  }
}

class Register extends Component {
  registerProcess = async () => {
    const { usernameField, passwordField, register, changeView } = this.props;
    await register(usernameField, passwordField);
    changeView('login');
  }

  render() {
    const { changeView, setEmailField, setSecondPasswordField, setPasswordField, setUsernameField, isPending } = this.props;
    return (
      <Segment>
        <Dimmer inverted active={isPending}>
          <Loader>Waiting for server response...</Loader>
        </Dimmer>
        <Form>
          <Header as='h1' dividing textAlign='center'>Wirebird's Chat Registration</Header>
          <Form.Field>
            <Input onChange={setUsernameField} icon='user' iconPosition='left' type='text' placeholder='Username' autoComplete='off' focus></Input>
          </Form.Field>
          <Form.Field>
            <Input onChange={setEmailField} icon='mail' iconPosition='left' type='text' placeholder='Email address' autoComplete='off'></Input>
          </Form.Field>
          <Form.Field>
            <Input onChange={setPasswordField} icon='lock' iconPosition='left' type='password' placeholder='Password'></Input>
          </Form.Field>
          <Form.Field>
            <Input onChange={setSecondPasswordField} icon='lock' iconPosition='left' type='password' placeholder='Type your password again'></Input>
          </Form.Field>
          <Grid columns={2}>
            <Grid.Column>
              <Button onClick={this.registerProcess} color='teal' fluid>Register</Button>
            </Grid.Column>
            <Grid.Column>
              <Button onClick={() => changeView('login')} fluid>Back to Login</Button>
            </Grid.Column>
          </Grid>
        </Form>
      </Segment>
    );
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(Register);