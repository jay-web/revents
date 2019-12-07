import React, {Fragment} from 'react';
import EventDashboard from '../features/event/eventDashboard/eventDashboard';
import NavBar from '../features/nav/navBar/navBar';
import { Container } from 'semantic-ui-react';

function App() {
  return (
    <Fragment>
     <NavBar />
     <Container className="main">
     <EventDashboard />
     </Container>
     
    </Fragment>
  );
}

export default App;
