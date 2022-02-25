import React, { Component } from 'react';
import { Container } from 'react-bootstrap';
import { NavMenu } from './NavMenu';
import { Footer } from './Footer';

export class Layout extends Component {
  static displayName = Layout.name;

  render() {
    return (
      <div>
        <NavMenu />
        <Container>
          {this.props.children}
        </Container>
        <Footer />
      </div>
    );
  }
}
