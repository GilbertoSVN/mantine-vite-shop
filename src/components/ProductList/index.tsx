import { Grid } from "@mantine/core"
import { useMemo } from "react"
import { Product } from "../../types/Product"
import ProductCard from "../ProductCard";

type ProductListProps = {
  data: Product[] | undefined;
}

function ProductList({ data }: ProductListProps): JSX.Element {
  const getFormattedProduct = useMemo(() => {
    const formattedProduct = data?.map(product => {
      return {
        id: product.id,
        name: product.name,
        description: product.description,
        image: product.image,
        price: product.price,
        formattedPrice: Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(product.price)
      }
    })

    return formattedProduct
  }, [data])

  return (
    <Grid gutter={50}>
    { getFormattedProduct?.map(product => {
          return (
            <Grid.Col key={product.id} span={4}>
              <ProductCard product={product} />
            </Grid.Col>
          )
        })
      } 
    </Grid>
  )
}

export default ProductList;
