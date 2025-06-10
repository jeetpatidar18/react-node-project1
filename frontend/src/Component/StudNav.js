import { Container, Nav, Navbar } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import { Route, Routes } from "react-router-dom";
import IssueBook from "./IssueBook";
import SubmitBook from "./SubmitBook";
export function StudNav() {
    return (
        <>
            <Navbar bg="primary" variant="dark">
                <Container>
                    <Nav className="me-auto">
                        <LinkContainer to="/issuebook">
                            <Nav.Link>IssueBook</Nav.Link>
                        </LinkContainer>
                        <LinkContainer to="/submitbook">
                            <Nav.Link>SubmitBook</Nav.Link>
                        </LinkContainer>
                    </Nav>
                </Container>
            </Navbar>
            <Routes>
                <Route path='/issuebook' element={<IssueBook></IssueBook>}></Route>
                <Route path='/submitbook' element={<SubmitBook></SubmitBook>}></Route>
            </Routes>
            

        </>
    );
}