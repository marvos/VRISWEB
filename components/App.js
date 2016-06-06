import React, {Component} from 'react';
import {render} from 'react-dom';
// import Dashboard from './Dashboard';
import MaterialComponent from './MaterialComponent';

import AgendaItem from './AgendaItem';
import AgendaList from './AgendaList';

import {cyan700, grey600, pinkA100, pinkA200, pinkA400, fullWhite,} from 'material-ui/styles/colors';
import AppBar from 'material-ui/AppBar';

import injectTapEventPlugin from 'react-tap-event-plugin';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {fade} from 'material-ui/utils/colorManipulator';

import Drawer from 'material-ui/Drawer';

import IconButton from 'material-ui/IconButton';

import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import CloseIcon from 'material-ui/svg-icons/navigation/close';

import MenuIcon from 'material-ui/svg-icons/navigation/menu';
// import spacing from '../spacing';
// import spacing from '../spacing';
import typography from './typography';
// import agendaItemsListData from './vrisresponse.js';

import NavigationClose from 'material-ui/svg-icons/navigation/close';
// Needed for onTouchTap
injectTapEventPlugin();

const styles = {
    bar: {
        background: '#000',
        // textAlign: 'center',
        color:'#fff',
    },
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
    },
    gridList: {

        height: 450,
        overflowY: 'auto',
        marginBottom: 24,
    },
    gridTyleLeft: {
        display: 'inline-block',
        width: '66%',
        textAlign:'center',
        verticalAlign: 'top',
    },
    gridTyleRight: {
        display: 'inline-block',
        width: '33%',
        minWidth: '300px',
        height:'100%',
        overflowY:'auto',

    },
};
const muiTheme = getMuiTheme({
    typography: typography,
    fontFamily: 'FuturaPT-Book',
    palette: {

        // primary1Color: cyan700,
        // primary2Color: cyan700,
        // primary3Color: grey600,
        // accent1Color: pinkA200,
        // accent2Color: pinkA400,
        // accent3Color: pinkA100,
        // textColor: fullWhite,
        // alternateTextColor: '#303030',
        // canvasColor: '#303030',
        // borderColor: fade(fullWhite, 0.3),
        // disabledColor: fade(fullWhite, 0.3),
        // pickerHeaderColor: fade(fullWhite, 0.12),
        // clockCircleColor: fade(fullWhite, 0.12),
    },
    appBar: {
        height: 50
    },
});

export default class App extends Component {

    handleClick(e) {
        console.log("click", e);
    }

    handleTouchTap(e) {
        console.log("touchTap", e);
    }

    constructor(props) {
        super(props);
        this.state = {
            open: false,
            agendaItemsListData:{},
            agendaItem:          {
                "available": true,
                "startUtc": "2016-07-12T09:00:00",
                "endUtc": "2016-07-28T09:00:00"
            },
        };


    }
    componentWillMount(){


        $.ajax({
            type: 'GET',
            url: 'http://vris.azurewebsites.net/api/Room/AMS%205a',
            async: false,
            contentType: "text/plain",
            success: (json)  => {
                console.log('JSON = '+json);
                // agendaItems =
                this.state.agendaItemsListData = json;
                this.setState({agendaItemsListData: this.state.agendaItemsListData});
            },
            error: (e)  => {

            }
        });

    }
    updateAgendaItems = (items) => {

        this.state.agendaItemsListData = items;
        this.setState({agendaItemsListData: this.state.agendaItemsListData});
    }
    
    setMainAgendaItem = (item) => {
        
        this.setState({agendaItem: item});
    }
    handleToggle = () => {
        this.setState({open: !this.state.open});
    }

    render() {
        return (
            <div id='App'>
                <MuiThemeProvider muiTheme={muiTheme}>
                    <div style={styles.container}>
                        <AppBar className="appbar" style={styles.bar}
                            title="vergaderZaal AMS A"
                            iconElementLeft={<IconButton onTouchTap={this.handleToggle}><MenuIcon /></IconButton>}
                            iconElementRight={
                              <IconMenu
                                iconButtonElement={
                                  <IconButton><MoreVertIcon /></IconButton>
                                }
                                targetOrigin={{horizontal: 'right', vertical: 'top'}}
                                anchorOrigin={{horizontal: 'right', vertical: 'top'}}
                              >
                                <MenuItem primaryText="Refresh" />
                                <MenuItem primaryText="Help" />
                                <MenuItem primaryText="Sign out" />
                              </IconMenu>}
                        ></AppBar>

                        <Drawer open={this.state.open}>
                            <IconButton onTouchTap={this.handleToggle}><CloseIcon/></IconButton>
                            <MenuItem>Room 5A</MenuItem>
                            <MenuItem>Room 5B</MenuItem>
                            <MenuItem>Room Ground Floor</MenuItem>
                            <MenuItem>AMAR2000</MenuItem>
                        </Drawer>

                        <div className="flex-container">
                            <div className="flex-item">
                                <AgendaItem item={this.state.agendaItem}  agendaItemsListData={this.state.agendaItemsListData} updateAgendaItems={this.updateAgendaItems}/>
                            </div>
                            <div  className="flex-item">
                                <AgendaList setMainAgendaItem={this.setMainAgendaItem} agendaItemsListData={this.state.agendaItemsListData}/>
                            </div>
                        </div>

                    </div>


                </MuiThemeProvider>


            </div>
    )
    }
    }

    render(
        <App />
    , document.getElementById('main-container'));
