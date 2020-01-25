import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom'
import getWidth from '../utils/getWidth'

import HomepageHeading from './HomepageHeading';

import {
  Menu,
  Responsive,
  Segment,
  Sidebar,
} from 'semantic-ui-react';


class MobileContainer extends Component {
  state = {}

  handleSidebarHide = () => this.setState({ sidebarOpened: false })

  handleToggle = () => this.setState({ sidebarOpened: true })

  render() {
    const { children } = this.props
    const { sidebarOpened } = this.state

    return (
      <Responsive
        as={Sidebar.Pushable}
        getWidth={getWidth}
        maxWidth={Responsive.onlyMobile.maxWidth}
      >
        <Sidebar
          as={Menu}
          animation='push'
          inverted
          onHide={this.handleSidebarHide}
          vertical
          visible={sidebarOpened}
        >
          <Menu.Item as={Link} name='home' to='/home' active>
            Home
          </Menu.Item>
          <Menu.Item as={Link} name='shop' to='/shop'>Shop</Menu.Item>
          <Menu.Item as={Link} name='services' to='/services'>Services</Menu.Item>
          <Menu.Item as={Link} name='contact' to='/contact'>Contact</Menu.Item>
          <Menu.Item as={Link} name='login' to='/login'>Log in</Menu.Item>
          <Menu.Item as={Link} name='signup' to='/signup'>Sign Up</Menu.Item>
        </Sidebar>

        <Sidebar.Pusher dimmed={sidebarOpened}>
          <Segment
            inverted
            textAlign='center'
            style={{ minHeight: 350, padding: '1em 0em' }}
            vertical
          >
            {/* <Container>
              <Menu inverted pointing secondary size='large'>
                <Menu.Item onClick={this.handleToggle}>
                  <Icon name='sidebar' />
                </Menu.Item>
                <Menu.Item position='right'>
                  <Button name='login' to='/login' inverted>
                    Log in
                  </Button>
                  <Button name='signup' to='/signup' inverted style={{ marginLeft: '0.5em' }}>
                    Sign Up
                  </Button>
                </Menu.Item>
              </Menu>
            </Container> */}
            <HomepageHeading mobile />
          </Segment>

          {children}
        </Sidebar.Pusher>
      </Responsive>
    )
  }
}

MobileContainer.propTypes = {
  children: PropTypes.node,
}

export default MobileContainer;
