import PropTypes from 'prop-types';
import React, { Component } from 'react';
import getWidth from '../utils/getWidth'

import {
  Responsive,
  Visibility
} from 'semantic-ui-react';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer'

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
          <NavBar fixed={fixed} />
        </Visibility>

        {children}

        <Footer />
      </Responsive>
    )
  }
}

DesktopContainer.propTypes = {
  children: PropTypes.node,
}

export default DesktopContainer;