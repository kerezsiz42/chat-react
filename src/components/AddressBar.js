import React from 'react';
import { Button } from 'semantic-ui-react'

const AddressBar = ({ title }) => {
  return (
    <header>
      <h2 style={{margin: 0}}>{title === undefined ? 'Conversations' : title}</h2>
      <div>
        {title !== undefined ? <Button icon='angle left' size='big' basic/> : ''}
        <Button icon='bars' size='big' basic/>
      </div>
    </header>
  );
}

export default AddressBar;