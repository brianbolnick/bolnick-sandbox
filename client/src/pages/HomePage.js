import React, { Component } from 'react';
import styled from 'styled-components';
import Navbar from '../components/Navbar/Navbar'
import Link from '../components/Link/Link'

const gradients = [
  "background: linear-gradient(135deg, #CE9FFC 0%,#7367F0 100%);",
  "background:linear-gradient(135deg, #c3ec52 0%,#0ba29d 100%);",
  "background:linear-gradient(135deg, #0FF0B3 0%,#036ED9 100%);",
  "background:linear-gradient(135deg, #F36265 0%,#961276 100%);",
  "background:linear-gradient(135deg, #fad961 0%,#f76b1c 100%);"
]

const Container = styled.div`
  min-height: 100vh;
  min-width: 100vh;
  ${gradients[[Math.floor(Math.random() * gradients.length)]]}
  padding: 2%;
`


class HomePage extends Component {
  render() {
    return (
      <Container>
        <Navbar>
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
        </Navbar>
      </Container>
    );
  }
}

export default HomePage;
