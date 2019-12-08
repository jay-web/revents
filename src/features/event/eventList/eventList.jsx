import React , {Component, Fragment } from 'react';
import EventListItem from './eventListItem';

class EventList extends Component  {
    render(){
        return (
            <Fragment>
                {this.props.events.map((eve =>(
                    <EventListItem key={eve.id} events={eve}/>
                ) 
            ))}
                   
                    
            </Fragment>
        );
    }
}

export default EventList;