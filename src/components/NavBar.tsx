import { Container, Navbar, Nav } from "react-bootstrap";
import styles from "./navbar.module.css";
const NavBar = () => {
  return (
    <>
      <Container fluid className="shadow px-5 py-2">
        <Navbar expand="lg">
          <Navbar.Brand className={`${styles.navBrand}`}>
            <Nav.Link href="#home">Hundera.dev</Nav.Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbar-nav" />
          <Navbar.Collapse id="navbar-nav">
            <Nav
              className={`d-lg-flex justify-content-lg-end w-100 ${styles.navLink}`}
            >
              <Nav.Link className="flex-lg-item" href="">
                Home
              </Nav.Link>
              <Nav.Link className="flex-lg-item" href="#about">
                About
              </Nav.Link>
              <Nav.Link className="flex-lg-item" href="#projects">
                Projects
              </Nav.Link>
              <Nav.Link className="flex-lg-item" href="#contact">
                Contact
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </Container>
    </>
  );
};
export default NavBar;
