import { Container, Nav, Navbar } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
export function LibNav() {
    return (
        <>
            <Navbar bg="primary" variant="dark">
                <Container>
                    <Nav className="me-auto">
                        <LinkContainer to={'/assignbook'}>
                            <Nav.Link>AssignBook</Nav.Link>
                        </LinkContainer>
                        <LinkContainer to={'/recievebook'}>
                            <Nav.Link>RecieveBook</Nav.Link>
                        </LinkContainer>
                    </Nav>
                </Container>
            </Navbar>
            
        </>
    );
}