import { Container, Nav, Navbar } from "react-bootstrap";
import React from "react";
import { LinkContainer } from "react-router-bootstrap";
export function LoginBar() {
    return (
        <>
            <Navbar>
                <Container>
                    <Navbar.Brand></Navbar.Brand>
                    <Nav className="me-auto">
                        <LinkContainer to="/librarianlogin">
                            <Nav.Link >Login</Nav.Link>
                        </LinkContainer>
                        <LinkContainer to="/reglibrary">
                            <Nav.Link >Registration</Nav.Link>
                        </LinkContainer>
                    </Nav>
                </Container>
            </Navbar>
        </>
    )
}