import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Form, Segment, Button, Header, Input, Grid } from 'semantic-ui-react';
import ErrorMessage from '../components/ErrorMessage';

import { changeView, changeLoginData, login } from '../actions';

const mapStateToProps = (state) => {
  return {
    loginData: state.loginData,
    errors: state.errors,
    isPending: state.isPending
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    changeView: (view) => dispatch(changeView(view)),
    changeLoginData: (data) => dispatch(changeLoginData(data)),
    login: (username, password) => dispatch(login(username, password))
  }
}

class Login extends Component {
  componentDidMount() {
    const { changeView } = this.props;
    const token = localStorage.getItem('token');
    if(token) {
      changeView('conversations');
    }
  }

  submitLogin = async () => {
    const { loginData, login, changeView} = this.props;
    await login(loginData.username, loginData.password);
    if(!this.props.errors.length) {
      changeView('conversations');
    }
  }

  render() {
    const { changeView, isPending, errors, changeLoginData, loginData } = this.props;
    return <div className='app'>
      <Segment loading={isPending}>
        <Form>
          <Header as='h1' dividing textAlign='center'>Wirebird's chat</Header>
          <ErrorMessage errors={errors} />
          <Form.Field>
            <Input
              onChange={(e) => changeLoginData({...loginData, username: e.target.value})}
              icon='user'
              iconPosition='left'
              type='text'
              placeholder='Username or email address'
              autoComplete='off'>
            </Input>
          </Form.Field>
          <Form.Field>
            <Input
              onChange={(e) => changeLoginData({...loginData, password: e.target.value})}
              icon='lock'
              iconPosition='left'
              type='password'
              placeholder='Password'>
            </Input>
          </Form.Field>
          <Grid columns={2}>
            <Grid.Column>
              <Button
                type='submit'
                onClick={this.submitLogin}
                color='teal'
                fluid>Login
              </Button>
            </Grid.Column>
            <Grid.Column>
              <Button
                type='button'
                onClick={() => changeView('register')}
                fluid>Register
              </Button>
            </Grid.Column>
          </Grid>
        </Form>
      </Segment>
    </div>
  }  
}
  

export default connect(mapStateToProps, mapDispatchToProps)(Login);