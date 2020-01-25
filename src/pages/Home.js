import React from 'react'

import Layout from '../components/Layout'
import Jumbotron from '../components/Jumbotron';
import Pitch from '../components/Pitching'
import About from '../components/About'
import Testimonial from '../components/Testimonial'

const Home = () => (
  <Layout>
    <Jumbotron />
    <Pitch />
    <About />
    <Testimonial />
  </Layout>
)

export default Home