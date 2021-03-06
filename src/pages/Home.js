import React from 'react'

import Layout from '../components/Layout'
import Pitch from '../components/Pitching'
import About from '../components/About'
import Testimonial from '../components/Testimonial'
import HomepageHeading from '../components/HomepageHeading'

const Home = () => (
  <Layout>
    <HomepageHeading mobile desktop />
    <Pitch />
    <About />
    <Testimonial />
  </Layout>
)

export default Home;