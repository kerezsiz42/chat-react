import React from 'react';
import { Button } from 'semantic-ui-react';
import './CreateButton.css';

const CreateButton = ({ active }) => {
  if(active) {
    return <Button className='create-button' icon='add' color='teal' size='massive' circular></Button>
  } else {
    return <></>;
  }
}

export default CreateButton;