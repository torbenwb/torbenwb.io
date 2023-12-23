import { Navbar, Container, Nav } from "react-bootstrap";

export const SiteNav = () => 
{
    return (
        <Navbar bg="light" data-bs-theme="light">
            <Container>
            <Navbar.Brand href="/torbenwb.io/">Navbar</Navbar.Brand>
            <Nav className="me-auto">
                <Nav.Link href="/torbenwb.io/">Home</Nav.Link>
                <Nav.Link href="/torbenwb.io/about">About</Nav.Link>
                <Nav.Link href="/torbenwb.io/projects">Projects</Nav.Link>
            </Nav>
            </Container>
        </Navbar>
    )
}