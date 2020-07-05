import React, {Component} from 'react';
import { connect } from 'react-redux';
import { Form, Segment, Button, Header, Input, Grid } from 'semantic-ui-react';
import ErrorMessage from '../../components/ErrorMessage';

import { register, setEmailField, setSecondPasswordField, setPasswordField, setUsernameField} from './RegisterActions';
import { changeAppView } from '../App/AppActions';

const mapStateToProps = (state) => {
  return {
    usernameField: state.register.usernameField,
    passwordField: state.register.passwordField,
    emailField: state.register.emailField,
    secondPasswordField: state.register.secondPasswordField,
    isPending: state.register.isPending,
    errors: state.register.errors
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    changeAppView: (view) => dispatch(changeAppView(view)),
    setUsernameField: (event) => dispatch(setUsernameField(event.target.value)),
    setPasswordField: (event) => dispatch(setPasswordField(event.target.value)),
    setEmailField: (event) => dispatch(setEmailField(event.target.value)),
    setSecondPasswordField: (event) => dispatch(setSecondPasswordField(event.target.value)),
    register: (username, email, password) => dispatch(register(username, email, password))
  }
}

class Register extends Component {
  submitRegister = async () => {
    const { usernameField, emailField, passwordField, register, changeAppView } = this.props;
    await register(usernameField, emailField, passwordField);
    if(!this.props.errors.length) {
      changeAppView('login');
    }
  }

  render() {
    const { changeAppView, setEmailField, setSecondPasswordField, setPasswordField, setUsernameField, isPending, errors } = this.props;
    return <div className='app'>
      <Segment loading={isPending}>
        <Form>
          <Header as='h1' dividing textAlign='center'>Wirebird's Chat Registration</Header>
          <ErrorMessage errors={errors} />
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
              <Button type='submit' onClick={this.submitRegister} color='teal' fluid>Register</Button>
            </Grid.Column>
            <Grid.Column>
              <Button type='button' onClick={() => changeAppView('login')} fluid>Back to Login</Button>
            </Grid.Column>
          </Grid>
        </Form>
      </Segment>
    </div>
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(Register);