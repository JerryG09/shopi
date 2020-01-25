import React from 'react';
import {
  Segment,
} from 'semantic-ui-react';
import HomepageHeading from './HomepageHeading'

const Jumbotron = () => {

  return (
    <Segment
      inverted
      textAlign='center'
      style={{ minHeight: 600, padding: '1em 0em' }}
      vertical
    >
      <HomepageHeading />
    </Segment>
  )
}

export default Jumbotron;