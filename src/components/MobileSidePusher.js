import React from 'react';
import {
  Menu,
  Segment, Container, Icon, Button,
} from 'semantic-ui-react';

const MobileSidePusher = ({ children }) => {
  return (
    <Segment
      inverted
      textAlign='center'
      vertical
    >
      <Container>
        <Menu inverted pointing secondary size='large'>
          <Menu.Item onClick={this.handleToggle}>
            <Icon name='sidebar' />
          </Menu.Item>
          <Menu.Item position='right'>
            <Button name='login' to='/login' inverted>
              Get Started
            </Button>
          </Menu.Item>
        </Menu>
      </Container>
      { children }
    </Segment>
  )
}

export default  MobileSidePusher;
