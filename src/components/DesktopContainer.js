import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import getWidth from '../utils/getWidth'

import {
  Button,
  Container,
  Menu,
  Responsive,
  Segment,
  Visibility,
} from 'semantic-ui-react';
import HomepageHeading from '../components/HomepageHeading';

class DesktopContainer extends Component {
  state = {}

  hideFixedMenu = () => this.setState({ fixed: false })
  showFixedMenu = () => this.setState({ fixed: true })

  render() {
    const { children } = this.props
    const { fixed } = this.state

    return (
      <Responsive getWidth={getWidth} minWidth={Responsive.onlyTablet.minWidth}>
        <Visibility
          once={false}
          onBottomPassed={this.showFixedMenu}
          onBottomPassedReverse={this.hideFixedMenu}
        >
          <Segment
            inverted
            textAlign='center'
            style={{ minHeight: 700, padding: '1em 0em' }}
            vertical
          >
            <Menu
              fixed={fixed ? 'top' : null}
              inverted={!fixed}
              pointing={!fixed}
              secondary={!fixed}
              size='large'
            >
              <Container>
                <Menu.Item as={Link} name='home' to='/marketing' active>
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
            </Menu>
            <HomepageHeading />
          </Segment>
        </Visibility>

        {children}
      </Responsive>
    )
  }
}

DesktopContainer.propTypes = {
  children: PropTypes.node,
}

export default DesktopContainer;