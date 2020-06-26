import React from 'react';
import { Form, Segment, Button, Header, Input, Grid } from 'semantic-ui-react';

const Register = ({ changeView }) => (
  <Segment>
    <Form>
      <Header as='h1' dividing textAlign='center'>Wirebird's Chat Registration</Header>
      <Form.Field>
        <Input icon='user' iconPosition='left' type='text' name='username' placeholder='Username' autoComplete='off' focus></Input>
      </Form.Field>
      <Form.Field>
        <Input icon='mail' iconPosition='left' type='text' name='email' placeholder='Email address' autoComplete='off'></Input>
      </Form.Field>
      <Form.Field>
        <Input icon='lock' iconPosition='left' type='password' name='password' placeholder='Password'></Input>
      </Form.Field>
      <Form.Field>
        <Input icon='lock' iconPosition='left' type='password' name='passwordCheck' placeholder='Type your password again'></Input>
      </Form.Field>
      <Grid columns={2}>
        <Grid.Column>
          <Button color='teal' fluid>Register</Button>
        </Grid.Column>
        <Grid.Column>
          <Button onClick={() => changeView('login')} fluid>Back to Login</Button>
        </Grid.Column>
      </Grid>
    </Form>
  </Segment>
)

export default Register;