import React, {Component} from 'react';
import { Segment, Item, Icon, List, Button } from 'semantic-ui-react';
import EventListAttendee from './eventListAttendee';

class EventListItem extends Component {
    render(){
        return (
            <div>
                     <Segment.Group className="single-segments">
                        <Segment>
                          <Item.Group>
                            <Item>
                              <Item.Image size="tiny" circular src={this.props.events.hostPhotoURL} />
                              <Item.Content>
                                <Item.Header as="a">{this.props.events.title}</Item.Header>
                                <Item.Description>
                                  Hosted by <a>{this.props.events.hostedBy}</a>
                                </Item.Description>
                              </Item.Content>
                            </Item>
                          </Item.Group>
                        </Segment>
                        <Segment>
                          <span>
                            <Icon name="clock" /> {this.props.events.date} |
                            <Icon name="marker" /> {this.props.events.venue}
                          </span>
                        </Segment>
                        <Segment secondary>
                          <List horizontal>
                            {this.props.events.attendees.map(attendee => (
                              <EventListAttendee key={attendee.id} attendeeList={attendee}/> 
                            ))}
                               {/*  this is component */}
                            
                          </List>
                        </Segment>
                        <Segment clearing>
                          {this.props.events.description}
                          <Button as="a" color="teal" floated="right" content="View" />
                        </Segment>
                      </Segment.Group>
            </div>
        )
    }
}

export default EventListItem;