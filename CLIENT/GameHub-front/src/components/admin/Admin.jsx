import React from "react"
import { Link } from "react-router-dom"
import { Card, Button, Container, Row, Col } from "react-bootstrap";


const Admin = () => {
	return (
	

        <Container className="mt-5">
        <h2 className="text-center mb-4">Welcome to Admin Panel</h2>
        <Row className="justify-content-center">
          <Col md={6}>
            <Card className="mb-4">
              <Card.Body>
                <Card.Title>Manage Stations</Card.Title>
                <Card.Text>
                  View and manage gaming stations.
                </Card.Text>
                <Link to={"/existing-stations"}>
                  <Button variant="primary">Go to Stations</Button>
                </Link>
              </Card.Body>
            </Card>
          </Col>
          <Col md={6}>
            <Card className="mb-4">
              <Card.Body>
                <Card.Title>Manage Bookings</Card.Title>
                <Card.Text>
                  Manage bookings for gaming stations.
                </Card.Text>
                <Link to={"/existing-bookings"}>
                  <Button variant="primary">Go to Bookings</Button>
                </Link>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>



	)
}

export default Admin