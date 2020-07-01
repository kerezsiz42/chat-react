import React from 'react';
import './MessageField.css';
import { Form, Button } from 'semantic-ui-react';
import TextareaAutosize from 'react-textarea-autosize';

const MessageField = ({ active }) => {
  if(active) {
    return (
      <footer>
        <Form style={{display: 'flex', alignItems: 'center'}}>
          <TextareaAutosize rows={1} maxRows={5} minRows={1} style={{resize: 'none', marginRight: '1em', borderRadius: '2em'}} placeholder='Type your message...'></TextareaAutosize>
          <Button color='teal' size='large' circular>Send</Button>
        </Form>
      </footer>
    );
  } else {
    return <></>;
  }
}

export default MessageField;