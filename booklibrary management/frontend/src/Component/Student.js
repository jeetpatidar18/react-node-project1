import React from "react"
import { Container, Nav, Navbar } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";


export function Student() {
    return (
        <div>
           {/* <StudLoginBar></StudLoginBar>  */}
           
           <Navbar bg="light" variant="light">
                <Container>
                    <Navbar.Brand ></Navbar.Brand>
                    <Nav className="me-auto">
                        <LinkContainer to="/login">
                            <Nav.Link>Login</Nav.Link>
                        </LinkContainer>
                        <LinkContainer to="/registration">
                            <Nav.Link>Registration</Nav.Link>
                        </LinkContainer>
                    </Nav>
                </Container>
            </Navbar>

        </div>
    )
}
