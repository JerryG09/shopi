import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import {
  Button,
  Container,
  Menu,
} from 'semantic-ui-react';

const Nav = ({ fixed }) => {
  const [activeItem, setActiveItem] = useState('home')

  const handleItemClick = (e, { name }) => {
    console.log(name)
    setActiveItem(name)
  }

  return (
    <Container>
      <Menu.Item as={Link} name='home' to='/' active={activeItem === 'home'} onClick={handleItemClick} />
      <Menu.Item as={Link} name='shop' to='/shop' active={activeItem === 'shop'} />
      <Menu.Item as={Link} name='services' to='/services' active={activeItem === 'services'} />
      <Menu.Item as={Link} name='contact' to='/contact' active={activeItem === 'contact'} />
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