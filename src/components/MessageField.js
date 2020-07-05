import React from 'react';
import { connect } from 'react-redux';
import { Form, Button } from 'semantic-ui-react';
import TextareaAutosize from 'react-textarea-autosize';

import {  } from '../containers/Home/HomeActions';

const mapStateToProps = (state) => {
  return {
    view: state.home.view
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
  }
}

const MessageField = ({ view }) => {
  if(view === 'messages') {
    return <footer>
      <Form style={{display: 'flex', alignItems: 'center'}}>
        <TextareaAutosize rows={1} maxRows={5} minRows={1} style={{resize: 'none', marginRight: '1em', borderRadius: '2em'}} placeholder='Type your message...'></TextareaAutosize>
        <Button color='teal' size='large' circular>Send</Button>
      </Form>
    </footer>
  } else {
    return <></>;
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(MessageField);