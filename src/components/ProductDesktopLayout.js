import PropTypes from 'prop-types';
import React from 'react';
import {
  Grid,
  Menu,
  Segment,
  Container
} from 'semantic-ui-react';
import ProductCard from './ProductCard'

const ProductDesktopLayout = () => {

  return (
    <Container>
      <Segment vertical>
        <Grid container stackable>
          <Grid.Row>
            <Grid.Column width={4} >
            <Menu vertical>
              <Menu.Item
                name='browse category'
              />
              <Menu.Item
                name='Shirts'
              />
              <Menu.Item
                name='Shoes'
              />
              <Menu.Item
                name='Hats'
              />
              <Menu.Item
                name='Sandals'
              />
            </Menu>
            </Grid.Column>
            <Grid.Column float='right' width={12} >
              <ProductCard />
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Segment>
    </Container>
  )
}

ProductDesktopLayout.propTypes = {
  children: PropTypes.node,
}

export default ProductDesktopLayout;