import React, {Component} from 'react';
import { connect } from 'react-redux';
import { Form, Segment, Button, Header, Input, Grid } from 'semantic-ui-react';
import ErrorMessage from '../components/ErrorMessage';

import { register, changeView, changeRegisterData  } from '../actions';

const mapStateToProps = (state) => {
  return {
    registerData: state.registerData,
    isPending: state.isPending,
    errors: state.errors
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    changeView: (view) => dispatch(changeView(view)),
    changeRegisterData: (data) => dispatch(changeRegisterData(data)),
    register: (username, email, password) => dispatch(register(username, email, password))
  }
}

class Register extends Component {
  submitRegister = async () => {
    const { register, changeView, registerData } = this.props;
    await register(registerData.username, registerData.email, registerData.password);
    if(!this.props.errors.length) {
      changeView('login');
    }
  }

  render() {
    const { changeView, isPending, errors, registerData, changeRegisterData } = this.props;
    return <div className='app'>
      <Segment loading={isPending}>
        <Form>
          <Header as='h1' dividing textAlign='center'>Wirebird's Chat Registration</Header>
          <ErrorMessage errors={errors} />
          <Form.Field>
            <Input
              onChange={(e) => changeRegisterData({...registerData, username: e.target.value})}
              icon='user'
              iconPosition='left'
              type='text'
              placeholder='Username'
              autoComplete='off'
              focus>
            </Input>
          </Form.Field>
          <Form.Field>
            <Input
              onChange={(e) => changeRegisterData({...registerData, email: e.target.value})}
              icon='mail'
              iconPosition='left'
              type='text'
              placeholder='Email address'
              autoComplete='off'>
            </Input>
          </Form.Field>
          <Form.Field>
            <Input
              onChange={(e) => changeRegisterData({...registerData, password: e.target.value})}
              icon='lock'
              iconPosition='left'
              type='password'
              placeholder='Password'>
            </Input>
          </Form.Field>
          <Form.Field>
            <Input
              onChange={(e) => changeRegisterData({...registerData, secondPassword: e.target.value})}
              icon='lock'
              iconPosition='left'
              type='password'
              placeholder='Type your password again'>
            </Input>
          </Form.Field>
          <Grid columns={2}>
            <Grid.Column>
              <Button
                type='submit'
                onClick={this.submitRegister}
                color='teal'
                fluid>Register
              </Button>
            </Grid.Column>
            <Grid.Column>
              <Button
                type='button'
                onClick={() => changeView('login')}
                fluid>Back to Login
              </Button>
            </Grid.Column>
          </Grid>
        </Form>
      </Segment>
    </div>
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(Register);