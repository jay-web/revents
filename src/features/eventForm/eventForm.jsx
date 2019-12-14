import React, {Component} from 'react';
import { Segment, Form, Button } from 'semantic-ui-react';

class EventForm extends Component {

  state = {
    title: "",
    date:"",
    city:"",
    venue:"",
    hostedBy:""
  }

  handleOnSubmit = (evt) => {
    evt.preventDefault();
    console.log(this.state);
    this.props.createNewEvent(this.state);
  }

  handleInputChanges = event => {
    this.setState({
      [event.target.name] : event.target.value    /* [bracket] need to notice in naming side */
    });
  }


    render(){
      const {cancelForm} = this.props;
      const {title, date, city, venue, hostedBy} = this.state;

        return (
                  <Segment>
                    <Form onSubmit={this.handleOnSubmit}>
                      <Form.Field>
                        <label>Event Title</label>
                        <input 
                        name = 'title'
                        onChange={this.handleInputChanges}
                        value={title}
                        placeholder="Title" />
                      </Form.Field>
                      <Form.Field>
                          <label>Event Date</label>
                          <input 
                          name="date"
                          onChange={this.handleInputChanges}
                          value={date}
                          type="date" 
                          placeholder="Event Date" />
                        </Form.Field>
                        <Form.Field>
                        <label>City</label>
                        <input 
                        name="city"
                        onChange={this.handleInputChanges}
                        value={city}
                        placeholder="City event is taking place" />
                      </Form.Field>
                      <Form.Field>
                        <label>Venue</label>
                        <input 
                        name="venue"
                        onChange={this.handleInputChanges}
                        value={venue}
                        placeholder="Enter the Venue of the event" />
                      </Form.Field>
                      <Form.Field>
                        <label>Hosted By</label>
                        <input 
                        name="hostedBy"
                        onChange={this.handleInputChanges}
                        value={hostedBy}
                        placeholder="Enter the name of person hosting" />
                      </Form.Field>
                      <Button  
                      positive 
                      
                      type="submit">
                        Submit
                      </Button>
                      <Button onClick={cancelForm} type="button">Cancel</Button>
                    </Form>
                  </Segment>
        )
    }
}

export default EventForm;