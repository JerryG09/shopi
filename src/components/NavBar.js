import React, {useState} from 'react';
import {
  Menu,
  Responsive,
  Segment,
  Visibility,
} from 'semantic-ui-react';
import Nav from './Nav'

const NavBAr = ({ fixed }) => {

  return (
    <Segment
      inverted
      textAlign='center'
      vertical
    >
      <Menu
        fixed={fixed ? 'top' : null}
        inverted={!fixed}
        pointing={!fixed}
        secondary={!fixed}
        size='large'
      >
        <Nav fixed={fixed} />
      </Menu>
    </Segment>
  )
}

export default NavBAr