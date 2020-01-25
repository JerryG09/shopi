import PropTypes from 'prop-types';
import React from 'react'

import MobileContainer from './MobileContainer';
import DesktopContainer from './DesktopContainer';

const Layout = ({ children }) => (
  <div>
    <DesktopContainer>{children}</DesktopContainer>
    <MobileContainer>{children}</MobileContainer>
  </div>
)

Layout.propTypes = {
  children: PropTypes.node,
}

export default Layout;