import PropTypes from 'prop-types';
import React from 'react';
import { Link } from 'react-router-dom'

// import styled from 'styled-components'
import {
  Button,
  Container,
  Header,
  Icon,
} from 'semantic-ui-react';

// const CustomHeader = styled.h1`
//   font-size: ${props => (props.mobile ? '2em' : '4em')};
//   font-weight: 'normal';
//   margin-bottom: 0;
//   margin-top: ${props => (props.mobile ? '1.5em' : '2em')}
// `

const HomepageHeading = ({ mobile }) => (
  <Container text>
    <Header
      as='h1'
      content='Fashion Collection'
      inverted
      style={{
        fontSize: mobile ? '2em' : '4em',
        fontWeight: 'normal',
        marginBottom: 0,
        marginTop: mobile ? '1.5em' : '3em',
      }}
    />
    
    <Header
      as='h2'
      content='Do you want to get good deals?'
      inverted
      style={{
        fontSize: mobile ? '1.2em' : '1.7em',
        fontWeight: 'normal',
        marginTop: mobile ? '0.5em' : '1.5em',
      }}
    />
    <Button
      primary size='huge' as={Link} to='/shop'>
      SHOP NOW
      <Icon name='right arrow' />
    </Button>
  </Container>
)

HomepageHeading.propTypes = {
  mobile: PropTypes.bool,
}

export default  HomepageHeading;
