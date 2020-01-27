import React from 'react'
import { Card, Icon, Image } from 'semantic-ui-react'

const ProductCard = () => (
  <>
    <Card>
      <Image src='https://res.cloudinary.com/du1dicgew/image/upload/v1579977706/shirt5_tlsqsv.webp' wrapped ui={false} />
      <Card.Content>
        <Card.Header textAlign='center'>Blue Shirt</Card.Header>
        <Card.Description textAlign='center'>
          $39.99
        </Card.Description>
      </Card.Content>
    </Card>
    <Card>
      <Image src='https://res.cloudinary.com/du1dicgew/image/upload/v1579977669/shirt3_omxcg1.webp' wrapped ui={false} />
      <Card.Content>
        <Card.Header>Matthew</Card.Header>
        <Card.Meta>
          <span className='date'>Joined in 2015</span>
        </Card.Meta>
        <Card.Description>
          Matthew is a musician living in Nashville.
        </Card.Description>
      </Card.Content>
      <Card.Content extra>
        <a>
          <Icon name='user' />
          22 Friends
        </a>
      </Card.Content>
    </Card>
  </>
)

export default ProductCard