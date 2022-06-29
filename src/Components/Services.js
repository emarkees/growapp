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
          <span className="card_span"> Wash & Fold </span> 
          <p>Just in case you choose not to use our steam ironing services we will wash and fold them for you.

          <Link to= '/Services'>
            <Button className="card_button2" color="danger">
             Select Services
            </Button>
            </Link>
          </p>
        </div>
      </div>
      <div className="card_services1">
        <div className="card_content1">
          <span className="card_span"> Iron & Fold </span> 
          <p>Get back your dirty clothes. Your clothes we will ironed and pressed to look the best for you.

          <Link to= '/Services'>
            <Button className="card_button2" color="danger">
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
          <p>All your sensitive and special garments will be individually treated for any stains and dry cleaned.

          </p>
          <Link to= '/Services'>
            <Button className="card_button3" color="danger">
             Select Services
            </Button>
            </Link>
          
        </div>
      </div>
      <div className="card_services4">
        <div className="card_content2">
          <span className="card_span"> Emergency Service </span> 
          <p>You can use our emergency service to receive services easily and quickly in our machines using very safe.
          <Link to= '/Services'>
            <Button className="card_button4" color="danger">
             Select Services
            </Button>
            </Link>
          </p>
        </div>
      </div>
      <div className="card_services5">
        <div className="card_content1">
          <span className="card_span"> Subscription Based </span> 
          <p>You can get Best Price, Quality Service, Doorstep Pickup & Delivery Service, Hygiene & Fresh Laundry.

          <Link to= '/Services'>
            <Button className="card_button5" color="danger">
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