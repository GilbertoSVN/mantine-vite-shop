import { Container } from "@mantine/core"
import ProductList from "../../components/ProductList"
import useProducts from "../../hooks/useProducts"

function Catalogue(): JSX.Element {
  const { data, isFetching, isError } = useProducts({})

  return (
    <Container my={40} fluid={true}>
      { isError ? 
        <div>Error</div> :
        <ProductList data={data} />
      }
    </Container>
  )
}

export default Catalogue
