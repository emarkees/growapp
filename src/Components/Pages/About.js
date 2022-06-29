
import React from 'react'
import './About.css'
import { Container, Row, Col } from 'reactstrap'





function About() {
  return (
    <Container>
		<Row className="abt_1">
			<div className="about">
				<h2 className="about-1">About Us</h2>
			</div>
			<Col md={6} className="about-2">
				<img src='../Pages/images/grow.svg' alt="Logo"/>
			</Col>
				<Col md={7}>
					<p className="about-3">
						Grow Tech is the first Online Laundry Platform in DIU with the latest technology in washing, dry cleaning and laundry. Our services combine our expertise and experience acquired over a period of time to provide you with clean laundry in the shortest possible turnaround time. It has partnered up with the top laundry experts of the country and provides you with a free Pick-up and Delivery for your dirty laundry. With our Website, Mobile App or Hotline Number, you	can just schedule an order and we will take it from there!
					</p>
				</Col>
		</Row>
	</Container>
      
  )
}

export default About

