import React, { useState } from 'react';
import { Link } from 'react-router-dom'
import { Button, Form, Grid, Header, Segment } from 'semantic-ui-react'

const Register = ({ mobile }) => {
  const [userDetails, setUserDetails] = useState({
    email: '',
    password: '',
    confirmPassword: ''
  })

  const handleChange = (e) => {
    setUserDetails({
      ...userDetails,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(userDetails)
  }

  return (
    <Grid textAlign='center' style={{ height: '80vh' }} verticalAlign='middle'>
      <Grid.Column style={{ maxWidth: 400, padding: '0 2em' }}>
        <Header as='h2' color='teal' textAlign='center'>
          Register with us
        </Header>
        <Form size='large' onSubmit={handleSubmit}>
          <Segment stacked>
            <Form.Input 
              fluid 
              icon='user' 
              iconPosition='left' 
              placeholder='E-mail address' 
              label='Email'
              name='email'
              value={userDetails.email}
              onChange={handleChange}
              />
            <Form.Input
              fluid
              icon='lock'
              iconPosition='left'
              placeholder='Password'
              type='password'
              name='password'
              value={userDetails.password}
              label='Password'
              onChange={handleChange}
            />
            <Form.Input
              fluid
              icon='lock'
              iconPosition='left'
              placeholder='Confirm Password'
              name='confirmPassword'
              type='password'
              value={userDetails.confirmPassword}
              label='Confirm Password'
              onChange={handleChange}
            />

            <Button color='blue' fluid size='large'>
              Signup
            </Button>
          </Segment>
        </Form>
        <Button as={Link} name='login' to='/login' fluid size='large' color='teal' style={{marginTop: '2em'}}>
          Signin
        </Button>
      </Grid.Column>
    </Grid>
  )
}

export default Register