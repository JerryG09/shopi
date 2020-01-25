import React from 'react';
import { Link } from 'react-router-dom';

import {
  Button,
  Container,
  Menu,
} from 'semantic-ui-react';

const Nav = ({ fixed }) => {

  return (
    <Container>
      <Menu.Item as={Link} name='home' to='/' active>
        Home
      </Menu.Item>
      <Menu.Item as={Link} name='shop' to='/shop'>Shop</Menu.Item>
      <Menu.Item as={Link} name='services' to='/services'>Services</Menu.Item>
      <Menu.Item as={Link} name='contact' to='/contact'>Contact</Menu.Item>
      <Menu.Item position='right'>
        <Button as={Link} name='login' to='/login' inverted={!fixed}>
          Log in
        </Button>
        <Button as={Link} name='signup' to='/signup' inverted={!fixed} primary={fixed} style={{ marginLeft: '0.5em' }}>
          Sign Up
        </Button>
      </Menu.Item>
    </Container>
  )
}

export default Nav