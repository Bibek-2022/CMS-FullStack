import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
export const Header = () => {
  return (
    // <Navbar collapseOnSelect expand="lg" className="navbar-transparent">
    //   <Container>
    //     <Navbar.Brand href="#home">ShopMe</Navbar.Brand>
    //     <Navbar.Toggle aria-controls="responsive-navbar-nav" />
    //     <Navbar.Collapse id="responsive-navbar-nav">
    //       <Nav className="me-auto">
    //         <Nav.Link href="#features">HOME</Nav.Link>
    //         <Nav.Link href="#pricing">PRODUCT</Nav.Link>
    //         <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
    //           <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
    //           <NavDropdown.Item href="#action/3.2">
    //             Another action
    //           </NavDropdown.Item>
    //           <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
    //           <NavDropdown.Divider />
    //           <NavDropdown.Item href="#action/3.4">
    //             Separated link
    //           </NavDropdown.Item>
    //         </NavDropdown>
    //       </Nav>
    //       <Nav>
    //         <Nav.Link href="#deets">More deets</Nav.Link>
    //         <Nav.Link eventKey={2} href="#memes">
    //           Dank memes
    //         </Nav.Link>
    //       </Nav>
    //     </Navbar.Collapse>
    //   </Container>
    // </Navbar>
    <nav class="navbar fixed-top navbar-expand-lg navbar-dark p-md-3">
      <div class="container">
        <a class="navbar-brand" href="#">
          Web Zone
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarNav">
          <div class="mx-auto"></div>
          <ul class="navbar-nav">
            <li class="nav-item">
              <a class="nav-link text-white" href="#">
                Home
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link text-white" href="#">
                About
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link text-white" href="#">
                Blog
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link text-white" href="#">
                Pricing
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link text-white" href="#">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
