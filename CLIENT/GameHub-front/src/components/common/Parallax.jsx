import React from "react"
import { Container } from "react-bootstrap"

const Parallax = () => {
	return (
        <div className="gaming-parallax mb-5">
        <Container className="text-center px-5 py-5 justify-content-center">
          <div className="animated-texts bounceIn">
            <h1>
              Level Up Your Gaming Experience at <span className="hotel-color">GameHub</span>
            </h1>
            <h3>Book your gaming station for ultimate fun!</h3>
          </div>
        </Container>
      </div>
	)
}

export default Parallax