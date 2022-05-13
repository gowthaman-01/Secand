import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'

const Footer = () => {
  return (
    <footer>
      <Container>
        <Row>
          <Col className='text-center py-6 footer'>
            Copyright &copy; Secand
          </Col>
        </Row>
      </Container>
    </footer>
  )
}

export { Footer }