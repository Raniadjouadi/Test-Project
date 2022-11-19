import React from 'react';
import {Card ,Button} from 'react-bootstrap';

const WelcomeStyle={
    flex:'0 0 100%',
    maxWidth: '100%',
  };

const Welcome = () => {
    return (
        <Card style={WelcomeStyle} >
          <Card.Img variant="top" style={{maxHeight:'30rem'}} src='https://plus.unsplash.com/premium_photo-1661753494922-7e9497b3114d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80'/>
          <Card.Body>
            <Card.Title>Welcome to Images Gallery</Card.Title>
            <Card.Text>
            This is simple application that retrieves photos using Unsplash API.
            In order to start enter any search term in the input field.
            </Card.Text>
            <Button variant='primary' href="https://unsplash.com" target='_blank'>Learn More</Button>
          </Card.Body>
        </Card>
      );
};

export default Welcome ;






