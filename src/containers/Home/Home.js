import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Dimmer, Loader, Sidebar, Segment, Menu, Icon, Header, Image, SidebarPusher } from 'semantic-ui-react'

import { myChats, changeHomeView } from './HomeActions';
import { changeAppView } from '../App/AppActions';
import './Home.css';
import AddressBar from '../../components/AddressBar';
import CreateButton from '../../components/CreateButton';
import MessageField from '../../components/MessageField';

const mapStateToProps = (state) => {
  return {
    chats: state.home.chats,
    isPending: state.home.isPending,
    errors: state.home.errors,
    view: state.home.view
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    myChats: (token) => dispatch(myChats(token)),
    changeAppView: (view) => dispatch(changeAppView(view)),
    changeHomeView: (view) => dispatch(changeHomeView(view))
  }
}

class Home extends Component {
  async componentDidMount() {
    const { myChats, changeAppView } = this.props;
    const token = localStorage.getItem('token');
    await myChats(token);
    if(this.props.errors.length) {
      changeAppView('login');
    }
  }

  render() {
    const { isPending, view, changeHomeView } = this.props;
    return (
      <>
        <AddressBar />
        <main>
          <Dimmer inverted active={isPending}>
            <Loader>Waiting for server response...</Loader>
          </Dimmer>
          <content>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras ultricies risus eget convallis pharetra. Interdum et malesuada fames ac ante ipsum primis in faucibus. Ut a vulputate dolor, vel pulvinar felis. Nam scelerisque justo vel arcu tempor auctor. Proin ut nibh ac turpis congue mattis vitae sit amet leo. Nulla gravida cursus dolor. Duis quis arcu venenatis, interdum magna at, convallis ante. Nullam sit amet tortor non orci consectetur condimentum.
            Duis ornare convallis cursus. Pellentesque vel erat in neque suscipit hendrerit. Nunc mi justo, dignissim ultrices felis et, molestie tristique ante. Vivamus vel mi orci. Duis a orci bibendum, gravida tellus vitae, scelerisque felis. Pellentesque mattis nibh in condimentum consectetur. Donec consectetur, est vitae iaculis commodo, mi augue pulvinar mi, sit amet pharetra erat metus et diam. Cras gravida sapien at rutrum tempus. Pellentesque consectetur diam nec libero congue, non fermentum ligula fermentum. Ut porta at lorem ut cursus. In hac habitasse platea dictumst. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer consequat sem id nibh porta sodales. Fusce turpis tellus, tristique a ipsum eget, consectetur vulputate libero.
            Proin eget augue mollis, auctor nisi non, vulputate leo. Morbi sit amet ultricies eros. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Proin a tellus et lectus facilisis pretium id eget dui. Etiam ut tortor ac orci facilisis rhoncus eu non sem. Nullam ut consectetur nunc. Suspendisse quis dui vitae velit vulputate ullamcorper vitae id lectus. Nam egestas elit scelerisque arcu blandit, sed condimentum lacus venenatis. Vestibulum aliquet congue nunc et venenatis. Donec id ultricies ante. Quisque posuere at odio accumsan cursus. Morbi iaculis eleifend venenatis.
            Donec at ligula nulla. Mauris placerat consectetur erat ut ullamcorper. Nulla pellentesque tortor risus, id volutpat leo facilisis id. Donec turpis tortor, blandit sed felis et, dignissim luctus ipsum. Nam sagittis justo id porttitor vehicula. Curabitur venenatis risus nibh, cursus pellentesque enim consequat facilisis. Quisque congue, tortor vel lacinia molestie, justo nisi sollicitudin purus, nec placerat sapien eros et elit. Fusce ultrices eget ante malesuada vestibulum. Integer lobortis pellentesque ultrices. Ut ullamcorper pellentesque aliquam. Nunc scelerisque, risus vitae fermentum hendrerit, metus orci semper risus, sit amet rhoncus urna quam a ante. Duis molestie volutpat laoreet. Suspendisse vitae nunc posuere, laoreet risus eget, varius eros. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.
            Integer porta tortor neque, semper scelerisque nisi venenatis in. Vivamus pellentesque nibh tellus, sed consectetur ligula eleifend vitae. Maecenas id ultrices augue, sed tincidunt metus. Etiam pharetra lorem sed massa tempus facilisis. Nunc ut ullamcorper augue. Nunc lectus turpis, pretium id varius eget, sagittis eu urna. Sed at turpis in enim suscipit mattis. Mauris ultricies viverra ante, non mollis quam cursus nec. Maecenas volutpat ligula in arcu tristique, porttitor efficitur leo porttitor. Vivamus vulputate sodales massa quis euismod. Duis erat leo, viverra sed vulputate eget, fringilla nec nunc. Mauris tincidunt metus ut venenatis ultricies.
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras ultricies risus eget convallis pharetra. Interdum et malesuada fames ac ante ipsum primis in faucibus. Ut a vulputate dolor, vel pulvinar felis. Nam scelerisque justo vel arcu tempor auctor. Proin ut nibh ac turpis congue mattis vitae sit amet leo. Nulla gravida cursus dolor. Duis quis arcu venenatis, interdum magna at, convallis ante. Nullam sit amet tortor non orci consectetur condimentum.
            Duis ornare convallis cursus. Pellentesque vel erat in neque suscipit hendrerit. Nunc mi justo, dignissim ultrices felis et, molestie tristique ante. Vivamus vel mi orci. Duis a orci bibendum, gravida tellus vitae, scelerisque felis. Pellentesque mattis nibh in condimentum consectetur. Donec consectetur, est vitae iaculis commodo, mi augue pulvinar mi, sit amet pharetra erat metus et diam. Cras gravida sapien at rutrum tempus. Pellentesque consectetur diam nec libero congue, non fermentum ligula fermentum. Ut porta at lorem ut cursus. In hac habitasse platea dictumst. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer consequat sem id nibh porta sodales. Fusce turpis tellus, tristique a ipsum eget, consectetur vulputate libero.
            Proin eget augue mollis, auctor nisi non, vulputate leo. Morbi sit amet ultricies eros. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Proin a tellus et lectus facilisis pretium id eget dui. Etiam ut tortor ac orci facilisis rhoncus eu non sem. Nullam ut consectetur nunc. Suspendisse quis dui vitae velit vulputate ullamcorper vitae id lectus. Nam egestas elit scelerisque arcu blandit, sed condimentum lacus venenatis. Vestibulum aliquet congue nunc et venenatis. Donec id ultricies ante. Quisque posuere at odio accumsan cursus. Morbi iaculis eleifend venenatis.
            Donec at ligula nulla. Mauris placerat consectetur erat ut ullamcorper. Nulla pellentesque tortor risus, id volutpat leo facilisis id. Donec turpis tortor, blandit sed felis et, dignissim luctus ipsum. Nam sagittis justo id porttitor vehicula. Curabitur venenatis risus nibh, cursus pellentesque enim consequat facilisis. Quisque congue, tortor vel lacinia molestie, justo nisi sollicitudin purus, nec placerat sapien eros et elit. Fusce ultrices eget ante malesuada vestibulum. Integer lobortis pellentesque ultrices. Ut ullamcorper pellentesque aliquam. Nunc scelerisque, risus vitae fermentum hendrerit, metus orci semper risus, sit amet rhoncus urna quam a ante. Duis molestie volutpat laoreet. Suspendisse vitae nunc posuere, laoreet risus eget, varius eros. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.
            Integer porta tortor neque, semper scelerisque nisi venenatis in. Vivamus pellentesque nibh tellus, sed consectetur ligula eleifend vitae. Maecenas id ultrices augue, sed tincidunt metus. Etiam pharetra lorem sed massa tempus facilisis. Nunc ut ullamcorper augue. Nunc lectus turpis, pretium id varius eget, sagittis eu urna. Sed at turpis in enim suscipit mattis. Mauris ultricies viverra ante, non mollis quam cursus nec. Maecenas volutpat ligula in arcu tristique, porttitor efficitur leo porttitor. Vivamus vulputate sodales massa quis euismod. Duis erat leo, viverra sed vulputate eget, fringilla nec nunc. Mauris tincidunt metus ut venenatis ultricies.
          </content>
          <CreateButton active={true} />
        </main>
        <MessageField active={true} />
      </>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);