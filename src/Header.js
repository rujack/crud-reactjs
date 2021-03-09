import React from 'react'
import { Navbar, Nav } from 'react-bootstrap'

export const Header = () => {
    return (
        <div>
          <Navbar expand="xl" bg="dark" variant="dark">
            <Navbar.Brand href="#home"><h4>Rujack</h4></Navbar.Brand>
            <Nav defaultActiveKey="#input" as="ul">
                <Nav.Item as="li">
                    <Nav.Link href="#home">Home</Nav.Link>
                </Nav.Item>
                <Nav.Item as="li">
                    <Nav.Link eventKey="#input">Input</Nav.Link>
                </Nav.Item>
                <Nav.Item as="li">
                    <Nav.Link eventKey="#eksekusi">Eksekusi</Nav.Link>
                </Nav.Item>
            </Nav>
        </Navbar>
        </div>
    )
}