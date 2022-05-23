import React from "react";

import "./NavbarComp.css";
import { Navbar, Nav, NavDropdown, Container } from "react-bootstrap";
import logo from "./logo.png";
// import AboutComp from "./AboutComp";




function NavbarComp() {
  return (
    <>
      <Navbar className="nav-bar" expand="lg" style={{ position: 'fixed', top: '0', zIndex: '100', width: '100%', paddingTop: '0', paddingBottom: '0', marginLeft: '0' }}>
        <Container className="content" style={{ marginLeft: '20px'}}>
          <Navbar.Brand href="/">
            <img
              src={logo}
              width="50"
              height="50"
              className="d-inline-block align-top"
              alt="logo"
              padding="0"
            />
          </Navbar.Brand>
          {/* <Navbar.Brand href="#home">Sarojini Naidu / Indira Gandhi Hall Of Residence</Navbar.Brand> */}
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link style={{
                color: "#FBE5E5"
              }} href="/">Home</Nav.Link>
              {/* <NavDropdown title="" id="basic-nav-dropdown">
                <NavDropdown.Item href="#aboutsnig">About</NavDropdown.Item>
                <NavDropdown.Item href="#infrasnig">
                  Infrastructure
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  Something
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                  Separated link
                </NavDropdown.Item>
              </NavDropdown> */}
              {/* <Nav.Link style={{
                color: "#FBE5E5"
              }} href="hall">Office bearers</Nav.Link> */}
              <NavDropdown  title={
                <span style={{
                  color: "#FBE5E5"
                }}>Office bearers</span>
            } id="basic-nav-dropdown" >
          <NavDropdown.Item href="warden">Wardens</NavDropdown.Item>
          <NavDropdown.Item href="hall">Student Representatives</NavDropdown.Item>
        </NavDropdown>
              <Nav.Link
                style={{
                  color: "#FBE5E5"
                }} className="navLink" href="alumni">Alumni</Nav.Link>
              {/* <NavDropdown title="" id="basic-nav-dropdown">
                <NavDropdown.Item href="#Distinguished Alumni Awards">Distinguished Alumni Awards</NavDropdown.Item>
                <NavDropdown.Item href="#Distinguished Service Awards">Distinguished Service Awards</NavDropdown.Item>
                <NavDropdown.Item href="#Young Alumni Achiever Awards">Young Alumni Achiever Awards</NavDropdown.Item>
              </NavDropdown> */}
              <Nav.Link style={{
                color: "#FBE5E5"
              }} href="gallery">Gallery</Nav.Link>
              <Nav.Link style={{
                color: "#FBE5E5"
              }} href="achievements">Achievements</Nav.Link>
              <Nav.Link style={{
                color: "#FBE5E5"
              }} href="teams2">Web Team</Nav.Link>


            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default NavbarComp;
