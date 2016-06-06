import React, {Component} from 'react';

import RaisedButton from 'material-ui/RaisedButton';

import Dialog from 'material-ui/Dialog';
import {deepOrange500} from 'material-ui/styles/colors';
import FlatButton from 'material-ui/FlatButton'
import moment from 'moment';
import {ListItem} from 'material-ui/List';

import IconButton from 'material-ui/IconButton';
import AccountCircle from 'material-ui/svg-icons/action/account-circle';

const styles = {
    listitemAvailable: {
        background: 'rgba(155, 217, 124, 0.35)',
        // textAlign: 'center',
        color:'#fff',

    },
    buttonAvailable:{
        // background: '#3CB500',
        // textAlign: 'center',
        color:'#fff',
        // marginLeft:'90px',
    }

};
export default class AgendaListItem extends Component {

    constructor(props, context) {
        super(props, context);

        this.handleRequestClose = this.handleRequestClose.bind(this);
        this.handleTouchTap = this.handleTouchTap.bind(this);

        this.state = {
            open: false,
        };
    }


    handleRequestClose() {
        this.setState({
            open: false,
        });
    }

    handleTouchTap() {
        this.setState({
            open: true,
        });
    }

    render() {
        const standardActions = (
            <FlatButton
                label="Ok"
                primary={false}
                onTouchTap={this.handleRequestClose}
            />
        );
        if (this.props.item.available) {
            return (
                <ListItem style={styles.listitemAvailable}

                    // leftIcon={<IconButton><ActionGrade color={pinkA200} /></IconButton>}
                    // rightIcon={<IconButton><AccountCircle color={'#3EB9C1'} /></IconButton>}
                    // rightAvatar={<Avatar src={this.props.agendaItemsListData[key].avatarImage}


                >
                <Dialog
                    open={this.state.open}
                    title="Book the meeting room"
                    actions={standardActions}
                    onRequestClose={this.handleRequestClose}
                >
                    <h1>TODO</h1>
                    <h2></h2>
                </Dialog>
                    <div className="listitemavailable">
                    <RaisedButton labelStyle={styles.buttonAvailable}
                        label="Book now"
                         backgroundColor="#3CB500"

                        secondary={false}

                                  onTouchTap={()=>this.props.setMainAgendaItem(this.props.item)}
                    />

                        <div className="timestart">{moment(this.props.item.startUtc).format( "HH:mm")}</div>
                        <div className="timeend">{moment(this.props.item.endUtc).format( "HH:mm")}</div>
                    </div>
            </ListItem>

            )
        }
        else {
            return (
                <ListItem
                   
                    // leftIcon={<IconButton><ActionGrade color={pinkA200} /></IconButton>}
                    // rightIcon={<IconButton><AccountCircle color={'#3EB9C1'} /></IconButton>}
                    // rightAvatar={<Avatar src={this.props.agendaItemsListData[key].avatarImage}


                >
                    <div onTouchTap={()=>this.props.setMainAgendaItem(this.props.item)}  className="listitem">
                        <div className="subject">{this.props.item.subject}</div>
                        <div className="timestart">{moment(this.props.item.startUtc).format( "HH:mm")}</div>
                        <div className="timeend">{moment(this.props.item.endUtc).format( "HH:mm")}</div>
                    </div>
                </ListItem>
            )
        }
    }
}


