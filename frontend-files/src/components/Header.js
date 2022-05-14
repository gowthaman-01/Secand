import React from 'react'
import { LinkContainer } from 'react-router-bootstrap'
import { Navbar, Nav, Container } from 'react-bootstrap'

const Header = () => {
  return (
    <header>
      <Navbar bg="info" variant="dark" expand="lg" className='py-3'>
        <Container>
          <LinkContainer to='/'>
            <Navbar.Brand>Secand</Navbar.Brand>
          </LinkContainer>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <LinkContainer to='/cart'>
                <Nav.Link><i className='fas fa-shopping-cart nav-button'></i> Cart</Nav.Link>
              </LinkContainer>
              <LinkContainer to='/login'>
                <Nav.Link><i className='fas fa-user nav-button'></i> Sign In</Nav.Link>
              </LinkContainer>
            </Nav>
          </Navbar.Collapse>  
        </Container>
      </Navbar>
    </header>
  )
}

export { Header }