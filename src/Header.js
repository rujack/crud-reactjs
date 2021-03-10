import React from 'react'
import { Navbar, Nav } from 'react-bootstrap'
import {Link} from 'react-router-dom'


export const Header = ({resetValid}) => {

    return (
        <div>
          <Navbar expand="xl" bg="dark" variant="dark">
            <Link to="/"><Navbar.Brand><h4>Rujack</h4></Navbar.Brand></Link>
            <Nav defaultActiveKey="/" as="ul">
                <Nav.Item as="li">
                    <Link to="/"><Nav.Link href="/">Home</Nav.Link></Link>
                </Nav.Item>
                <Nav.Item as="li">
                    <Link to="/input"><Nav.Link href="/input" onClick={(isValid)=>resetValid()}>Input</Nav.Link></Link>
                </Nav.Item>
                <Nav.Item as="li">
                    <Link to="/eksekusi"><Nav.Link href="/eksekusi" onClick={(isValid)=>resetValid()}>Eksekusi</Nav.Link></Link>
                </Nav.Item>
            </Nav>
        </Navbar>
        </div>
   
    )
}