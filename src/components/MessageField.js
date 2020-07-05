import React from 'react';
import { connect } from 'react-redux';
import { Form, Button } from 'semantic-ui-react';
import TextareaAutosize from 'react-textarea-autosize';

const mapStateToProps = (state) => {
  return {
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
  }
}

const MessageField = () => {
  return <div className='message-field'>
    <Form style={{display: 'flex', alignItems: 'center'}}>
      <TextareaAutosize rows={1} maxRows={5} minRows={1} style={{resize: 'none', marginRight: '1em', borderRadius: '2em'}} placeholder='Type your message...'></TextareaAutosize>
      <Button color='teal' size='large' circular>Send</Button>
    </Form>
  </div>
}

export default connect(mapStateToProps, mapDispatchToProps)(MessageField);