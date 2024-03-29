import React, { Component } from 'react';
import { Grid, Button } from 'semantic-ui-react';
import EventList from '../eventList/eventList';
import EventForm from '../../eventForm/eventForm';
import cuid from 'cuid';

const eventsData = [
  {
    id: '1',
    title: 'Trip to Tower of London',
    date: '2018-03-27T11:00:00+00:00',
    category: 'culture',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sollicitudin ligula eu leo tincidunt, quis scelerisque magna dapibus. Sed eget ipsum vel arcu vehicula ullamcorper.',
    city: 'London, UK',
    venue: "Tower of London, St Katharine's & Wapping, London",
    hostedBy: 'Bob',
    hostPhotoURL: 'https://randomuser.me/api/portraits/men/20.jpg',
    attendees: [
      {
        id: 'a',
        name: 'Bob',
        photoURL: 'https://randomuser.me/api/portraits/men/20.jpg'
      },
      {
        id: 'b',
        name: 'Tom',
        photoURL: 'https://randomuser.me/api/portraits/men/22.jpg'
      }
    ]
  },
  {
    id: '2',
    title: 'Trip to Punch and Judy Pub',
    date: '2018-03-28T14:00:00+00:00',
    category: 'drinks',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sollicitudin ligula eu leo tincidunt, quis scelerisque magna dapibus. Sed eget ipsum vel arcu vehicula ullamcorper.',
    city: 'London, UK',
    venue: 'Punch & Judy, Henrietta Street, London, UK',
    hostedBy: 'Tom',
    hostPhotoURL: 'https://randomuser.me/api/portraits/men/22.jpg',
    attendees: [
      {
        id: 'b',
        name: 'Tom',
        photoURL: 'https://randomuser.me/api/portraits/men/22.jpg'
      },
      {
        id: 'a',
        name: 'Bob',
        photoURL: 'https://randomuser.me/api/portraits/men/20.jpg'
      }
    ]
  }
]


class EventDashboard extends Component {
    state = {
        events: eventsData,
        isOpen: false
    }

    handleFormToggle = () => {
      this.setState((prevState) => ({
          isOpen : !prevState.isOpen
      }))
      
    }

    handleCreateEvent = (newEvent) =>  {
        newEvent.id = cuid();                 /* create unique id for new event */
        newEvent.hostPhotoURL = "/assets/user.png";  /* providing static photo for new event */

        this.setState(({events}) => ({
          events: [...events, newEvent],    /* using js spread operator to add new event */
          isOpen: false,
        }))
        
    }
    render(){
        const {events, isOpen } = this.state;

        return (
            <Grid>
                <Grid.Column width={10}>
                    <EventList events={events}/>     {/* coming from line 64 */}
                </Grid.Column>
                <Grid.Column width={6}>
                    <Button onClick={this.handleFormToggle} color="teal" content="Create Event"/>
                    {isOpen && <EventForm 
                    createNewEvent={this.handleCreateEvent}
                    cancelForm={this.handleFormToggle} /> }  {/* will display as per isopen property */}
                    
                </Grid.Column>
            </Grid>
        );
    }
}

export default EventDashboard;