import React, {Component} from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import moment from 'moment';
import {List, ListItem} from 'material-ui/List';


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
export default class AgendaItem extends Component {

    renderParticipants(){
        if(this.props.item.appointmentAttendees) {
            return(
                <div className="attendees">
                    {Object.keys(this.props.item.appointmentAttendees).map(this.renderParticipant)}
                </div>
            )
        }
    }
    renderParticipant = (key) => {

        if(key > 0){
            return(
                <div key={key}>
                    {this.props.item.appointmentAttendees[key].name} <br/>
                </div>
            )
        }
    }



    renderOrganizer() {

        if(this.props.item.appointmentAttendees){
        return(
            <div className="organizer">
                {this.props.item.appointmentAttendees[0].name} <br/>

            </div>
        )}
    }
    bookThisAgendaItem = () => {
        //
        // var datatoSubmit = JSON.stringify({
        //     "room": "AMS 5A",
        //     "startUtc": "2016-06-04T09:00:00Z",
        //     "endUtc": "2016-06-04T10:00:00Z",
        // });

         var datatoSubmit = this.props.item;
         datatoSubmit.room = 'AMS 5A';

        console.log(datatoSubmit);




        $.ajax({

            url: 'http://vris.azurewebsites.net/api/Room/AMS%205a',
            type : 'POST',
            dataType : "JSON",
            contentType: "application/json",
            // crossDomain: true,
            data: JSON.stringify(datatoSubmit)
        })
            .success( (data, status, xhr) => {
                console.log('data = '+data);
                this.props.updateAgendaItems(data);

            })
            .done(function(data) {
            })
            .fail(function(){
                // Failure.

            })
            .always(function(data) {

            });


    }
    render() {

        // this.participants = [];
        // if(this.props.item.appointmentAttendees ) {
        //     {
        //         Object.keys(this.props.item.appointmentAttendees).map((key) => {
        //
        //             this.participants.push({
        //                 img: `https://farm${picdetails.farm}.staticflickr.com/${picdetails.server}/${picdetails.id}_${picdetails.secret}_s.jpg`,
        //                 url: details.flickr[key].id
        //             });
        //         })
        //     }
        // }

        if( !this.props.item.available ) {
            return (
                <div className="activemeeting">
                    <div className="info">
                        <div>vergaderZaal AMS A</div>
                        <div>{moment(new Date()).format( "HH:mm")}</div>
                        <div>{moment(this.props.item.startUtc).format( "DD-MM-YYYY")}</div>
                    </div>
                    <div className="brandlogo"><img src={this.props.item.organizationBranding.logoUrl}/></div>
                    <h1>{this.props.item.subject}</h1>
                    <h2>{this.props.item.organizationBranding.name}</h2>

                    <div className="time">{ moment(this.props.item.startUtc).format( "HH:mm") } - {moment(this.props.item.endUtc).format( "HH:mm")}</div>
                        {this.renderOrganizer()}
                        {this.renderParticipants()}
                </div>
                
            )
        }
        else {
            // console.log(this.props.item);
            return (
                <div className="activemeeting">
                    <div className="info">
                        <div>vergaderZaal AMS A</div>
                        <div>{moment(new Date()).format( "HH:mm")}</div>
                        <div>{moment(this.props.item.startUtc).format( "DD-MM-YYYY")}</div>
                    </div>
                    <h1>Room available</h1>
                    <div className="timesmall">{ moment(this.props.item.startUtc).format( "HH:mm") } - {moment(this.props.item.endUtc).format( "HH:mm")}</div>
                    <br/><br/>
                    <RaisedButton
                        label="15m"
                        primary={true}
                        onTouchTap={this.props.bookNow}
                    />
                    &nbsp;
                    <RaisedButton
                        label="30m"
                        primary={true}
                        onTouchTap={this.props.bookNow}
                    />
                    &nbsp;
                    <RaisedButton
                        label="45m"
                        primary={true}
                        onTouchTap={this.props.bookNow}
                    />
                    &nbsp;
                    <RaisedButton
                        label="1h"
                        secondary={true}
                        onTouchTap={this.props.bookNow}
                    />
                    <br/><br/><br/><br/>
                    <RaisedButton
                        labelStyle={styles.buttonAvailable}
                        label="Book now"
                        backgroundColor="#3CB500"
                        secondary={false}
                        onTouchTap={this.bookThisAgendaItem}
                    />
                </div>
            )
        }
    }
}


