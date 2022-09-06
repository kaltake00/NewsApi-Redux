import React from 'react'


import Container from 'react-bootstrap/Container';

import { Navbar, Nav } from 'react-bootstrap'

function Header() {

  return (
    <>
        <Navbar  bg="dark" variant='dark' className="">
          <Container>
            <Navbar.Brand href="/">News Portal</Navbar.Brand>
            <Nav>
              <Nav.Item>
                <Nav.Link href="/">Home</Nav.Link>
              </Nav.Item>
            </Nav>
          </Container>
        </Navbar>
        
    
    </>
  )
}

export default Header