import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom'
import getWidth from '../utils/getWidth';

import {
  Menu,
  Responsive,
  Segment,
  Sidebar,
} from 'semantic-ui-react';
import MobileNav from './MobileNav'


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
          <Menu.Item as={Link} name='home' to='/' active>
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
            vertical
          >
            <MobileNav handleToggle={this.handleToggle} />
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
