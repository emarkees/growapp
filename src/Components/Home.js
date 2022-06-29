import React from 'react';
import { Link } from 'react-router-dom';
import {Button, Container, Row, Col} from 'reactstrap'
import './Home.css'





function Home() {
  return (
    
    <Container> 
        <Row className="home-1">
            <Col md={1} className="home-2">
              <div className="home_2_1">
                <h2>
                  <span >Best</span>  <span className="home-3"> Wash & Iron service </span> <br /> in your doorstep
                </h2>
                </div>
                <p className="home-4">
                    GrowApp is the first Online Laundry Platform in DIU with the latest technology in washing, dry cleaning and laundry. Our services combine our expertise and experience acquired over a period of time to provide you with clean laundry in the shortest possible turnaround time.
                </p>
				<Link to="/services">
					<Button className="Home_4_2" color="danger">
						View Services
					</Button>
				</Link>
            </Col>
            
        </Row>

        
    
    </Container>
  )
}

export default Home