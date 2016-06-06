import React, {Component} from 'react';
import AppBar from 'material-ui/AppBar';
import RoomA from './RoomA';
import RoomB from './RoomB';


export default class Dashboard extends Component {
  render() {
    return (
      <div id='Dashboard'>

        Dashboard
        <RoomB />
        <RoomA />
      </div>
    )
  }
}


