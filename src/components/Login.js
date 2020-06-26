import React from 'react';
import { Form, Segment, Button, Header, Input, Grid } from 'semantic-ui-react';

const login = (username, password) => {
  return new Promise(async (resolve, reject) => {
    try {
      const response = await fetch(`${process.env.REACT_APP_API}/login`, {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({ username, password })
      });
      const data = await response.json();
      if(data.token !== undefined) {
        resolve(data.token);
      } else {
        reject('No token received.');
      }
    } catch(error) {
      reject(error);
    }
  });
}

const Login = () => (
  <Segment>
    <Form>
      <Header as='h1' dividing textAlign='center'>Wirebird's chat</Header>
      <Form.Field>
        <Input
          icon='user'
          iconPosition='left'
          type='text'
          name='username'
          placeholder='Username or email address'
          autoComplete='off'>
        </Input>
      </Form.Field>
      <Form.Field>
        <Input icon='lock' iconPosition='left' type='password' name='password' placeholder='Password'></Input>
      </Form.Field>
      <Grid columns={2}>
        <Grid.Column>
          <Button color='teal' fluid>Login</Button>
        </Grid.Column>
        <Grid.Column>
          <Button fluid>Register</Button>
        </Grid.Column>
      </Grid>
    </Form>
  </Segment>
)

export default Login;