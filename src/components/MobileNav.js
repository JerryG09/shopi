import React from 'react';
import {
  Menu,Container, Icon, Button,
} from 'semantic-ui-react';

const MobileNav = ({handleToggle}) => {
  return (
    <Container>
      <Menu inverted pointing secondary size='large'>
        <Menu.Item onClick={handleToggle}>
          <Icon name='sidebar' />
        </Menu.Item>
        <Menu.Item position='right'>
          <Button name='login' to='/login' inverted>
            Get Started
          </Button>
        </Menu.Item>
      </Menu>
    </Container>
  )
}

export default MobileNav;
