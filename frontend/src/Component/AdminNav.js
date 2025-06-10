import { Container, Nav, Navbar } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

export default function AdminNav() {
    return (
        <div>
            <Navbar bg="light" variant="light">
                <Container>
                    <Nav className="me-auto">
                        <LinkContainer to="/managebook">
                            <Nav.Link >ManageBook</Nav.Link>
                        </LinkContainer>
                        <LinkContainer to="/manageuser">
                            <Nav.Link >ManageUser</Nav.Link>
                        </LinkContainer>
                    </Nav>
                </Container>
            </Navbar>
        </div>
    );
}