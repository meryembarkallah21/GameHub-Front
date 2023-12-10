import React from "react"
import { Container, Row, Col, Card } from "react-bootstrap"
import Header from "./Header"
import { FaGamepad, FaUsers, FaWifi, FaUtensils, FaParking, FaHeadset, FaTv } from "react-icons/fa";


const GamehubService = () => {
	return (
		<>
      <div className="mb-2">
        <Header title={"What we have ♥"} />

        <Row className="mt-4">
          <h4 className="text-center">
            Services at <span className="hotel-color">GameHub HQ</span> Station
            <span className="gap-2">
              <FaGamepad className="ml-5" /> Ultimate Gaming Experience
            </span>
          </h4>
        </Row>
        <hr />

        <Row xs={1} md={2} lg={3} className="g-4 mt-2">
          <Col>
            <Card>
              <Card.Body>
                <Card.Title className="hotel-color">
                  <FaWifi /> High-Speed Internet
                </Card.Title>
                <Card.Text>Stay connected with fast internet access for uninterrupted gaming.</Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card>
              <Card.Body>
                <Card.Title className="hotel-color">
                  <FaUtensils /> Snacks & Drinks
                </Card.Title>
                <Card.Text>Enjoy a variety of snacks and drinks while gaming.</Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card>
              <Card.Body>
                <Card.Title className="hotel-color">
                  <FaHeadset /> Gaming Accessories
                </Card.Title>
                <Card.Text>Accessories to enhance your gaming experience available on demand.</Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card>
              <Card.Body>
                <Card.Title className="hotel-color">
                  <FaUsers /> Multiplayer Setups
                </Card.Title>
                <Card.Text>Connect and play with friends in our dedicated multiplayer zones.</Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card>
              <Card.Body>
                <Card.Title className="hotel-color">
                  <FaTv /> Large Screens
                </Card.Title>
                <Card.Text>Enjoy gaming on big screens for immersive experiences.</Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card>
              <Card.Body>
                <Card.Title className="hotel-color">
                  <FaParking /> Parking
                </Card.Title>
                <Card.Text>Convenient parking available for hassle-free arrivals.</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </div>
      <hr />
    </>
	)
}

export default GamehubService