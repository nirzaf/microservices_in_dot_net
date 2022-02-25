import React, { Component } from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { ApplicationPaths } from './Constants';

export class NavMenu extends Component
{
  static displayName = NavMenu.name;

  render()
  {
    return (
      <header>
        <Navbar bg="light" expand="lg">
          <Container>
            <Navbar.Brand as={Link} to="/">Play Economy</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="mr-auto">
                <Nav.Link as={Link} to="/">Home</Nav.Link>
                <Nav.Link as={Link} to={ApplicationPaths.CatalogPath}>Catalog</Nav.Link>
                <Nav.Link as={Link} to={ApplicationPaths.InventoryPath}>Inventory</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </header>
    );
  }
}
