import { Card, Image, Text, Button, Group } from '@mantine/core';
import { useContext } from 'react';
import { CartContext, ICartContext } from '../../context/Cart';
import { Product } from "../../types/Product"

type CardProps = {
  product: Product;
}

function ProductCard({ product }: CardProps): JSX.Element {
  const { addProduct, removeProduct } = useContext(CartContext) as ICartContext

  const { name, description, image, formattedPrice } = product;

  return (
    <div style={{ width: 300, margin: 'auto' }}>
      <Card shadow="sm" p="lg">
        <Card.Section>
          <Image src={image} height={160} width={340} alt={description} />
        </Card.Section>

        <Group position="apart" style={{ marginBottom: 5, marginTop: 10 }}>
          <Text weight={500}>{ name }</Text>
        </Group>

        <Text size="sm" style={{ lineHeight: 1.5, marginBottom: 5, marginTop: 10 }}>
          { description }
        </Text>

        <Text size="sm" style={{ lineHeight: 1.5, marginTop: 10, color: 'coral' }}>
          { formattedPrice }
        </Text>

        <Button variant="light" color="blue" onClick={() => addProduct(product)} fullWidth style={{ marginTop: 14 }}>
          Add to Cart
        </Button>
        <Button variant="light" color="blue" onClick={() => removeProduct(product.id)} fullWidth style={{ marginTop: 14 }}>
          Remove from Cart
        </Button>
      </Card>
    </div>
  )
}

export default ProductCard
