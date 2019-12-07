import React, { Component } from 'react';
import { Grid } from 'semantic-ui-react';
import EventList from '../eventList/eventList';
import EventForm from '../../eventForm/eventForm';



class EventDashboard extends Component {
    render(){
        return (
            <Grid>
                <Grid.Column width={10}>
                    <EventList />
                </Grid.Column>
                <Grid.Column width={6}>
                    <EventForm />
                </Grid.Column>
            </Grid>
        );
    }
}

export default EventDashboard;