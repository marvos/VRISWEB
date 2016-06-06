import React, {Component} from 'react';
import AgendaListItem from './AgendaListItem';
import {List, ListItem, MakeSelectable} from 'material-ui/List';
// import StarBorder from 'material-ui/svg-icons/navigation/close';
import Avatar from 'material-ui/Avatar';
import IconButton from 'material-ui/IconButton';
import AccountCircle from 'material-ui/svg-icons/action/account-circle';
import {pinkA200, transparent} from 'material-ui/styles/colors';


export default class AgendaList extends Component {
    renderAgenda = (key) => {
        console.log(this.props.agendaItemsListData[key] )
        return (
            <AgendaListItem  key={key} setMainAgendaItem={this.props.setMainAgendaItem} item={this.props.agendaItemsListData[key] } />

        )
    }
    render() {
        return (
            <List className="agendalist">
                {Object.keys(this.props.agendaItemsListData).map( this.renderAgenda)}
            </List>
        )
    }
}


