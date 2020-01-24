import PropTypes from 'prop-types';
import React from 'react'

import Footer from '../components/Footer';
import MobileContainer from '../components/MobileContainer';
import DesktopContainer from '../components/DesktopContainer';
import Pitch from '../components/Pitching'
import About from '../components/About'
import Testimonial from '../components/Testimonial'

const ResponsiveContainer = ({ children }) => (
  <div>
    <DesktopContainer>{children}</DesktopContainer>
    <MobileContainer>{children}</MobileContainer>
  </div>
)

ResponsiveContainer.propTypes = {
  children: PropTypes.node,
}

const HomepageLayout = () => (
  <ResponsiveContainer>
    <Pitch />
    <About />
    <Testimonial />
    <Footer />
  </ResponsiveContainer>
)

export default HomepageLayout