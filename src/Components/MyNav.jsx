import { Container, Nav, Navbar } from "react-bootstrap";

const MyNav = function () {
  return (
    <Navbar collapseOnSelect expand="lg" bg="success" variant="dark">
      <Container fluid>
        <Navbar.Brand href="#home">MinisBooks</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#">Home</Nav.Link>
            <Nav.Link href="#">About</Nav.Link>
            <Nav.Link href="#">Browse</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default MyNav;
