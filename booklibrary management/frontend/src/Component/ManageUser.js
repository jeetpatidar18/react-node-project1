import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import { Link } from "react-router-dom";

export function ManageUser() {
  return (
    <>
      <div>
        <Navbar bg="light" variant="light">
          <Container>
            <Navbar.Brand ></Navbar.Brand>
            <Nav className="me-auto">
              <LinkContainer to="/studentlist">
                <Nav.Link >Student</Nav.Link>
              </LinkContainer>
              <LinkContainer to="/librarianlist">
                <Nav.Link >Librarian</Nav.Link>
              </LinkContainer>
            </Nav>
          </Container>
        </Navbar>

      </div>
    </>
  );
}