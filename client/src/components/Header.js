import React from 'react'
import {Navbar, Nav, Container} from "react-bootstrap"
import {Link} from "react-router-dom"

const Header = () => {
  return (
    <Navbar className='bg-dark'>
        <Container fluid>
            <Nav className='me-auto'>
                <Nav.Link as={Link} to="/" className='text-white'>
                    Home
                </Nav.Link>
                <Nav.Link as={Link} to="/about" className='text-white'>
                    About
                </Nav.Link>
            </Nav>
        </Container>
    </Navbar>
  )
}

export default Header