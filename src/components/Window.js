import React from 'react';
import { Grid, Modal, Button, Input, Form, Icon } from 'semantic-ui-react';
import ErrorMessage from './ErrorMessage';

const Window = () => {
  return <Modal size='tiny' open={false}>
    <Modal.Header as='h1' dividing>Create conversation</Modal.Header>
    <Modal.Content>
        <p>
          We've found the following gravatar image associated with your e-mail
          address.
        </p>
      <Form>
        <ErrorMessage errors={[]} />
        <Form.Field>
          <Input>
            
          </Input>
        </Form.Field>
        <Grid columns={2}>
          <Grid.Column>
            <Button color='teal' fluid>
              <Icon name='checkmark' />Yes
            </Button>
          </Grid.Column>
          <Grid.Column>
            <Button  color='yellow' floated='right' fluid>
              <Icon name='remove' />No
            </Button>
          </Grid.Column>
        </Grid>
      </Form>
    </Modal.Content>
  </Modal>
}

export default Window;