import React from 'react';
import { Message } from 'semantic-ui-react';

const ErrorMessage = (props) => {
  const { errors } = props;
  if(errors.length) {
    return (
      <Message color='yellow'>
        <Message.Header>Validation Errors</Message.Header>
        <Message.List>
          {errors.map(e => <Message.Item key={e}>{e}</Message.Item>)}
        </Message.List>
      </Message>
    );
  } else {
    return <></>;
  }
}

export default ErrorMessage;