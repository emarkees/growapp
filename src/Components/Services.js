import React from 'react'
import './Services.css'
import { Link } from 'react-router-dom';
import {Button, Row, Container, Col} from 'reactstrap'


function Services() {
  return (
    <Container>

        <Row className="card">
        
        <div className='services'> <h1>Our services</h1> </div>
      <div className="card_services">
        <div className="card_content">
          <span className="card_span"> Wash & Iron </span> 
          <p>All your regular wear garments will be wash, steam ironed and neatly packed for delivery.
          </p>
          <Link to= '/Services'>
            <Button className="card_button" color="danger">
             Select Services
            </Button>
            </Link>
          
        </div>
      </div>
      <div className="card_services2">
        <div className="card_content2">
          <span className="card_span"> Wash & Iron </span> 
          <p>All your regular wear garments will be wash, steam ironed and neatly packed for delivery.
          <Link to= '/Services'>
            <Button className="card_button" color="danger">
             Select Services
            </Button>
            </Link>
          </p>
        </div>
      </div>
      <div className="card_services1">
        <div className="card_content1">
          <span className="card_span"> Subscription Based </span> 
          <p>All your regular wear garments will bewash, steam ironed and neatly packed for delivery.
          <Link to= '/Services'>
            <Button className="card_button" color="danger">
             Select Services
            </Button>
            </Link>
          </p>
        </div>
        </div>
     
     
      </Row>
      <Row className="card1">
        
      <br></br>
      <div className="card_services">
        <div className="card_content">
          <span className="card_span"> Dry Cleaning </span> 
          <p>All your regular wear garments will be wash, steam ironed and neatly packed for delivery.
          </p>
          <Link to= '/Services'>
            <Button className="card_button" color="danger">
             Select Services
            </Button>
            </Link>
          
        </div>
      </div>
      <div className="card_services2">
        <div className="card_content2">
          <span className="card_span"> Emergency Service </span> 
          <p>All your regular wear garments will be wash, steam ironed and neatly packed for delivery.
          <Link to= '/Services'>
            <Button className="card_button" color="danger">
             Select Services
            </Button>
            </Link>
          </p>
        </div>
      </div>
      <div className="card_services1">
        <div className="card_content1">
          <span className="card_span"> Subscription Based </span> 
          <p>All your regular wear garments will bewash, steam ironed and neatly packed for delivery.
          <Link to= '/Services'>
            <Button className="card_button" color="danger">
             Select Services
            </Button>
            </Link>
          </p>
        </div>
        </div>
     
     
      </Row>
    </Container>
  )
}

export default Services