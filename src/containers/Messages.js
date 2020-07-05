import React from 'react';
import { connect } from 'react-redux';
import { Dimmer, Sidebar, Loader } from 'semantic-ui-react'

import AddressBar from '../components/AddressBar';
import SideMenu from '../components/SideMenu';
import MessageField from '../components/MessageField';

const mapStateToProps = (state) => {
  return {
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
  }
}

const Messages = ({ currentChat, isPending }) => {
  return <div className='app'>
    <Dimmer />
    <AddressBar />
    <Sidebar.Pushable className='my-main'>
      <SideMenu/>
      <Sidebar.Pusher dimmed={isPending} style={{display: 'flex', flexDirection: 'column'}}>
        <Dimmer inverted active={isPending}>
          <Loader content='Loading...' />
        </Dimmer>
        <div className='my-content'>
          <>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc auctor massa sapien, id eleifend sapien lobortis et. Quisque bibendum vehicula diam. Vestibulum in tellus tellus. Aenean tristique est metus, eu eleifend lacus pulvinar a. Cras sit amet nisi et risus venenatis dignissim ac at metus. Sed sed enim arcu. Proin at sagittis dolor, at pellentesque purus. Suspendisse a felis urna. Pellentesque imperdiet eget ipsum sit amet dictum.
          Curabitur a vehicula tellus. Proin eu magna et lacus bibendum volutpat ut tempus arcu. Etiam placerat purus ligula, sit amet finibus risus ornare gravida. Vivamus euismod, nulla ut tristique luctus, orci dolor malesuada nibh, ac cursus felis eros sed diam. Cras at mauris tincidunt purus euismod convallis nec a nisi. Ut tincidunt tortor ullamcorper faucibus accumsan. Mauris pulvinar nisl ac erat mollis, non rhoncus quam elementum. Proin iaculis lectus et viverra tempus.
          Curabitur eu lectus id tellus consequat elementum in quis risus. Aliquam eu ipsum eu orci porta ornare sit amet ut odio. Nullam nec vestibulum massa, id bibendum risus. Nam id sagittis lacus, in aliquam orci. Nulla ac pharetra nunc, nec facilisis elit. Morbi eu consectetur tortor, sed vestibulum purus. Curabitur consequat tincidunt est, et ultrices lorem convallis a. Nunc in purus a dui aliquam auctor. Mauris lacinia in velit at bibendum. Sed ac semper massa.
          Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Duis volutpat ut nibh at blandit. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Quisque gravida ultrices commodo. Praesent aliquet blandit malesuada. Vestibulum volutpat massa id odio commodo, vel molestie sapien consectetur. Suspendisse potenti. Phasellus non tortor nulla. Sed vestibulum vel arcu tincidunt blandit. Integer ac molestie velit, ac sagittis ligula. Aenean suscipit hendrerit purus, eu molestie metus.
          Quisque rutrum interdum felis eu porttitor. Nulla auctor mi quis erat vulputate tempor in aliquet erat. Donec a metus ac justo pretium scelerisque. Vivamus semper lobortis quam. Phasellus placerat erat quam, nec faucibus eros maximus id. Curabitur cursus nisi vitae iaculis faucibus. Vestibulum ut lorem vel enim ultrices tincidunt. Curabitur a imperdiet ante. Cras mollis odio lectus, ac dictum mauris pellentesque a. Integer convallis venenatis risus sed tincidunt. Donec sollicitudin tincidunt egestas. In posuere diam metus, eget lobortis eros ultricies ut. Mauris ut luctus magna. Sed id arcu nisi. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc auctor massa sapien, id eleifend sapien lobortis et. Quisque bibendum vehicula diam. Vestibulum in tellus tellus. Aenean tristique est metus, eu eleifend lacus pulvinar a. Cras sit amet nisi et risus venenatis dignissim ac at metus. Sed sed enim arcu. Proin at sagittis dolor, at pellentesque purus. Suspendisse a felis urna. Pellentesque imperdiet eget ipsum sit amet dictum.
          Curabitur a vehicula tellus. Proin eu magna et lacus bibendum volutpat ut tempus arcu. Etiam placerat purus ligula, sit amet finibus risus ornare gravida. Vivamus euismod, nulla ut tristique luctus, orci dolor malesuada nibh, ac cursus felis eros sed diam. Cras at mauris tincidunt purus euismod convallis nec a nisi. Ut tincidunt tortor ullamcorper faucibus accumsan. Mauris pulvinar nisl ac erat mollis, non rhoncus quam elementum. Proin iaculis lectus et viverra tempus.
          Curabitur eu lectus id tellus consequat elementum in quis risus. Aliquam eu ipsum eu orci porta ornare sit amet ut odio. Nullam nec vestibulum massa, id bibendum risus. Nam id sagittis lacus, in aliquam orci. Nulla ac pharetra nunc, nec facilisis elit. Morbi eu consectetur tortor, sed vestibulum purus. Curabitur consequat tincidunt est, et ultrices lorem convallis a. Nunc in purus a dui aliquam auctor. Mauris lacinia in velit at bibendum. Sed ac semper massa.
          Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Duis volutpat ut nibh at blandit. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Quisque gravida ultrices commodo. Praesent aliquet blandit malesuada. Vestibulum volutpat massa id odio commodo, vel molestie sapien consectetur. Suspendisse potenti. Phasellus non tortor nulla. Sed vestibulum vel arcu tincidunt blandit. Integer ac molestie velit, ac sagittis ligula. Aenean suscipit hendrerit purus, eu molestie metus.
          Quisque rutrum interdum felis eu porttitor. Nulla auctor mi quis erat vulputate tempor in aliquet erat. Donec a metus ac justo pretium scelerisque. Vivamus semper lobortis quam. Phasellus placerat erat quam, nec faucibus eros maximus id. Curabitur cursus nisi vitae iaculis faucibus. Vestibulum ut lorem vel enim ultrices tincidunt. Curabitur a imperdiet ante. Cras mollis odio lectus, ac dictum mauris pellentesque a. Integer convallis venenatis risus sed tincidunt. Donec sollicitudin tincidunt egestas. In posuere diam metus, eget lobortis eros ultricies ut. Mauris ut luctus magna. Sed id arcu nisi.</>
        </div>
        <MessageField />
      </Sidebar.Pusher>
    </Sidebar.Pushable>
  </div>;
}

export default connect(mapStateToProps, mapDispatchToProps)(Messages);